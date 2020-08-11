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

    attack(uid: number) {
        NetMgr.inst.req.releaseCard({
            cardId: this.prevCard as number,
            targetId: uid,
            favorPush: ReleaseMethod.NORMAL,
        });
    }

    getDefuseCard(): number {
        for (let i = 0; i < this.hands.length; i++) {
            if (this.hands[i] === Card.DEFUSE) {
                return i;
            }
        }
        return -1;
    }

    async checkNextCard() {
        // GameMgr.inst.defuseBoom(false, -1);
        if (
            this.nextCard === Card.BOOM &&
            this.player.state === PlayerState.DEFUSE
        ) {
            // GameMgr.inst.defuseBoom(true, this.getDefuseCard());
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

    ableToPlayACard(cardIdx: number): boolean {
        if (
            this.hands.length === 0 ||
            cardIdx < 0 ||
            cardIdx > this.hands.length - 1
        ) {
            return false;
        } else if (this.hands.length === 1) {
            return this.hands[0] !== Card.DEFUSE || this.hands[0] !== Card.BOOM;
        } else {
            return (
                this.hands[cardIdx] !== Card.DEFUSE ||
                this.hands[cardIdx] !== Card.BOOM
            );
        }
    }
}
