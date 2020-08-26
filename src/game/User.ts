enum ReleaseMethod {
    FAVOR = 1, // 因为索要给出
    NORMAL = 2, // 正常出牌
}

class User {
    private static $user: User;
    static get inst() {
        if (!User.$user) {
            User.$user = new User();
        }
        return User.$user;
    }
    private constructor() { }

    player: Player;
    private $hands: Card[] = []; // 手牌
    prevCard: Card; // 刚刚打出的牌
    nextCard: Card; // 即将抓到的牌
    boomSeq: number; // 预言：炸弹在第几张
    card3: Card[]; // 透视：三张牌
    drawing: boolean = false; // 正在抓拍

    get hands() {
        return this.$hands;
    }

    set hands(hands: Card[]) {
        if (this.player === undefined) {
            return;
        }
        this.$hands = hands;
        this.player.handsCnt = this.$hands.length;
    }

    drawACard() {
        this.drawing = true;
        NetMgr.inst.req.pickCard();
    }

    playACard(cardIdx: number, target?: number) {
        const card = this.$hands[cardIdx];
        NetMgr.inst.req.releaseCard({
            cardId: card,
            targetId: target,
            favorPush: ReleaseMethod.NORMAL,
        });
        this.prevCard = this.hands.splice(cardIdx, 1)[0];

        GameDispatcher.inst.dispatchEvent(
            new egret.Event(EventName.HANDS_REFRESH, false, false)
        );
    }

    checkHands(cardIds: Card[]) {
        if (this.drawing) {
            if (this.$hands.length = cardIds.length - 1) {
                this.nextCard = cardIds[cardIds.length - 1]
                this.checkNextCard();
            } else {
                throw Error('下发手牌有误');
            }
            this.drawing = false;
        } else {
            this.hands = cardIds;
        }
    }


    attack(uid: number) {
        NetMgr.inst.req.releaseCard({
            cardId: this.prevCard as number,
            targetId: uid,
            favorPush: ReleaseMethod.NORMAL,
        });
    }

    ableToPlayACard(cardIdx: number): boolean {
        if (
            this.hands.length === 0 ||
            cardIdx < 0 ||
            cardIdx > this.hands.length - 1
        ) {
            return false;
        }
        return this.hands[cardIdx] != Card.DEFUSE && this.hands[cardIdx] !== Card.BOOM
    }

    private checkNextCard() {
        if (
            this.nextCard === Card.BOOM &&
            this.player.state === PlayerState.DEFUSE
        ) {
            console.log('USER_DEFUSE');
            GameDispatcher.inst.dispatchEvent(
                new egret.Event(EventName.USER_DEFUSE, false, false, {
                    show: true,
                    defuseIdx: this.getDefuseCard(),
                })
            );
        } else {
            User.inst.hands.push(this.nextCard);
            console.log('HANDS_REFRESH');
            GameDispatcher.inst.dispatchEvent(
                new egret.Event(EventName.HANDS_REFRESH, false, false)
            );
        }
    }

    private getDefuseCard(): number {
        for (let i = 0; i < this.hands.length; i++) {
            if (this.hands[i] === Card.DEFUSE) {
                return i;
            }
        }
        return -1;
    }
}
