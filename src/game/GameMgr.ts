enum GameState {
    INIT = 1,
    READY = 2,
}

// 和服务器一致
enum RoomState {
    SETUP = 1, // 等待玩家加入，全部玩家READY后发牌
    DEAL = 2, // shuffle，发牌/换手牌，全部结束后游戏开始
    PLAY = 3, // 游戏阶段
    RESULT = 4, // 结算
    OVER = 5, // 结束
    DONE = 6, // 结束所有操作
}

class GameMgr {
    private static readonly MAX_PLAYER_COUNT = 6;

    /* singleton */
    private static $mgr: GameMgr;
    static get inst(): GameMgr {
        if (!GameMgr.$mgr) {
            GameMgr.$mgr = new GameMgr();
        }
        return GameMgr.$mgr;
    }
    private constructor() { }

    private $players: Player[] = [];
    private readonly $user: User = User.inst; // 玩家本人
    private $matchInfo: Native.IMatchInfo;
    private $rid: string;
    private $uid: number;
    private $wdh: number;
    private $gameid: number = Config.GameId;

    private $state: GameState = GameState.INIT;
    private $roomState: RoomState = RoomState.SETUP;
    private $cookie: string;

    private $loaded: boolean = false; // scene $loaded
    private $uiMain: UIMain;
    clockwise: boolean = true;
    userSeat: number = 0;
    stackCnt: number = 0;
    aliveCnt: number = 0;

    get uid(): number {
        return this.$uid;
    }

    get rid(): string {
        return this.$rid;
    }

    get gameid(): number {
        return this.$gameid;
    }

    get players(): Player[] {
        return this.$players;
    }

    set uiMain(ui: UIMain) {
        this.$uiMain = ui;
    }

    getUid() {
        if (yess.exists) {
            egret.log('NATIVE mode');
            yess.getUid('platform.setUid');
        } else {
            egret.log('TEST mode');
            this.setUid(TestMode.MockUid);
        }
    }

    getWdh() {
        if (yess.exists) {
            egret.log('NATIVE mode');
            yess.getBombsWdh('platform.setWdh');
        } else {
            egret.log('TEST mode');
            this.setWdh(TestMode.MockWdh);
        }
    }

    getMatchInfo() {
        if (yess.exists) {
            egret.log('NATIVE mode');
            yess.getBombsMatchInfo('platform.setMatchInfo');
        } else {
            egret.log('TEST mode');
            this.setMatchInfo(TestMode.MockMatchInfo);
        }
    }

    getCookie() {
        if (yess.exists) {
            egret.log('NATIVE mode');
            yess.getCookie('http://47.94.202.234', 'platform.setCookie');
        } else {
            egret.log('TEST mode');
            this.setCookie(TestMode.MockCookie);
        }
    }

    gameBombsEnd(type: number, isWdh: number, gameResultJson: string) {
        console.log(gameResultJson);
        yess.gameBombsEnd(type, isWdh, gameResultJson);
    }

    setUid(uid: string | number) {
        egret.log(`UID: ${uid}`);
        if (this.$state === GameState.INIT) {
            this.$uid = +uid;
            this.tryInitGame();
        }
    }

    setWdh(wdh: string | number) {
        egret.log(`WDH: ${wdh}`);
        if (this.$state === GameState.INIT) {
            this.$wdh = +wdh;
            this.tryInitGame();
        }
    }

    setMatchInfo(info: Native.IMatchInfo) {
        egret.log(`GameState: ${this.$state}`);

        if (this.$state === GameState.INIT) {
            this.$matchInfo = info;
            for (let i = 0; i < this.$matchInfo.players.length; ++i) {
                const mip = this.$matchInfo.players[i];
                const player = new Player(i, mip);
                this.$players.push(player);
            }
            this.tryInitGame();
        }
    }

    setCookie(strCookie: string) {
        egret.log(`cookie: ${strCookie}`);
        if (this.$state === GameState.INIT) {
            this.$cookie = strCookie;
            this.tryInitGame();
        }
    }

