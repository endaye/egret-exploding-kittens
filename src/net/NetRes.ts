class NetRes {
    private readonly handlers: any = {};

    initHandlers(): void {
        this.handlers[Msg.Message.CommandType.HEARTBEAT_RESP] = this.heartBeat;
        this.handlers[
            Msg.Message.CommandType.RELEASE_CARD_RESP
        ] = this.releaseCard;
        this.handlers[Msg.Message.CommandType.PICK_INFO_NTF] = this.pickInfo;
        this.handlers[
            Msg.Message.CommandType.RELEASE_INFO_NTF
        ] = this.releaseInfo;
        this.handlers[Msg.Message.CommandType.ROOM_INFO_NTF] = this.roomInfo;
        this.handlers[Msg.Message.CommandType.GAME_RANK_NTF] = this.gameRank;
        this.handlers[Msg.Message.CommandType.ERROR] = this.error;
    }

    // 收到服务器回包
    response(msg: Msg.IMessage) {
        // console.log(`res: ${msg.content}`);
        this.handlers[msg.cmd as Msg.Message.CommandType](msg);
    }

    // 心跳
    heartBeat(msg: Msg.IMessage) {
        // console.log('res: HEARTBEAT_RESP');
    }

    // 出牌
    releaseCard(msg: Msg.IMessage) {
        console.log('res: RELEASE_CARD_RESP');
        if (msg.releaseCardResp) {
            console.log(msg.releaseCardResp);
            GameMgr.inst.playCardRes(msg.releaseCardResp);
        }
    }

    // 全房间信息
    roomInfo(msg: Msg.IMessage) {
        console.log('res: ROOM_INFO_NTF');
        if (msg.roomInfoNtf) {
            // console.log(msg.roomInfoNtf);
            GameMgr.inst.updateRoomInfo(msg.roomInfoNtf);
        }
    }

    // 游戏排名
    gameRank(msg: Msg.IMessage) {
        console.log('res: GAME_RANK_NTF');
        if (msg.gameRankingNtf) {
            // console.log(msg.gameRankingNtf);
            GameMgr.inst.gameover(msg.gameRankingNtf.ranking);
        }
    }

    // 错误处理
    error(msg: Msg.IMessage) {
        console.log('res: ERROR');
        if (msg.err) {
            console.log(msg.err);
            GameMgr.inst.handleError(msg.err);
        }
    }

    // 抓牌信息
    pickInfo(msg: Msg.IMessage) {
        console.log('res: PICK_INFO_NTF');
        if (msg.pickInfoNtf) {
            // console.log(msg.pickInfoNtf);
            GameMgr.inst.drawCard(msg.pickInfoNtf.uid);
        }
    }

    // 出牌通知
    releaseInfo(msg: Msg.IMessage) {
        console.log('res: RELEASE_INFO_NTF');
        if (msg.releaseInfoNtf) {
            // console.log(msg.releaseInfoNtf);
            GameMgr.inst.playCard(
                msg.releaseInfoNtf.uid,
                msg.releaseInfoNtf.cardId,
                msg.releaseInfoNtf.targetId
            );
        }
    }
}
