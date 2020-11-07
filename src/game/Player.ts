enum PlayerState {
    QUEUE = 1, // 未加入
    READY = 2, // 准备就绪
    DEAL_DONE = 3, // 手牌就绪
    WAIT = 4, // 等待其他玩家行动
    ACTION = 5, // 行动阶段
    DEFUSE = 6, // 拆弹阶段
    ATTACK = 7, // 选择攻击对象
    PREDICT = 8, // 看预言牌阶段
    XRAY = 9, // 看透视牌阶段
    FAVOR_WAIT = 10, // 等待索要对象
    FAVOR_ACTION = 11, // 选择给出的牌
    // SWAP = 12, // 玩家换牌
    DEAD = 12, // 死亡
}

class Player {
    uid: number;
    isBot: boolean;
    avatar: string;
    state: PlayerState;
    nickname: string;
    seat: number;
    attackMark: number = 0;
    handsCnt: number = -1;
    countDownTime: number = 0;

    constructor(seat: number, player: Native.IMatchPlayer) {
        this.seat = seat;
        this.uid = player.uid;
        this.isBot = player.type === 1;
        if (player.avatar.substr(0, 4) !== 'http') {
            player.avatar = Config.avatarBase + player.avatar;
        }
        this.avatar = encodeURI(player.avatar);
        this.state = PlayerState.QUEUE;
        this.nickname = player.nickname;
    }
}
