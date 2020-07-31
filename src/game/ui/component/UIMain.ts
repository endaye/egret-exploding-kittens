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

    btnDrawCard: eui.Button;
    btnPlayCard: eui.Button;
    btnPlayCardDisable: eui.Button;

    // 拆弹弹窗
    gpDefuse: eui.Group;
    defuseFrame: eui.Image;
    defuseBg: eui.Image;
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

    deckTween: any;
    attackTween: any;

    // 压力表
    boomPin: eui.Image;

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
        let tmp: { [img: string]: string }[] = [];
        for (const c of hands) {
            tmp.push(CardMgr.inst.cards[c]);
        }

        this.cardsArray.replaceAll(tmp);
        // this.hands.selectedIndex = 0;
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
        this.updateHandsCnt();
        this.updateStackCnt();
        this.updateAttack();
        this.updateManometer();
    }

    updateHandsCnt() {
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

    updateAttack() {
        // TODO: animation
        this.gpAttack.visible = this.player0.player.attackMark > 0;
        if (this.gpAttack.visible) {
            setTimeout(() => {
                this.gpAttack.visible = false;
            }, 800);
        }
    }

    // 更新压力表 
    updateManometer() {
        const stackCnt = GameMgr.inst.stackCnt;
        const boomCnt = GameMgr.inst.aliveCnt - 1;
        egret.log(`boomCnt=${boomCnt}, stackCnt=${GameMgr.inst.stackCnt}`)
        if (stackCnt >= 0 && boomCnt > 0) {
            // TODO: 具体实现，这里会调用你在压力表里的具体方法
            this.updatePressure(boomCnt, stackCnt);
        } else {
            egret.warn(`压力表参数有误：boomCnt=${boomCnt}, stackCnt=${GameMgr.inst.stackCnt}`)
        }
    }

    updatePressure(boomCnt:number, stackCnt:number):void{
		let thePin = egret.Tween.get(this.boomPin);
		let arg:number = (boomCnt / stackCnt) * 270 - 100;
		thePin.to({rotation: arg}, 1000);
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
        this.btnDrawCard.visible = action;
        this.btnPlayCardDisable.visible = action;
        this.btnPlayCard.visible =
            action && User.inst.ableToPlayACard(this.hands.selectedIndex);
    }

    // 玩家选择攻击目标
    userAttack(attack: boolean) {
        for (let i = 0; i < this.players.length; i++) {
            const ui = this.players[i];
            const show =
                attack &&
                ui.player.uid !== User.inst.player.uid &&
                ui.player.state !== PlayerState.DEAD;
            ui.showBtnAttack(show);
        }
    }

    // 玩家看预言第几张雷
    userPredict(show: boolean) {
        this.gpPredict.visible = show;
        if (!show) {
            return;
        }
        if (User.inst.boomSeq > -1) {
            this.predictBoomSeq.text = `第${User.inst.boomSeq + 1}张`;
        } else {
            this.gpPredict.visible = false;
        }
    }

    // 玩家看透视三张牌
    userXray(show: boolean) {
        this.gpXray.visible = show;
        if (!show) {
            return;
        }
        const card3: Card[] = User.inst.card3;
        console.log(card3);
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
        this.defuseBg.visible = false;
        this.gpDefuse.visible = show;
        this.defuseFrame.visible = true;
        this.gpBoom.visible = true;
        this.gpBang.visible = false;
        this.gpBack.visible = false;
        this.defuseIdx = defuseIdx === undefined ? this.defuseIdx : defuseIdx;
        egret.log(`this.defuseIdx = ${this.defuseIdx}`);
        this.btnDefuse.visible = this.defuseIdx > -1;
        this.btnDefuseDisable.visible = this.defuseIdx < 0;
    }

    // 其他玩家抓牌动画
    drawCard(uid: number) {
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
                    1000
                    )
                    .to({ visible: false }, 0);
                break;
            }
        }
    }

    // 其他玩家出牌动画
    playCard(uid: number, card: Card) {
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
                    1000
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
        console.log(`index: ${User.inst.player.handsCnt - 1}`);
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
            1000
            )
            .to({ visible: false }, 0)
            .call(() => {
                User.inst.checkNextCard();
            });
    }

    // 自己出牌
    userPlayCardAnim() {
        if (this.deckTween) {
            egret.Tween.removeTweens(this.deckTween);
        }

        const selectCard = this.hands.getChildAt(
            this.hands.selectedIndex
        ) as UICardItem;
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
            1000
            )
            .to({ visible: false }, 0)
            .call(() => {
                this.playArea.source = cardImg;
                this.playArea.visible = true;
            });
    }

    // 背景动画
    private bgTween(): void {
        const tw = egret.Tween.get(this.bg1, { loop: true });
        tw.to({ rotation: 360 }, 30000).to({ rotation: 0 }, 0);
    }

    onHandsSelected(e: eui.PropertyEvent) {
        GameDispatcher.inst.dispatchEvent(
            new egret.Event(EventName.HANDS_REFRESH, false, false, {
                selectedIndex: this.hands.selectedIndex,
            })
        );
    }

    onCheckNextCard(e: eui.PropertyEvent) {
        // 检查下一个张牌，关闭所有的pop弹窗
        this.userDefuse(false, -1);
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
            this.userPlayCardAnim();
            User.inst.playACard(this.hands.selectedIndex);
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
        egret.log(`Defuse的手牌位置${this.defuseIdx}`);
        egret.log(`炸弹放回选项为${opt}`);
        const pos =
            opt === 0 ? Math.max(GameMgr.inst.stackCnt - 1, 0) : opt - 1;
        egret.log(`将炸弹放到${pos}位置`);
        this.userDefuse(false, this.defuseIdx);
        if (this.defuseIdx > -1) {
            this.userPlayCardAnim();
            User.inst.playACard(this.defuseIdx, pos);
        }
    }

    onBtnDefuseCancelClick() {
        this.gpBoom.visible = false;
        this.gpBang.visible = true;
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

    /////////////// TEST ///////////////

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
