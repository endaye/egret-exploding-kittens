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
    private constructor() {}

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
    predictIndex: number = 0; // 预言：炸弹在第几张
    xrayCards: Card[] = []; // 透视：三张牌
    rank: number[] = []; // 客户端本地记录的排名顺序

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
            console.log('NATIVE mode');
            yess.getUid('platform.setUid');
        } else {
            console.log('TEST mode');
            this.setUid(TestMode.MockUid);
        }
    }

    getUidsByPlayerState(state: PlayerState): number[] {
        const result = [];
        for (const p of this.$players) {
            if (p.state === state) {
                result.push(p.uid);
            }
        }
        return result;
    }

    getWdh() {
        if (yess.exists) {
            console.log('NATIVE mode');
            yess.getBombsWdh('platform.setWdh');
        } else {
            console.log('TEST mode');
            this.setWdh(TestMode.MockWdh);
        }
    }

    getMatchInfo() {
        if (yess.exists) {
            console.log('NATIVE mode');
            yess.getBombsMatchInfo('platform.setMatchInfo');
        } else {
            console.log('TEST mode');
            this.setMatchInfo(TestMode.MockMatchInfo);
        }
    }

    getCookie() {
        if (yess.exists) {
            console.log('NATIVE mode');
            yess.getCookie('http://47.94.202.234', 'platform.setCookie');
        } else {
            console.log('TEST mode');
            this.setCookie(TestMode.MockCookie);
        }
    }

    gameBombsEnd(type: number, isWdh: number, gameResultJson: string) {
        console.log(gameResultJson);
        yess.gameBombsEnd(type, isWdh, gameResultJson);
    }

    setUid(uid: string | number) {
        console.log(`UID: ${uid}`);
        if (this.$state === GameState.INIT) {
            this.$uid = +uid;
            this.tryInitGame();
        }
    }

    setWdh(wdh: string | number) {
        console.log(`WDH: ${wdh}`);
        if (this.$state === GameState.INIT) {
            this.$wdh = +wdh;
            this.tryInitGame();
        }
    }

    setMatchInfo(info: Native.IMatchInfo) {
        console.log(`GameState: ${this.$state}`);

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
        console.log(`cookie: ${strCookie}`);
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

        let allWaitOrDead = true;
        for (let i = 0; i < this.$players.length; i++) {
            tp = this.$players[i];
            rp = roomInfo.players[i];
            tp.state = rp.state;
            tp.countDownTime = rp.countDownTime;
            if (rp.handsInfo && rp.handsInfo.cardIds) {
                tp.handsCnt = rp.handsInfo.cardIds.length;
            } else {
                tp.handsCnt = 0;
            }

            // console.log(tp.uid, tp.countDownTime)
            allWaitOrDead =
                allWaitOrDead &&
                (tp.state === PlayerState.WAIT ||
                    tp.state === PlayerState.DEAD);

            tp.attackMark = rp.attackMark;

            if (tp.state !== PlayerState.DEAD) {
                this.aliveCnt++;
            } else if (this.rank.indexOf(tp.uid) < 0) {
                // 刚刚死亡的
                this.rank.unshift(tp.uid);
            }

            if (tp.uid === User.inst.player.uid) {
                if (rp.handsInfo && rp.handsInfo.cardIds) {
                    User.inst.checkHands(rp.handsInfo.cardIds);
                } else {
                    // 手牌为空
                    User.inst.checkHands([]);
                }

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
        this.$uiMain.userBeFavor(
            User.inst.player.state === PlayerState.FAVOR_ACTION
        );
        this.$uiMain.userDefuse(User.inst.player.state === PlayerState.DEFUSE);
        if (User.inst.player.state !== PlayerState.ACTION && !allWaitOrDead) {
            this.$uiMain.userPredict(false);
            this.$uiMain.userXray(false);
            this.userAttack(false);
            this.userSwap(false);
            this.userFavor(false);
        }
        // 只剩下一人的时候，检查退出
        if (
            this.aliveCnt === 1 &&
            User.inst.player.state !== PlayerState.DEAD
        ) {
            setTimeout(() => {
                this.finalExitGame();
            }, 500);
        }
    }

    sceneLoaded() {
        if (this.$state === GameState.INIT) {
            this.$loaded = true;
            this.tryInitGame();
        }
    }

    tryInitGame() {
        console.log('Try init game');
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
        console.log('Init game');
        this.vibrate();
        for (let i = 0; i < this.$players.length; i++) {
            if (this.$players[i].uid === this.$uid) {
                User.inst.player = this.$players[i];
                this.userSeat = i;
                break;
            }
        }

        this.$uiMain.setPlayerData(this.$players, this.userSeat);

        // console.log(JSON.stringify(this.$matchInfo));

        this.$rid = this.$matchInfo.matchid;

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

    toDie() {
        NetMgr.inst.req.defuseFailed();
    }

    toWin() {}

    startGame() {
        console.log('game start');
        this.$uiMain.updatePlayers();
        this.$uiMain.showHandsCnt(true);
        this.$uiMain.showGm(Config.Gm);
    }

    showToast(msg?: string) {
        if (msg) {
            yess.showAndroidToast(msg);
        }
    }

    // 中途退出
    exitGame() {
        console.log('exitGame')
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
        console.log(gameResultJson);
        NetMgr.inst.disconnect();
        this.gameBombsEnd(1, this.$wdh, gameResultJson);
    }

    // 最后退出
    finalExitGame(rankUids?: number[]) {
        console.log('finalExitGame')
        if (rankUids && rankUids.length === 5) {
            rankUids.reverse();
            for (const p of this.$players) {
                if (
                    p.state != PlayerState.DEAD &&
                    rankUids.indexOf(p.uid) < 0
                ) {
                    rankUids.unshift(p.uid);
                    break;
                }
            }
        } else if (this.rank.length === 6) {
            rankUids = this.rank;
        } else if (this.rank.length === 5) {
            this.rank.unshift(User.inst.player.uid);
            rankUids = this.rank;
        }
        const gameResultJson = JSON.stringify(rankUids)
            .replace('[', '')
            .replace(']', '');
        console.log(gameResultJson);
        NetMgr.inst.disconnect();
        this.gameBombsEnd(2, this.$wdh, gameResultJson);
    }

    gameover(rankUids: number[]) {
        console.log('Game Over');
        // 提前退出，传活着的id
        // 最后退出，传排名，最后一个死亡放在第一个
        if (rankUids.length >= 5) {
            this.finalExitGame(rankUids);
        } else {
            this.exitGame();
        }
    }

    drawCard(uid: number) {
        if (uid === User.inst.player.uid) {
            // User
            User.inst.drawing = true;
        } else {
            // Others
            this.$uiMain.otherDrawCard(uid);
        }
    }

    playCard(uid: number, card: Card, targetId?: number) {
        if (uid === User.inst.player.uid) {
            // TODO: User play a card
        } else {
            this.$uiMain.otherPlayCard(uid, card);
        }
        this.$uiMain.cardEffect(uid, card, targetId);
    }

    playCardRes(res: ReleaseCard.IReleaseCardResponese) {
        if (res.predictIndex) {
            this.predictIndex = res.predictIndex;
        }
        if (res.xrayCards) {
            this.xrayCards = res.xrayCards;
        }
    }

    userPlayCardAnim(cardIdx: number) {
        this.$uiMain.userPlayCardAnim(cardIdx);
    }

    userAttack(attack: boolean) {
        this.$uiMain.userAttack(attack);
    }

    userSwap(swap: boolean) {
        this.$uiMain.userSwap(swap);
    }

    userFavor(favor: boolean) {
        this.$uiMain.userFavor(favor);
    }

    vibrate(): void {
        // if (navigator.vibrate) {
        //     navigator.vibrate(300);
        // } else if (navigator['webkitVibrate']) {
        //     navigator['webkitVibrate'](300);
        // }
    }
}
