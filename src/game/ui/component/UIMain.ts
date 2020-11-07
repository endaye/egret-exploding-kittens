class UIMain extends eui.Component implements eui.UIComponent {
    btnExit: eui.Button;
    gm: eui.Group;

    bg1: eui.Image;
    testToast: eui.Button;
    testExit: eui.Button;
    testBomb: eui.Button;
    testUid: eui.Button;
    testMatch: eui.Button;
    testCookie: eui.Button;
    testDie: eui.Button;
    testWin: eui.Button;

    // 玩家
    player0: UIPlayer; // self user
    player1: UIPlayer;
    player2: UIPlayer;
    player3: UIPlayer;
    player4: UIPlayer;
    player5: UIPlayer;
    userName: eui.Label;
    players: UIPlayer[];
    hands: eui.List;
    stackCnt: eui.Label;
    deck: eui.Image;
    stack: eui.Image;
    playArea: eui.Image;
    direction: eui.Image;

    // 抓牌、出牌按钮
    btnDrawCard: eui.Button;
    btnPlayCard: eui.Button;
    btnPlayCardDisable: eui.Button;

    // 拆弹弹窗
    gpDefuse: eui.Group;
    defuseFrame: eui.Image;
    defuseBg: eui.Image;
    boom: eui.Image;
    bang: eui.Image;
    btnDefuse: eui.Button;
    btnDefuseDisable: eui.Button;
    btnDefuseCancel: eui.Button;
    defuseIdx: number = -1;
    gpBoom: eui.Group;
    gpBang: eui.Group;
    gpBack: eui.Group;
    gpBackOpts: eui.Group;
    btnOptLast: eui.Button;
    btnOpt1: eui.Button;
    btnOpt2: eui.Button;
    btnOpt3: eui.Button;
    btnOpt4: eui.Button;
    btnOpt5: eui.Button;
    btnOpt6: eui.Button;
    btnOpt7: eui.Button;
    btnOpt8: eui.Button;
    defuseBoomAnim: egret.Tween;
    bangAnim: egret.Tween;

    // 被攻击弹窗
    gpAttack: eui.Group;

    // 预言定位弹窗
    gpPredict: eui.Group;
    predictBoomSeq: eui.Label;
    btnPredict: eui.Button;

    // 透视弹窗
    gpXray: eui.Group;
    btnXray: eui.Button;
    xrayCard1: eui.Image;
    xrayCard2: eui.Image;
    xrayCard3: eui.Image;

    boomBackOpt: number;
    boomBackOptBtns: eui.Button[];

    deckTween: egret.Tween; // 抓拍摸牌的tween
    attackTween: egret.tween.TweenGroup; // 甩锅的tween
    swapTween0: egret.Tween; // 换牌的tween
    swapTween1: egret.Tween; // 换牌的tween

    // 洗牌用到的动画
    shuffleTween: egret.tween.TweenGroup;
    shuffleCard: eui.Image;

    // 压力表
    boomPin: eui.Image;

    // 交换手牌动画用的卡组
    swapCards0: eui.Group;
    swapCards1: eui.Group;

    // 索要
    favorBg: eui.Image;
    favorHand: eui.Image;
    favorAnim: egret.Tween;
    btnGiveAFavor: eui.Image;

    private cardSmScale = 0.5;
    private cardsArray: eui.ArrayCollection = new eui.ArrayCollection();

    constructor() {
        super();
        this.skinName = 'yui.Main';
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.createChildren();
        this.onInit();
    }

    onInit(): void {
        this.initPlayers();
        this.initHands();
        this.initBoomBackOpts();
        this.initListeners();

        this.userName.visible = false;
        this.stackCnt.visible = false;
        this.userAction(false);

        this.bgTween();
    }

    setPlayerData(data: Player[], userSeat: number) {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].setPlayer(
                data[(i + userSeat) % data.length],
                i == 0
            );
        }
        this.userName.text = data[userSeat].nickname;
        this.userName.visible = true;
    }

    setUserHands(hands: Card[]) {
        const tmp: { [img: string]: string }[] = [];
        for (const c of hands) {
            tmp.push(CardMgr.inst.cards[c]);
        }

        this.cardsArray.replaceAll(tmp);
    }

    private initPlayers() {
        this.players = [
            this.player0,
            this.player1,
            this.player2,
            this.player3,
            this.player4,
            this.player5,
        ];

        for (let i = 0; i < this.players.length; i++) {
            this.players[i].uiMain = this;
        }

        this.setDefaultAvatar();
    }

    private initHands() {
        this.hands.dataProvider = this.cardsArray;
        this.hands.itemRenderer = UICardItem;
        this.hands.allowMultipleSelection = false;
    }

    private initBoomBackOpts() {
        this.boomBackOptBtns = [
            this.btnOptLast,
            this.btnOpt1,
            this.btnOpt2,
            this.btnOpt3,
            this.btnOpt4,
            this.btnOpt5,
            this.btnOpt6,
            this.btnOpt7,
            this.btnOpt8,
        ];
    }

    private initListeners() {
        this.btnExit.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnExitClick,
            this
        );
        this.btnDrawCard.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnDrawClick,
            this
        );
        this.btnPlayCard.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnPlayClick,
            this
        );
        this.btnGiveAFavor.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnGiveAFavorClick,
            this
        );
        this.btnDefuse.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnDefuseClick,
            this
        );
        this.btnDefuseCancel.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnDefuseCancelClick,
            this
        );
        this.btnPredict.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onbtnPredictClick,
            this
        );
        this.btnXray.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onbtnXrayClick,
            this
        );
        this.hands.addEventListener(
            eui.ItemTapEvent.ITEM_TAP,
            this.onHandsSelected,
            this
        );

        for (let i = 0; i < this.boomBackOptBtns.length; i++) {
            const btn = this.boomBackOptBtns[i];
            const btnArg = i;
            btn.addEventListener(
                egret.TouchEvent.TOUCH_TAP,
                this.onBtnDefuseOptClick.bind(this, btnArg),
                this
            );
        }
        GameDispatcher.inst.addEventListener(
            EventName.CHECK_NEXT_CARD,
            this.onHandsRefresh,
            this
        );
        GameDispatcher.inst.addEventListener(
            EventName.HANDS_REFRESH,
            this.onHandsRefresh,
            this
        );
        GameDispatcher.inst.addEventListener(
            EventName.USER_DEFUSE,
            this.onUserDefuse,
            this
        );

        // TODO: remove this test part
        this.initTestListeners();
    }

    private setDefaultAvatar(): void {
        this.player0.setAvatar('Avatar_1_png');
        this.player1.setAvatar('Avatar_2_png');
        this.player2.setAvatar('Avatar_3_png');
        this.player3.setAvatar('Avatar_4_png');
        this.player4.setAvatar('Avatar_5_png');
        this.player5.setAvatar('Avatar_6_png');
    }

    updateRoomInfo() {
        this.updateDirection();
        this.updatePlayers();
        this.updateStackCnt();
        this.updateManometer();
    }

    updatePlayers() {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].update();
        }
    }

    updateStackCnt() {
        this.stackCnt.text = `剩余${GameMgr.inst.stackCnt}张`;
    }

    updateDirection() {
        this.direction.scaleX = GameMgr.inst.clockwise ? -1 : 1;
    }

    // 更新压力表
    updateManometer() {
        const stackCnt = GameMgr.inst.stackCnt;
        const boomCnt = GameMgr.inst.aliveCnt - 1;
        // console.log(`boomCnt=${boomCnt}, stackCnt=${GameMgr.inst.stackCnt}`)
        if (stackCnt >= 0 && boomCnt >= 0) {
            this.manometerAnim(boomCnt, stackCnt);
        } else if (boomCnt == 0) {
            console.warn(
                `压力表参数有误：boomCnt=${boomCnt}, stackCnt=${GameMgr.inst.stackCnt}`
            );
        }
    }

    // 实现压力表旋转动画
    manometerAnim(boomCnt: number, stackCnt: number): void {
        if (stackCnt > 0) {
            const tw = egret.Tween.get(this.boomPin);
            const arg: number = (boomCnt / stackCnt - 0.6) * 270; // 左右最大角度135, 0.6是为了更左倾
            tw.to({ rotation: arg }, 1000);
            egret.Tween.resumeTweens(this.boom);
        } else {
            this.boomPin.rotation = 135; // 最大
        }
    }

    showHandsCnt(show: boolean = true) {
        for (let i = 1; i < this.players.length; i++) {
            this.players[i].handsCnt.visible = show;
            this.players[i].handsBg.visible = show;
        }
    }

    showStackCnt(show: boolean = true) {
        this.stackCnt.visible = show;
    }

    showGm(show: boolean) {
        this.gm.visible = show;
    }

    // 玩家行动
    userAction(action: boolean) {
        this.btnDrawCard.visible = action && !User.inst.selecting;
        this.btnPlayCardDisable.visible = action && !User.inst.selecting;
        this.btnPlayCard.visible =
            action &&
            User.inst.ableToPlayACard(this.hands.selectedIndex) &&
            !User.inst.selecting;
    }

    // 玩家被索要行动
    userBeFavor(beFavored: boolean) {
        this.btnGiveAFavor.visible = beFavored;
        this.favorBg.visible = beFavored;
        this.favorHand.visible = beFavored;
    }

    // 玩家选择攻击目标
    userAttack(attack: boolean) {
        for (let i = 0; i < this.players.length; i++) {
            const ui = this.players[i];
            const show = attack && ui.player.state !== PlayerState.DEAD;
            ui.showBtnAttack(show);
        }
        User.inst.selecting = attack;
    }

    // 玩家选择交换目标
    userSwap(swap: boolean) {
        for (let i = 0; i < this.players.length; i++) {
            const ui = this.players[i];
            const show =
                swap &&
                ui.player.uid !== User.inst.player.uid &&
                ui.player.state !== PlayerState.DEAD;
            ui.showBtnSwap(show);
        }
        User.inst.selecting = swap;
    }

    // 玩家选择索要目标
    userFavor(favor: boolean) {
        for (let i = 0; i < this.players.length; i++) {
            const ui = this.players[i];
            const show =
                favor &&
                ui.player.uid !== User.inst.player.uid &&
                ui.player.state !== PlayerState.DEAD;
            ui.showBtnFavor(show);
        }
        User.inst.selecting = favor;
    }

    // 玩家看预言第几张雷
    userPredict(show: boolean) {
        this.gpPredict.visible = show;
        if (!show) {
            return;
        }
        if (GameMgr.inst.predictIndex > -1) {
            this.predictBoomSeq.text = `第${GameMgr.inst.predictIndex}张`;
        } else {
            this.gpPredict.visible = false;
            // console.error('GameMgr.inst.predictIndexy <= 0')
        }
    }

    // 玩家看透视三张牌
    userXray(show: boolean) {
        this.gpXray.visible = show;
        if (!show) {
            return;
        }
        const card3: Card[] = GameMgr.inst.xrayCards;
        if (card3 && card3.length > 0) {
            if (card3.length > 0) {
                this.xrayCard1.visible = true;
                console.log(CardMgr.inst.cards[card3[0]].img);
                this.xrayCard1.source = CardMgr.inst.cards[card3[0]].img;
            } else {
                this.xrayCard1.visible = false;
            }
            if (card3.length > 1) {
                this.xrayCard2.visible = true;
                this.xrayCard2.source = CardMgr.inst.cards[card3[1]].img;
            } else {
                this.xrayCard2.visible = false;
            }
            if (card3.length > 2) {
                this.xrayCard3.visible = true;
                this.xrayCard3.source = CardMgr.inst.cards[card3[2]].img;
            } else {
                this.xrayCard3.visible = false;
            }
        } else {
            this.gpXray.visible = false;
        }
    }

    // 玩家拆弹
    userDefuse(show: boolean, defuseIdx?: number) {
        this.userDefuseAnim(); // 弹出拆弹界面
        this.defuseBg.visible = false;
        this.gpDefuse.visible = show;
        this.defuseFrame.visible = true;
        this.gpBoom.visible = true;
        this.gpBang.visible = false;
        this.gpBack.visible = false;
        this.defuseIdx = defuseIdx === undefined ? this.defuseIdx : defuseIdx;
        console.log(`this.defuseIdx = ${this.defuseIdx}`);
        this.btnDefuse.visible = this.defuseIdx > -1;
        this.btnDefuseDisable.visible = this.defuseIdx < 0;
    }

    // 其他玩家抓牌动画
    otherDrawCard(uid: number) {
        if (this.deckTween) {
            egret.Tween.removeTweens(this.deckTween);
        }

        for (const uip of this.players) {
            if (uip.player.uid === uid) {
                this.deck.source = RES.getRes(
                    CardMgr.inst.cards[Card.DECK]['img']
                );
                this.deck.visible = true;
                this.deck.x = this.stack.x;
                this.deck.y = this.stack.y;
                this.deck.scaleX = this.stack.scaleX;
                this.deck.scaleY = this.stack.scaleY;
                const globalPos = uip.parent.localToGlobal(uip.x, uip.y);
                const localPos = this.deck.parent.globalToLocal(
                    globalPos.x,
                    globalPos.y
                );
                const x = localPos.x + this.deck.width * this.cardSmScale * 0.5;
                const y = localPos.y;

                this.deckTween = egret.Tween.get(this.deck);
                this.deckTween
                    .to(
                        {
                            x: x,
                            y: y,
                            scaleX: this.cardSmScale,
                            scaleY: this.cardSmScale,
                        },
                        600
                    )
                    .to({ visible: false }, 0);
                break;
            }
        }
    }

    // 其他玩家出牌动画
    otherPlayCard(uid: number, card: Card) {
        if (this.deckTween) {
            egret.Tween.removeTweens(this.deckTween);
        }

        for (const uip of this.players) {
            if (uip.player.uid === uid) {
                this.deck.visible = true;
                this.deck.source = RES.getRes(CardMgr.inst.cards[card]['img']);
                this.deck.scaleX = this.cardSmScale;
                this.deck.scaleY = this.cardSmScale;
                const globalPos = uip.parent.localToGlobal(uip.x, uip.y);
                const localPos = this.deck.parent.globalToLocal(
                    globalPos.x,
                    globalPos.y
                );
                this.deck.x =
                    localPos.x + this.deck.width * this.cardSmScale * 0.5;
                this.deck.y = localPos.y;

                this.deckTween = egret.Tween.get(this.deck);
                this.deckTween
                    .to(
                        {
                            x: this.playArea.x,
                            y: this.playArea.y,
                            scaleX: this.playArea.scaleX,
                            scaleY: this.playArea.scaleY,
                        },
                        600
                    )
                    .to({ visible: false }, 0)
                    .call(() => {
                        this.playArea.source = RES.getRes(
                            CardMgr.inst.cards[card]['img']
                        );
                        this.playArea.visible = true;
                    });
                break;
            }
        }
    }

    cardEffect(uid: number, card: Card, targetId?: number) {
        if (card === Card.SHUFFLE) {
            this.shuffleAnim();
        } else if (card == Card.PREDICT) {
            this.userPredict(true);
        } else if (card == Card.XRAY) {
            this.userXray(true);
        } else if (card == Card.DRAWBACK) {
            this.userDrawCardAnim();
        } else if ((card == Card.ATTACK || card == Card.ATTACK2) && targetId) {
            if (targetId === User.inst.player.uid) {
                this.userBeAttackedAnim();
            } else {
                this.otherBeAttackedAnim(targetId);
            }
        } else if (card == Card.FAVOR) {
            if (targetId === User.inst.player.uid) {
                this.userBeFavoredAnim();
            } else {
                this.otherBeFavoredAnim(targetId);
            }
        } else {
            // 这里条件是错误的，单纯用于调试交换
        }
    }

    // 自己抓牌
    userDrawCardAnim() {
        if (this.deckTween) {
            egret.Tween.removeTweens(this.deckTween);
        }

        this.deck.source = RES.getRes(CardMgr.inst.cards[Card.DECK]['img']);
        this.deck.visible = true;
        this.deck.x = this.stack.x;
        this.deck.y = this.stack.y;
        this.deck.scaleX = this.stack.scaleX;
        this.deck.scaleY = this.stack.scaleY;
        // console.log(`index: ${User.inst.player.handsCnt - 1}`);
        const index = Math.max(
            0,
            Math.min(this.hands.numChildren, User.inst.player.handsCnt) - 1
        );
        const last = this.hands.getChildAt(this.hands.numChildren - 1);
        const globalPos = last.parent.localToGlobal(last.x, last.y);
        const localPos = this.deck.parent.globalToLocal(
            globalPos.x,
            globalPos.y
        );
        const x = localPos.x;
        const y = localPos.y;

        this.deckTween = egret.Tween.get(this.deck);
        this.deckTween
            .to(
                {
                    x: x,
                    y: y,
                },
                600
            )
            .to({ visible: false }, 0);
    }

    // 自己出牌
    userPlayCardAnim(cardIdx: number) {
        if (this.deckTween) {
            egret.Tween.removeTweens(this.deckTween);
        }

        this.hands.selectedIndex = null;
        const selectCard = this.hands.getChildAt(cardIdx) as UICardItem;
        const cardImg = selectCard.card.source;
        const globalPos = selectCard.parent.localToGlobal(
            selectCard.x,
            selectCard.y
        );
        const localPos = this.deck.parent.globalToLocal(
            globalPos.x,
            globalPos.y
        );
        this.deck.visible = true;
        this.deck.source = cardImg;
        this.deck.scaleX = selectCard.deck.scaleX;
        this.deck.scaleY = selectCard.deck.scaleY;
        this.deck.x = localPos.x;
        this.deck.y = localPos.y;

        const x = this.playArea.x;
        const y = this.playArea.y;

        this.deckTween = egret.Tween.get(this.deck);
        this.deckTween
            .to(
                {
                    x: x,
                    y: y,
                },
                600
            )
            .to({ visible: false }, 0)
            .call(() => {
                this.playArea.source = cardImg;
                this.playArea.visible = true;
                this.onHandsRefresh();
            });
    }

    // 玩家被攻击动画
    userBeAttackedAnim(): void {
        // TODO: 之后添加动画
        this.gpAttack.visible = true;
        this.attackTween.play(0);
        if (this.gpAttack.visible) {
            setTimeout(() => {
                this.gpAttack.visible = false;
            }, 800);
        }
    }

    // 其他玩家被攻击动画
    otherBeAttackedAnim(targetId: number): void {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].player.uid === targetId) {
                this.players[i].beAttackAnim();
            }
        }
    }

    // 玩家被要手牌动画
    userBeFavoredAnim(): void {
        this.favorBg.visible = true;
        this.favorHand.visible = true;
        this.favorHand.y = -500;
        this.favorAnim = egret.Tween.get(this.favorHand);
        this.favorAnim.to(
            {
                y: 0,
            },
            400
        );
        setTimeout(() => {
            this.favorBg.visible = false;
            this.favorHand.visible = false;
        }, 2000);
    }

    // 其他玩家被索要动画
    otherBeFavoredAnim(targetId: number): void {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].player.uid === targetId) {
                this.players[i].beFavoredAnim();
            }
        }
    }

    // 两个玩家交换手牌动画
    swapAnim(uid0: number, uid1: number): void {
        // 策略是用固定数量的动画来交换，正确数量的暂时没有更新
        if (this.swapTween0) {
            egret.Tween.removeTweens(this.swapTween0);
        }
        if (this.swapTween1) {
            egret.Tween.removeTweens(this.swapTween1);
        }

        // 为了减少遍历次数，用一个简单的map记录两个玩家的全局坐标
        let playerPos: { [uid: number]: egret.Point } = {};
        for (const uip of this.players) {
            if (uip.player.uid == uid0 || uip.player.uid == uid1) {
                playerPos[uip.player.uid] = uip.parent.localToGlobal(
                    uip.x,
                    uip.y
                );
            }
        }

        // 先把预置好的卡牌放在合适位置，这样不会突兀
        this.swapCards0.x = playerPos[uid0].x;
        this.swapCards0.y = playerPos[uid0].y;
        this.swapCards1.x = playerPos[uid1].x;
        this.swapCards1.y = playerPos[uid1].y;

        this.swapCards0.visible = true;
        this.swapCards1.visible = true;

        this.swapTween0 = egret.Tween.get(this.swapCards0);
        this.swapTween1 = egret.Tween.get(this.swapCards1);

        this.swapTween0
            .to(
                {
                    x: playerPos[uid1].x,
                    y: playerPos[uid1].y,
                },
                600
            )
            .to({ visible: false }, 0);

        this.swapTween1
            .to(
                {
                    x: playerPos[uid0].x,
                    y: playerPos[uid0].y,
                },
                600
            )
            .to({ visible: false }, 0);
    }

    // 玩家拆除页面
    // 在外层判断拆弹状态，这里就没写了
    userDefuseAnim(): void {
        if (this.defuseBoomAnim) {
            egret.Tween.removeTweens(this.boom);
        }
        this.gpDefuse.visible = true;
        this.defuseBoomAnim = egret.Tween.get(this.boom, { loop: true });
        this.defuseBoomAnim
            .to({ scaleX: 1.2, scaleY: 1.2 }, 400)
            .to({ scaleX: 1, scaleY: 1 }, 300);
    }

    // 拆弹失败
    userBangAnim(): void {
        if (this.bangAnim) {
            egret.Tween.removeTweens(this.bang);
        }

        this.bangAnim = egret.Tween.get(this.bang);
        this.bangAnim
            .to({ visible: true }, 0)
            .to({ scaleX: 1.2 }, 400, egret.Ease.circIn)
            .to({ scaleY: 1.5 }, 300, egret.Ease.circIn);
    }

    // 洗牌动画
    shuffleAnim(): void {
        // 参数0代表从头播放
        this.shuffleTween.play(0);
    }

    // 背景动画
    private bgTween(): void {
        const tw = egret.Tween.get(this.bg1, { loop: true });
        tw.to({ rotation: 360 }, 30000).to({ rotation: 0 }, 0);
    }

    onHandsSelected(e: eui.PropertyEvent) {
        if (User.inst.selecting) return;
        GameDispatcher.inst.dispatchEvent(
            new egret.Event(EventName.HANDS_REFRESH, false, false, {
                selectedIndex: this.hands.selectedIndex,
            })
        );
        this.onHandsRefresh();
    }

    onHandsRefresh(e?: eui.PropertyEvent) {
        this.setUserHands(User.inst.hands);
        this.userAction(
            User.inst.player.state === PlayerState.ACTION ||
                User.inst.player.state === PlayerState.PREDICT ||
                User.inst.player.state === PlayerState.XRAY
        );
    }

    onUserDefuse(e: eui.PropertyEvent) {
        this.userDefuse(e.data.show, e.data.defuseIdx);
    }

    onBtnExitClick() {
        GameMgr.inst.exitGame();
    }

    onBtnDrawClick() {
        this.userDrawCardAnim();
        User.inst.drawACard();
    }

    onBtnPlayClick() {
        if (this.hands.selectedIndex > -1) {
            const cardIdx: number = this.hands.selectedIndex;
            User.inst.playACard(cardIdx);
        }
    }

    onBtnGiveAFavorClick() {
        if (this.hands.selectedIndex > -1) {
            User.inst.giveAFavor(this.hands.selectedIndex);
            this.hands.selectedIndex = undefined;
            this.onHandsRefresh();
        }
    }

    onBtnDefuseClick() {
        if (this.defuseIdx > -1) {
            this.hands.selectedIndex = this.defuseIdx;

            this.gpBang.visible = false;
            this.gpBoom.visible = false;
            this.gpBack.visible = true;
            this.defuseFrame.visible = false;
            this.defuseBg.visible = true;
            for (let i = 0; i < this.boomBackOptBtns.length; i++) {
                this.boomBackOptBtns[i].visible =
                    i === 0 || i - 1 < GameMgr.inst.stackCnt;
            }
        }
    }

    onBtnDefuseOptClick(opt: number) {
        console.log(`Defuse的手牌位置${this.defuseIdx}`);
        console.log(`炸弹放回选项为${opt}`);
        const pos = opt === 0 ? Math.max(GameMgr.inst.stackCnt, 0) : opt;
        console.log(`将炸弹放到${pos}位置`);
        this.userDefuse(false, this.defuseIdx);
        if (this.defuseIdx > -1) {
            this.userPlayCardAnim(this.defuseIdx);
            User.inst.playACard(this.defuseIdx, null, pos);
        }
    }

    onBtnDefuseCancelClick() {
        // 炸弹先膨胀，然后爆炸
        // 先移除，要不然那个循环的无法去除
        egret.Tween.removeTweens(this.boom);
        this.defuseBoomAnim = egret.Tween.get(this.boom);
        this.defuseBoomAnim
            .to({ scaleX: 1.6, scaleY: 1.6 }, 800)
            .to({ visible: false }, 0)
            .call(() => {
                this.gpBoom.visible = false;
                this.gpBang.visible = true;
                this.userBangAnim();
            });
        GameMgr.inst.toDie();
    }

    onbtnPredictClick() {
        this.userPredict(false);
        this.userAction(true);
    }

    onbtnXrayClick() {
        this.userXray(false);
        this.userAction(true);
    }

    //! TEST !//

    initTestListeners() {
        this.testToast.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestToast,
            this
        );
        this.testExit.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestExit,
            this
        );
        this.testBomb.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestBomb,
            this
        );
        this.testUid.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestUid,
            this
        );
        this.testMatch.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestMatch,
            this
        );
        this.testCookie.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestCookie,
            this
        );
        this.testDie.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestDie,
            this
        );
        this.testWin.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestWin,
            this
        );
    }

    onTestToast() {
        GameMgr.inst.showToast();
    }

    onTestExit() {
        GameMgr.inst.exitGame();
    }

    onTestBomb() {
        const rankUids: number[] = [];
        for (const p of GameMgr.inst.players) {
            rankUids.push(p.uid);
        }
        GameMgr.inst.gameover(rankUids);
    }

    onTestUid() {
        GameMgr.inst.getUid();
    }

    onTestMatch() {
        GameMgr.inst.getMatchInfo();
    }

    onTestCookie() {
        GameMgr.inst.getCookie();
    }

    onTestDie() {
        GameMgr.inst.toDie();
    }

    onTestWin() {
        GameMgr.inst.toWin();
    }
}
