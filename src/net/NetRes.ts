class NetRes {
    private readonly handlers: any = {};

    initHandlers(): void {
        this.handlers[Msg.Message.CommandType.HEARTBEAT_RESP] = this.heartBeat;
        this.handlers[
            Msg.Message.CommandType.RELEASE_CARD_RESP
        ] = this.releaseCard;
        this.handlers[Msg.Message.CommandType.ROOM_INFO_NTF] = this.roomInfo;
        this.handlers[Msg.Message.CommandType.GAME_RANK_NTF] = this.gameRank;
        this.handlers[Msg.Message.CommandType.ERROR] = this.error;
        this.handlers[Msg.Message.CommandType.PICK_INFO_NTF] = this.pickInfo;
        this.handlers[Msg.Message.CommandType.RELEASE_INFO_NTF] = this.releaseInfo;
    }

    response(msg: Msg.IMessage) {
        // console.log(`res: ${msg.content}`);
        this.handlers[msg.cmd as Msg.Message.CommandType](msg);
    }

    heartBeat(msg: Msg.IMessage) {
        // console.log('res: HEARTBEAT_RESP');
    }

    releaseCard(msg: Msg.IMessage) {
        console.log('res: RELEASE_CARD_RESP');
        if (msg.releaseCardResp) {
            console.log(msg.releaseCardResp);
        }
    }

    roomInfo(msg: Msg.IMessage) {
        console.log('res: ROOM_INFO_NTF');
        if (msg.roomInfoNtf) {
            // console.log(msg.roomInfoNtf);
            GameMgr.inst.updateRoomInfo(msg.roomInfoNtf);
        }
    }

    gameRank(msg: Msg.IMessage) {
        console.log('res: GAME_RANK_NTF');
        if (msg.gameRankingNtf) {
            console.log(msg.gameRankingNtf);
            GameMgr.inst.gameover(msg.gameRankingNtf.ranking);
        }
    }

    error(msg: Msg.IMessage) {
        console.log('res: ERROR');
        if (msg.err) {
            console.log(msg.err);
            GameMgr.inst.handleError(msg.err);
        }
    }

    pickInfo(msg: Msg.IMessage) {
        console.log('res: PICK_INFO_NTF');
        if (msg.pickInfoNtf) {
            console.log(msg.pickInfoNtf);
            GameMgr.inst.drawCard(msg.pickInfoNtf.uid);
        }
    }

    releaseInfo(msg: Msg.IMessage) {
        console.log('res: RELEASE_INFO_NTF');
        if (msg.releaseInfoNtf) {
            console.log(msg.releaseInfoNtf);
            GameMgr.inst.playCard(msg.releaseInfoNtf.uid, msg.releaseInfoNtf.cardId);
        }
    }
}