    updateRoomInfo(roomInfo: Common.IRoomInfo) {
        this.$roomState = roomInfo.state;
        this.clockwise = roomInfo.clockwise === 1;
        this.stackCnt = roomInfo.deckInfo ? roomInfo.deckInfo.leftCount : 0;
        let tp: Player;
        let rp: Common.IPlayerInfo;
        this.aliveCnt = 0;
        for (let i = 0; i < this.$players.length; i++) {
            tp = this.$players[i];
            rp = roomInfo.players[i];
            tp.state = rp.state;
            if (rp.handsInfo && rp.handsInfo.cardIds) {
                tp.handsCnt = rp.handsInfo.cardIds.length;
            } else {
                tp.handsCnt = 0;
            }

            // TODO: attack marks
            tp.attackMark = 0;

            if (tp.state !== PlayerState.DEAD) {
                this.aliveCnt++;
            }

            if (tp.uid === User.inst.player.uid && rp.handsInfo) {
                User.inst.hands = rp.handsInfo.cardIds;
                this.$uiMain.setUserHands(User.inst.hands);
                if (tp.state === PlayerState.DEAD) {
                    NetMgr.inst.disconnect();
                }
            }
        }

        this.$uiMain.updateRoomInfo();
        this.$uiMain.showHandsCnt();
        this.$uiMain.showStackCnt();

        this.$uiMain.userAction(User.inst.player.state === PlayerState.ACTION);
        this.$uiMain.userAttack(User.inst.player.state === PlayerState.ATTACK);
        this.$uiMain.userPredict(
            User.inst.player.state === PlayerState.PREDICT
        );
        this.$uiMain.userXray(User.inst.player.state === PlayerState.XRAY);
    }

    sceneLoaded() {
        if (this.$state === GameState.INIT) {
            this.$loaded = true;
            this.tryInitGame();
        }
    }

    tryInitGame() {
        egret.log('Try init game');
        if (
            this.$state === GameState.INIT &&
            this.$uid &&
            this.$wdh &&
            this.$matchInfo &&
            this.$cookie &&
            this.$loaded &&
            NetMgr.inst.isConnected
        ) {
            this.initGame();
        }
    }

    private initGame() {
        egret.log('Init game');

        for (let i = 0; i < this.$players.length; i++) {
            if (this.$players[i].uid === this.$uid) {
                User.inst.player = this.$players[i];
                this.userSeat = i;
                break;
            }
        }

        this.$uiMain.setPlayerData(this.$players, this.userSeat);

        // egret.log(JSON.stringify(this.$matchInfo));

        this.$rid = this.$matchInfo.matchid;
        egret.log(`rid: ${this.$rid}`);

        this.$state = GameState.READY;
        NetMgr.inst.setUidAndRid(this.$uid, this.$rid);
        this.reqJoinRoom();
    }

    handleError(err: Common.IError) {
        if (err.msg) {
            this.showToast(err.msg);
        }
        // if (err.exit) {
        //     this.exitGame();
        // }
    }

    private reqJoinRoom() {
        const players: Common.IPlayerInfo[] = [];
        for (const p of this.$matchInfo.players) {
            players.push({
                uid: p.uid,
                isBot: p.type,
                name: p.nickname,
                state: 0,
                avatar: p.avatar,
                handsInfo: null,
                countDownTime: null,
            });
        }
        const joinRoomData: JoinRoom.IJoinRoomRequest = {
            cookie: this.$cookie,
            wdh: this.$wdh,
            players,
            gameId: this.$gameid,
        };
        NetMgr.inst.req.joinRoom(joinRoomData);
    }

    toDie() { }

    toWin() { }

    startGame() {
        egret.log('game start');
        this.$uiMain.updateHandsCnt();
        this.$uiMain.showHandsCnt(true);
        this.$uiMain.showGm(Config.Gm);
    }

    showToast(msg?: string) {
        if (!msg) {
            msg = 'yess yess yess';
        }
        yess.showAndroidToast(msg);
    }

    // 中途退出
    exitGame() {
        // yess.finishAndroidPage();
        const liveUids: number[] = [];
        for (const p of this.$players) {
            if (p.state != PlayerState.DEAD) {
                liveUids.push(p.uid);
            }
        }
        const gameResultJson = JSON.stringify(liveUids)
            .replace('[', '')
            .replace(']', '');

        this.gameBombsEnd(1, this.$wdh, gameResultJson);
    }

    gameover(rankUids: number[]) {
        egret.log('Game Over');
        NetMgr.inst.disconnect();
        const gameResultJson = JSON.stringify(rankUids)
            .replace('[', '')
            .replace(']', '');
        this.gameBombsEnd(2, this.$wdh, gameResultJson);
    }

    drawCard(uid: number, card?: Card) {
        if (uid === User.inst.player.uid && card !== undefined) {
            // User
            User.inst.nextCard = card;
        } else {
            // Others
            this.$uiMain.drawCard(uid);
        }
    }

    playCard(uid: number, card?: Card) {
        if (uid === User.inst.player.uid) {
            // TODO: User draw a card
        } else if (card !== undefined) {
            this.$uiMain.playCard(uid, card);
        }
    }
}
