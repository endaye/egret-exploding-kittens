class NetReq {
    private $socket: egret.WebSocket;
    private $userId: number;
    private $roomNo: string;

    constructor() { }

    set userId(uid: number) {
        this.$userId = uid;
    }

    set roomNo(rid: string) {
        this.$roomNo = rid;
    }

    set socket(socket: egret.WebSocket) {
        this.$socket = socket;
    }

    private request(msg: Msg.IMessage): void {
        // console.log(`req: ${msg.content}`);
        let sendData = new Msg.Message(msg);
        let sendByte: Uint8Array = Msg.Message.encode(sendData).finish();
        let dataBytes = new egret.ByteArray(sendByte);

        let buf = new egret.ByteArray();
        buf.writeByte(1);
        buf.writeShort(dataBytes.length + 4);
        buf.writeInt(3);
        buf.writeBytes(dataBytes);

        this.$socket.writeBytes(buf);
        this.$socket.flush();
    }

    private genRequestId(): string {
        return Math.floor(Math.random() * Math.floor(99999)).toString();
    }

    private getMsg(): Msg.IMessage {
        return {
            requestId: this.genRequestId(),
            userId: this.$userId,
            roomNo: this.$roomNo,
            content: 'VOID',
        };
    }

    heartBeat(): void {
        const msg: Msg.IMessage = this.getMsg();
        msg.cmd = Msg.Message.CommandType.HEARTBEAT_REQ;
        msg.content = 'HEARTBEAT_REQ';
        this.request(msg);
    }

    joinRoom(data: JoinRoom.IJoinRoomRequest): void {
        const msg: Msg.IMessage = this.getMsg();
        msg.cmd = Msg.Message.CommandType.JOIN_ROOM_REQ;
        msg.content = 'JOIN_ROOM_REQ';
        msg.joinRoomReq = data;
        console.log(msg);
        this.request(msg);
    }

    adjustCard(): void {
        const msg: Msg.IMessage = this.getMsg();
        msg.cmd = Msg.Message.CommandType.ADJUST_CARD_REQ;
        msg.content = 'ADJUST_CARD_REQ';
        this.request(msg);
    }

    pickCard(): void {
        const msg: Msg.IMessage = this.getMsg();
        msg.cmd = Msg.Message.CommandType.PICK_CARD_REQ;
        msg.content = 'PICK_CARD_REQ';
        this.request(msg);
    }

    releaseCard(data: ReleaseCard.ReleaseCardRequest): void {
        const msg: Msg.IMessage = this.getMsg();
        msg.cmd = Msg.Message.CommandType.RELEASE_CARD_REQ;
        msg.content = 'RELEASE_CARD_REQ';
        msg.releaseCardReq = data;
        this.request(msg);
    }

    defuseFailed(): void {
        const msg: Msg.IMessage = this.getMsg();
        msg.cmd = Msg.Message.CommandType.DEFUSE_FAILED_REQ;
        msg.content = 'DEFUSE_FAILED_REQ';
        this.request(msg);
    }
}
