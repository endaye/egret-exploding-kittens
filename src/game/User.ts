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

    // 玩家摸牌
    drawACard() {
        this.drawing = true;
        NetMgr.inst.req.pickCard();
    }

    // 玩家出牌
    playACard(cardIdx: number, target?: number) {
        const card = this.$hands[cardIdx];
        if (card === Card.DRAWBACK) {
            this.drawing = this.drawing
        } else if (card === Card.ATTACK || card === Card.ATTACK2) {

        }
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

    // 检查玩家手牌
    checkHands(cardIds: Card[]) {
        if (this.drawing && this.$hands.length === cardIds.length - 1) {
            this.nextCard = cardIds[cardIds.length - 1]
            this.checkNextCard();
            this.drawing = false;
        } else {
            this.hands = cardIds;
        }
    }

    // 攻击
    attack(uid: number) {
        NetMgr.inst.req.releaseCard({
            cardId: this.prevCard as number,
            targetId: uid,
            favorPush: ReleaseMethod.NORMAL,
        });
    }

    // 交换
    swap(uid: number) {
        NetMgr.inst.req.releaseCard({
            cardId: this.prevCard as number,
            targetId: uid,
            favorPush: ReleaseMethod.NORMAL,
        });
    }

    // 检查选择的牌是否可以出
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

    // 检查摸到的下一张牌
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

    // 从手牌中找到“拆弹”牌
    private getDefuseCard(): number {
        for (let i = 0; i < this.hands.length; i++) {
            if (this.hands[i] === Card.DEFUSE) {
                return i;
            }
        }
        return -1;
    }
}
