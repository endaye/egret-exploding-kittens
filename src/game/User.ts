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
    private constructor() {}

    player: Player;
    private $hands: Card[] = []; // 手牌
    cardIdx: number = 0; // 当前选中的手牌索引
    prevCard: Card; // 刚刚打出的牌
    nextCard: Card; // 即将抓到的牌
    drawing: boolean = false; // 正在抓拍
    selecting: boolean = false; // 正在选择目标

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
    playACard(cardIdx: number, target?: number, pos?: number) {
        const card = this.$hands[cardIdx];
        this.cardIdx = cardIdx;
        if (card === Card.DRAWBACK) {
            this.drawing = true;
        } else if (card === Card.ATTACK || card === Card.ATTACK2) {
            GameMgr.inst.userAttack(true);
            this.prevCard = card;
            return;
        } else if (card === Card.SWAP) {
            GameMgr.inst.userSwap(true);
            this.prevCard = card;
            return;
        } else if (card === Card.FAVOR) {
            GameMgr.inst.userFavor(true);
            this.prevCard = card;
            return;
        }

        console.log(`玩家出牌：[${cardIdx}]: ${card}，target: ${target}`);

        GameMgr.inst.userPlayCardAnim(cardIdx);
        NetMgr.inst.req.releaseCard({
            cardId: card,
            targetId: target,
            favorPush: ReleaseMethod.NORMAL,
            returnPos: pos,
        });
    }

    // 玩家出牌
    giveAFavor(cardIdx: number, target?: number) {
        const card = this.$hands[cardIdx];

        const uids: number[] = GameMgr.inst.getUidsByPlayerState(
            PlayerState.FAVOR_WAIT
        );

        target = uids.length > 0 ? uids[0] : undefined;

        NetMgr.inst.req.releaseCard({
            cardId: card,
            targetId: target,
            favorPush: ReleaseMethod.FAVOR,
            returnPos: undefined,
        });

        GameDispatcher.inst.dispatchEvent(
            new egret.Event(EventName.HANDS_REFRESH, false, false)
        );
    }

    // 检查玩家手牌
    checkHands(cardIds: Card[]) {
        if (this.drawing && this.$hands.length === cardIds.length - 1) {
            this.nextCard = cardIds[cardIds.length - 1];
            this.checkNextCard();
            this.drawing = false;
        } else {
            this.hands = cardIds;
        }
    }

    // 攻击
    attack(targetId: number) {
        GameMgr.inst.userPlayCardAnim(this.cardIdx);
        NetMgr.inst.req.releaseCard({
            cardId: this.prevCard as number,
            targetId: targetId,
            favorPush: ReleaseMethod.NORMAL,
            returnPos: undefined,
        });
        console.log(`玩家出牌：[${this.cardIdx}]: ${this.prevCard}，target: ${targetId}`);
    }

    // 交换
    swap(targetId: number) {
        GameMgr.inst.userPlayCardAnim(this.cardIdx);
        NetMgr.inst.req.releaseCard({
            cardId: this.prevCard as number,
            targetId: targetId,
            favorPush: ReleaseMethod.NORMAL,
            returnPos: undefined,
        });
        console.log(`玩家出牌：[${this.cardIdx}]: ${this.prevCard}，target: ${targetId}`);
    }

    // 索要
    favor(targetId: number) {
        GameMgr.inst.userPlayCardAnim(this.cardIdx);
        NetMgr.inst.req.releaseCard({
            cardId: this.prevCard as number,
            targetId: targetId,
            favorPush: ReleaseMethod.NORMAL,
            returnPos: undefined,
        });
        console.log(`玩家出牌：[${this.cardIdx}]: ${this.prevCard}，target: ${targetId}`);
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
        return (
            this.hands[cardIdx] != Card.DEFUSE &&
            this.hands[cardIdx] !== Card.BOOM
        );
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
