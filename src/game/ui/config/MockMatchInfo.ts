namespace TestMode {
    /**
     * status 游戏状态：
     * 0 => 匹配中
     * 1 => 匹配成功
     * -1 => 匹配失败
     * 10 => 游戏结算中
     * -10 => 游戏结算异常
     * 100 => 游戏结束
     */

    const uids = [101, 102, 103, 104, 105, 106]

    function getMatchId(isRandom = true) {
        const matchid = isRandom ? Math.random().toString().substr(2, 16) : '1234567890123456';
        console.log(`matchid: ${matchid}`);
        return matchid;
    }

    export const MockMatchInfo: Native.IMatchInfo = {
        status: 1, // status = 1 参考以上结果
        matchid: getMatchId(Config.RamdonMatchId), // 用后续matchId 去进行游戏结算
        players: [
            {
                uid: uids[0],
                type: 1, // 1 = 机器人 0 = 正常玩家
                avatar: 'https://endaye.com/img/icon-att-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家#' + uids[0],
            },
            {
                uid: uids[1],
                type: 1,
                avatar: 'https://endaye.com/img/icon-shield-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家#' + uids[1],
            },
            {
                uid: uids[2],
                type: 0,
                avatar: 'https://endaye.com/img/icon-cane-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家#' + uids[2],
            },
            {
                uid: uids[3],
                type: 1,
                avatar: 'https://endaye.com/img/icon-magic-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家#' + uids[3],
            },
            {
                uid: uids[4],
                type: 1,
                avatar: 'https://endaye.com/img/icon-att-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家#' + uids[4],
            },
            {
                uid: uids[5],
                type: 1,
                avatar: 'https://endaye.com/img/icon-shield-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家#' + uids[5],
            },
        ],
    };

    export const MockUid: number = uids[2];
    export const MockWdh: number = -1;

    export const MockCookie: string = 'mock cookie';
}
