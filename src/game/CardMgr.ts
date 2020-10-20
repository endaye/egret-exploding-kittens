enum Card {
    BOOM = 1, // 炸弹 x 5
    DEFUSE = 2, // 拆除 x 8
    SHUFFLE = 3, // 洗牌 x 5
    DRAWBACK = 4, // 抽底 x 5
    ATTACK = 5, // 甩锅 x 5
    ATTACK2 = 6, // 甩锅2 x 5
    PREDICT = 7, // 预言 x 5
    XRAY = 8, // 透视 x 5
    REVERSE = 9, // 转向 x 7
    SKIP = 10, // 跳过 x 7
    FAVOR = 11, // 索要 x 6
    SWAP = 12, // 交换 x 3
    DECK = 13, // 卡背
}

class CardMgr {
    private static $mgr: CardMgr;
    static get inst(): CardMgr {
        if (!CardMgr.$mgr) {
            CardMgr.$mgr = new CardMgr();
        }
        return CardMgr.$mgr;
    }

    readonly cards: { [card: number]: { [img: string]: string } } = {};

    private constructor() {
        this.initCards();
    }

    initCards() {
        this.cards[Card.BOOM] = { img: 'Card_Boom_png' };
        this.cards[Card.DEFUSE] = { img: 'Card_Defuse_png' };
        this.cards[Card.SHUFFLE] = { img: 'Card_Shuffle_png' };
        this.cards[Card.DRAWBACK] = { img: 'Card_Draw_Last_png' };
        this.cards[Card.ATTACK] = { img: 'Card_Attack_png' };
        this.cards[Card.ATTACK2] = { img: 'Card_Attack_Double_png' };
        this.cards[Card.PREDICT] = { img: 'Card_Predict_png' };
        this.cards[Card.XRAY] = { img: 'Card_Xray_png' };
        this.cards[Card.REVERSE] = { img: 'Card_Reverse_png' };
        this.cards[Card.SKIP] = { img: 'Card_Skip_png' };
        this.cards[Card.FAVOR] = { img: 'Card_Favor_png' };
        this.cards[Card.SWAP] = { img: 'Card_Swap_png' };
        this.cards[Card.DECK] = { img: 'Deck_png' };
    }
}
