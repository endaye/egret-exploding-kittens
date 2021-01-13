class NetMgr {
    /* singleton */
    private static $mgr: NetMgr;
    static get inst(): NetMgr {
        if (!NetMgr.$mgr) {
            NetMgr.$mgr = new NetMgr();
        }
        return NetMgr.$mgr;
    }

    isConnected: boolean = false;

    private $socket: egret.WebSocket;
    req: NetReq;
    res: NetRes;

    // 心跳timer id
    private hbTimerId: number;
    // 心跳间隔时间ms
    private hbTime = 1000;

    private constructor() {
        this.$socket = new egret.WebSocket();
        this.$socket.type = egret.WebSocket.TYPE_BINARY;
        this.initSocketListeners();

        this.req = new NetReq();
        this.res = new NetRes();
        this.res.initHandlers();
    }

    private initSocketListeners(): void {
        console.log('initSocketListeners');
        this.$socket.addEventListener(
            egret.ProgressEvent.SOCKET_DATA,
            this.onReceiveMessage,
            this
        );
        this.$socket.addEventListener(
            egret.Event.CONNECT,
            this.onSocketOpen,
            this
        );
        this.$socket.addEventListener(
            egret.Event.CLOSE,
            this.onSocketClose,
            this
        );
        this.$socket.addEventListener(
            egret.IOErrorEvent.IO_ERROR,
            this.onSocketError,
            this
        );
    }

    setUidAndRid(uid: number, rid: string): void {
        this.req.userId = uid;
        this.req.roomNo = rid;
        // console.log(`setUidAndRid(${uid}, ${rid})`);
    }

    connect(): void {
        if (this.isConnected) {
            // TODO:
        } else {
            const url = Config.NetServerConfig.url;
            const port = Config.NetServerConfig.port;
            const secured = Config.NetServerConfig.secured;
            console.log(
                `Socket connect ${secured ? 'wss' : 'ws'}://${url}:${port}`
            );
            this.connectTo(url, port, secured);
        }
        this.req.socket = this.$socket;
    }

    private onSocketOpen(): void {
        console.log('onSocketOpen');
        this.isConnected = true;
        this.startHeartBeat();
        GameMgr.inst.tryInitGame();
    }

    private startHeartBeat(): void {
        console.log('startHeartBeat');
        if (this.hbTimerId) {
            clearInterval(this.hbTimerId);
            this.hbTimerId;
        }
        this.hbTimerId = setInterval(() => {
            this.req.heartBeat();
        }, this.hbTime);
    }

    private onSocketClose(): void {
        console.log('onSocketClose');
        GameMgr.inst.exitGame();
    }

    private onSocketError(e: egret.IOErrorEvent): void {
        console.log('onSocketError');
        GameMgr.inst.exitGame();
    }

    private onReceiveMessage(e: egret.ProgressEvent): void {
        // console.log('onReceiveMessage');
        const buf: egret.ByteArray = new egret.ByteArray();
        this.$socket.readBytes(buf);
        buf.readByte();
        const length = buf.readShort();
        const cmd = buf.readInt();
        const data = new egret.ByteArray();
        buf.readBytes(data, 0, length - 4);

        const reader = new protobuf.Reader(data.bytes);

        const msg = Msg.Message.decode(reader);
        this.res.response(msg);
    }

    private connectTo(
        url: string,
        port: number,
        secured: boolean = false
    ): void {
        if (secured) {
            let url2: string = `wss://${url}`;
            if (port && port > 0) {
                url2 = url2 + `:${port}`;
            }
            this.$socket.connectByUrl(url2);
        } else {
            this.$socket.connect(url, port);
        }
    }

    private registerHandles(): void {
        // for (const h of this.res.handles) {
        //     this.$socket.on(h.msg, (msg: Proto.Res) => {
        //         h.func(msg);
        //     });
        // }
    }

    disconnect(): void {
        console.log(`Socket.io Disconnect => ${Config.ServerUrlDebug}`);
        this.$socket.close();
    }
}
