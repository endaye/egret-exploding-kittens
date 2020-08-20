namespace Config {
    interface INetServerConfig {
        /**
         * 对应的IP或者网址
         */
        url: string;
        /**
         * 使用默认端口填-1或者undefined
         */
        port: number;
        /**
         * 使用https/wss
         */
        secured: boolean;
    }

    export const GameId: number = 1;
    export const RamdonMatchId: boolean = true;
    export const Gm: boolean = false;

    // net
    export const TimeOutMs: number = 5000;
    export const TimeWaitMs: number = 500;
    export const ResourceUrl: string = '/resource/';
    // export const ServerUrlDebug: string = 'http://101.200.242.57:13002/'; // prod
    // export const ServerUrlDebug: string = 'http://39.104.22.7:13002/'; // dev
    export const ServerUrlDebug: string = 'http://47.93.86.15:8082/'; // bob server
    // export const ServerUrlDebug: string = 'http://localhost:13002/'; // local
    export const NetServerConfig: INetServerConfig = {
        url: '47.93.86.15',
        port: 8083,
        secured: false,
    };

    export const avatarBase = 'http://www.yess.space';
    export const DebugMode: boolean = true;
    export const TestMode: boolean = true;
}
