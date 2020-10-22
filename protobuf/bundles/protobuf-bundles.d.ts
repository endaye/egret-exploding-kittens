type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace ClearBoom. */
declare namespace ClearBoom {

    /** Properties of a ClearBoomRequest. */
    interface IClearBoomRequest {

        /** ClearBoomRequest defuse */
        defuse?: (number|null);

        /** ClearBoomRequest returnPos */
        returnPos?: (number|null);
    }

    /** Represents a ClearBoomRequest. */
    class ClearBoomRequest implements IClearBoomRequest {

        /**
         * Constructs a new ClearBoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClearBoom.IClearBoomRequest);

        /** ClearBoomRequest defuse. */
        public defuse: number;

        /** ClearBoomRequest returnPos. */
        public returnPos: number;

        /**
         * Creates a new ClearBoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClearBoomRequest instance
         */
        public static create(properties?: ClearBoom.IClearBoomRequest): ClearBoom.ClearBoomRequest;

        /**
         * Encodes the specified ClearBoomRequest message. Does not implicitly {@link ClearBoom.ClearBoomRequest.verify|verify} messages.
         * @param message ClearBoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClearBoom.IClearBoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ClearBoomRequest message, length delimited. Does not implicitly {@link ClearBoom.ClearBoomRequest.verify|verify} messages.
         * @param message ClearBoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClearBoom.IClearBoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ClearBoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClearBoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ClearBoom.ClearBoomRequest;

        /**
         * Decodes a ClearBoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClearBoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ClearBoom.ClearBoomRequest;

        /**
         * Verifies a ClearBoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace Common. */
declare namespace Common {

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo uid */
        uid?: (number|null);

        /** PlayerInfo isBot */
        isBot?: (number|null);

        /** PlayerInfo state */
        state?: (number|null);

        /** PlayerInfo name */
        name?: (string|null);

        /** PlayerInfo avatar */
        avatar?: (string|null);

        /** PlayerInfo handsInfo */
        handsInfo?: (Common.IHandsInfo|null);

        /** PlayerInfo countDownTime */
        countDownTime?: (number|null);

        /** PlayerInfo attackMark */
        attackMark?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IPlayerInfo);

        /** PlayerInfo uid. */
        public uid: number;

        /** PlayerInfo isBot. */
        public isBot: number;

        /** PlayerInfo state. */
        public state: number;

        /** PlayerInfo name. */
        public name: string;

        /** PlayerInfo avatar. */
        public avatar: string;

        /** PlayerInfo handsInfo. */
        public handsInfo?: (Common.IHandsInfo|null);

        /** PlayerInfo countDownTime. */
        public countDownTime: number;

        /** PlayerInfo attackMark. */
        public attackMark: number;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: Common.IPlayerInfo): Common.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo no */
        no?: (string|null);

        /** RoomInfo state */
        state?: (number|null);

        /** RoomInfo clockwise */
        clockwise?: (number|null);

        /** RoomInfo players */
        players?: (Common.IPlayerInfo[]|null);

        /** RoomInfo deckInfo */
        deckInfo?: (Common.IDeckInfo|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IRoomInfo);

        /** RoomInfo no. */
        public no: string;

        /** RoomInfo state. */
        public state: number;

        /** RoomInfo clockwise. */
        public clockwise: number;

        /** RoomInfo players. */
        public players: Common.IPlayerInfo[];

        /** RoomInfo deckInfo. */
        public deckInfo?: (Common.IDeckInfo|null);

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: Common.IRoomInfo): Common.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link Common.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link Common.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeckInfo. */
    interface IDeckInfo {

        /** DeckInfo leftCount */
        leftCount?: (number|null);

        /** DeckInfo leftBoomCount */
        leftBoomCount?: (number|null);
    }

    /** Represents a DeckInfo. */
    class DeckInfo implements IDeckInfo {

        /**
         * Constructs a new DeckInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IDeckInfo);

        /** DeckInfo leftCount. */
        public leftCount: number;

        /** DeckInfo leftBoomCount. */
        public leftBoomCount: number;

        /**
         * Creates a new DeckInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeckInfo instance
         */
        public static create(properties?: Common.IDeckInfo): Common.DeckInfo;

        /**
         * Encodes the specified DeckInfo message. Does not implicitly {@link Common.DeckInfo.verify|verify} messages.
         * @param message DeckInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IDeckInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeckInfo message, length delimited. Does not implicitly {@link Common.DeckInfo.verify|verify} messages.
         * @param message DeckInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IDeckInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeckInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.DeckInfo;

        /**
         * Decodes a DeckInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.DeckInfo;

        /**
         * Verifies a DeckInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HandsInfo. */
    interface IHandsInfo {

        /** HandsInfo cardIds */
        cardIds?: (number[]|null);

        /** HandsInfo mulliganCnt */
        mulliganCnt?: (number|null);

        /** HandsInfo mulliganExpireTime */
        mulliganExpireTime?: (number|Long|null);
    }

    /** Represents a HandsInfo. */
    class HandsInfo implements IHandsInfo {

        /**
         * Constructs a new HandsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IHandsInfo);

        /** HandsInfo cardIds. */
        public cardIds: number[];

        /** HandsInfo mulliganCnt. */
        public mulliganCnt: number;

        /** HandsInfo mulliganExpireTime. */
        public mulliganExpireTime: (number|Long);

        /**
         * Creates a new HandsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandsInfo instance
         */
        public static create(properties?: Common.IHandsInfo): Common.HandsInfo;

        /**
         * Encodes the specified HandsInfo message. Does not implicitly {@link Common.HandsInfo.verify|verify} messages.
         * @param message HandsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IHandsInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HandsInfo message, length delimited. Does not implicitly {@link Common.HandsInfo.verify|verify} messages.
         * @param message HandsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IHandsInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HandsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.HandsInfo;

        /**
         * Decodes a HandsInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.HandsInfo;

        /**
         * Verifies a HandsInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** ErrorType enum. */
    enum ErrorType {
        ROOM_GAME_STARTED = 0,
        ROOM_PLAYER_IS_FULL = 1,
        ADJUST_HANDS_FAIL = 2,
        RELEASE_CARD_FAIL = 3
    }

    /** Properties of an Error. */
    interface IError {

        /** Error type */
        type?: (Common.ErrorType|null);

        /** Error msg */
        msg?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IError);

        /** Error type. */
        public type: Common.ErrorType;

        /** Error msg. */
        public msg: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: Common.IError): Common.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link Common.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IError, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link Common.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IError, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PickInfo. */
    interface IPickInfo {

        /** PickInfo uid */
        uid?: (number|null);
    }

    /** Represents a PickInfo. */
    class PickInfo implements IPickInfo {

        /**
         * Constructs a new PickInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IPickInfo);

        /** PickInfo uid. */
        public uid: number;

        /**
         * Creates a new PickInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PickInfo instance
         */
        public static create(properties?: Common.IPickInfo): Common.PickInfo;

        /**
         * Encodes the specified PickInfo message. Does not implicitly {@link Common.PickInfo.verify|verify} messages.
         * @param message PickInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IPickInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PickInfo message, length delimited. Does not implicitly {@link Common.PickInfo.verify|verify} messages.
         * @param message PickInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IPickInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PickInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PickInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.PickInfo;

        /**
         * Decodes a PickInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PickInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.PickInfo;

        /**
         * Verifies a PickInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReleaseInfo. */
    interface IReleaseInfo {

        /** ReleaseInfo uid */
        uid?: (number|null);

        /** ReleaseInfo cardId */
        cardId?: (number|null);

        /** ReleaseInfo targetId */
        targetId?: (number|null);
    }

    /** Represents a ReleaseInfo. */
    class ReleaseInfo implements IReleaseInfo {

        /**
         * Constructs a new ReleaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IReleaseInfo);

        /** ReleaseInfo uid. */
        public uid: number;

        /** ReleaseInfo cardId. */
        public cardId: number;

        /** ReleaseInfo targetId. */
        public targetId: number;

        /**
         * Creates a new ReleaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReleaseInfo instance
         */
        public static create(properties?: Common.IReleaseInfo): Common.ReleaseInfo;

        /**
         * Encodes the specified ReleaseInfo message. Does not implicitly {@link Common.ReleaseInfo.verify|verify} messages.
         * @param message ReleaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IReleaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReleaseInfo message, length delimited. Does not implicitly {@link Common.ReleaseInfo.verify|verify} messages.
         * @param message ReleaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IReleaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReleaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReleaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.ReleaseInfo;

        /**
         * Decodes a ReleaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReleaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.ReleaseInfo;

        /**
         * Verifies a ReleaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameRankingInfo. */
    interface IGameRankingInfo {

        /** GameRankingInfo ranking */
        ranking?: (number[]|null);
    }

    /** Represents a GameRankingInfo. */
    class GameRankingInfo implements IGameRankingInfo {

        /**
         * Constructs a new GameRankingInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IGameRankingInfo);

        /** GameRankingInfo ranking. */
        public ranking: number[];

        /**
         * Creates a new GameRankingInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRankingInfo instance
         */
        public static create(properties?: Common.IGameRankingInfo): Common.GameRankingInfo;

        /**
         * Encodes the specified GameRankingInfo message. Does not implicitly {@link Common.GameRankingInfo.verify|verify} messages.
         * @param message GameRankingInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IGameRankingInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameRankingInfo message, length delimited. Does not implicitly {@link Common.GameRankingInfo.verify|verify} messages.
         * @param message GameRankingInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IGameRankingInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameRankingInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRankingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.GameRankingInfo;

        /**
         * Decodes a GameRankingInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRankingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.GameRankingInfo;

        /**
         * Verifies a GameRankingInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace JoinRoom. */
declare namespace JoinRoom {

    /** Properties of a JoinRoomRequest. */
    interface IJoinRoomRequest {

        /** JoinRoomRequest cookie */
        cookie?: (string|null);

        /** JoinRoomRequest wdh */
        wdh?: (number|null);

        /** JoinRoomRequest players */
        players?: (Common.IPlayerInfo[]|null);

        /** JoinRoomRequest gameId */
        gameId?: (number|null);
    }

    /** Represents a JoinRoomRequest. */
    class JoinRoomRequest implements IJoinRoomRequest {

        /**
         * Constructs a new JoinRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: JoinRoom.IJoinRoomRequest);

        /** JoinRoomRequest cookie. */
        public cookie: string;

        /** JoinRoomRequest wdh. */
        public wdh: number;

        /** JoinRoomRequest players. */
        public players: Common.IPlayerInfo[];

        /** JoinRoomRequest gameId. */
        public gameId: number;

        /**
         * Creates a new JoinRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomRequest instance
         */
        public static create(properties?: JoinRoom.IJoinRoomRequest): JoinRoom.JoinRoomRequest;

        /**
         * Encodes the specified JoinRoomRequest message. Does not implicitly {@link JoinRoom.JoinRoomRequest.verify|verify} messages.
         * @param message JoinRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: JoinRoom.IJoinRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link JoinRoom.JoinRoomRequest.verify|verify} messages.
         * @param message JoinRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: JoinRoom.IJoinRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): JoinRoom.JoinRoomRequest;

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): JoinRoom.JoinRoomRequest;

        /**
         * Verifies a JoinRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace Msg. */
declare namespace Msg {

    /** Properties of a Message. */
    interface IMessage {

        /** Message requestId */
        requestId?: (string|null);

        /** Message userId */
        userId?: (number|null);

        /** Message roomNo */
        roomNo?: (string|null);

        /** Message content */
        content?: (string|null);

        /** Message cmd */
        cmd?: (Msg.Message.CommandType|null);

        /** Message joinRoomReq */
        joinRoomReq?: (JoinRoom.IJoinRoomRequest|null);

        /** Message clearBoomReq */
        clearBoomReq?: (ClearBoom.IClearBoomRequest|null);

        /** Message releaseCardReq */
        releaseCardReq?: (ReleaseCard.IReleaseCardRequest|null);

        /** Message releaseCardResp */
        releaseCardResp?: (ReleaseCard.IReleaseCardResponese|null);

        /** Message roomInfoNtf */
        roomInfoNtf?: (Common.IRoomInfo|null);

        /** Message gameRankingNtf */
        gameRankingNtf?: (Common.IGameRankingInfo|null);

        /** Message err */
        err?: (Common.IError|null);

        /** Message pickInfoNtf */
        pickInfoNtf?: (Common.IPickInfo|null);

        /** Message releaseInfoNtf */
        releaseInfoNtf?: (Common.IReleaseInfo|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IMessage);

        /** Message requestId. */
        public requestId: string;

        /** Message userId. */
        public userId: number;

        /** Message roomNo. */
        public roomNo: string;

        /** Message content. */
        public content: string;

        /** Message cmd. */
        public cmd: Msg.Message.CommandType;

        /** Message joinRoomReq. */
        public joinRoomReq?: (JoinRoom.IJoinRoomRequest|null);

        /** Message clearBoomReq. */
        public clearBoomReq?: (ClearBoom.IClearBoomRequest|null);

        /** Message releaseCardReq. */
        public releaseCardReq?: (ReleaseCard.IReleaseCardRequest|null);

        /** Message releaseCardResp. */
        public releaseCardResp?: (ReleaseCard.IReleaseCardResponese|null);

        /** Message roomInfoNtf. */
        public roomInfoNtf?: (Common.IRoomInfo|null);

        /** Message gameRankingNtf. */
        public gameRankingNtf?: (Common.IGameRankingInfo|null);

        /** Message err. */
        public err?: (Common.IError|null);

        /** Message pickInfoNtf. */
        public pickInfoNtf?: (Common.IPickInfo|null);

        /** Message releaseInfoNtf. */
        public releaseInfoNtf?: (Common.IReleaseInfo|null);

        /** Message extension. */
        public extension?: ("joinRoomReq"|"clearBoomReq"|"releaseCardReq"|"releaseCardResp"|"roomInfoNtf"|"gameRankingNtf"|"err"|"pickInfoNtf"|"releaseInfoNtf");

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: Msg.IMessage): Msg.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link Msg.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Msg.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace Message {

        /** CommandType enum. */
        enum CommandType {
            HEARTBEAT_REQ = 0,
            HEARTBEAT_RESP = 1,
            JOIN_ROOM_REQ = 2,
            ADJUST_CARD_REQ = 3,
            PICK_CARD_REQ = 4,
            RELEASE_CARD_REQ = 5,
            RELEASE_CARD_RESP = 6,
            ROOM_INFO_NTF = 7,
            GAME_RANK_NTF = 8,
            ERROR = 9,
            PICK_INFO_NTF = 10,
            RELEASE_INFO_NTF = 11,
            DEFUSE_FAILED_REQ = 12
        }
    }
}

/** Namespace ReleaseCard. */
declare namespace ReleaseCard {

    /** Properties of a ReleaseCardRequest. */
    interface IReleaseCardRequest {

        /** ReleaseCardRequest cardId */
        cardId?: (number|null);

        /** ReleaseCardRequest targetId */
        targetId?: (number|null);

        /** ReleaseCardRequest favorPush */
        favorPush?: (number|null);

        /** ReleaseCardRequest returnPos */
        returnPos?: (number|null);
    }

    /** Represents a ReleaseCardRequest. */
    class ReleaseCardRequest implements IReleaseCardRequest {

        /**
         * Constructs a new ReleaseCardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ReleaseCard.IReleaseCardRequest);

        /** ReleaseCardRequest cardId. */
        public cardId: number;

        /** ReleaseCardRequest targetId. */
        public targetId: number;

        /** ReleaseCardRequest favorPush. */
        public favorPush: number;

        /** ReleaseCardRequest returnPos. */
        public returnPos: number;

        /**
         * Creates a new ReleaseCardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReleaseCardRequest instance
         */
        public static create(properties?: ReleaseCard.IReleaseCardRequest): ReleaseCard.ReleaseCardRequest;

        /**
         * Encodes the specified ReleaseCardRequest message. Does not implicitly {@link ReleaseCard.ReleaseCardRequest.verify|verify} messages.
         * @param message ReleaseCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ReleaseCard.IReleaseCardRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReleaseCardRequest message, length delimited. Does not implicitly {@link ReleaseCard.ReleaseCardRequest.verify|verify} messages.
         * @param message ReleaseCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ReleaseCard.IReleaseCardRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReleaseCardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReleaseCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ReleaseCard.ReleaseCardRequest;

        /**
         * Decodes a ReleaseCardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReleaseCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ReleaseCard.ReleaseCardRequest;

        /**
         * Verifies a ReleaseCardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReleaseCardResponese. */
    interface IReleaseCardResponese {

        /** ReleaseCardResponese predictIndex */
        predictIndex?: (number|null);

        /** ReleaseCardResponese xrayCards */
        xrayCards?: (number[]|null);
    }

    /** Represents a ReleaseCardResponese. */
    class ReleaseCardResponese implements IReleaseCardResponese {

        /**
         * Constructs a new ReleaseCardResponese.
         * @param [properties] Properties to set
         */
        constructor(properties?: ReleaseCard.IReleaseCardResponese);

        /** ReleaseCardResponese predictIndex. */
        public predictIndex: number;

        /** ReleaseCardResponese xrayCards. */
        public xrayCards: number[];

        /**
         * Creates a new ReleaseCardResponese instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReleaseCardResponese instance
         */
        public static create(properties?: ReleaseCard.IReleaseCardResponese): ReleaseCard.ReleaseCardResponese;

        /**
         * Encodes the specified ReleaseCardResponese message. Does not implicitly {@link ReleaseCard.ReleaseCardResponese.verify|verify} messages.
         * @param message ReleaseCardResponese message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ReleaseCard.IReleaseCardResponese, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReleaseCardResponese message, length delimited. Does not implicitly {@link ReleaseCard.ReleaseCardResponese.verify|verify} messages.
         * @param message ReleaseCardResponese message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ReleaseCard.IReleaseCardResponese, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReleaseCardResponese message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReleaseCardResponese
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ReleaseCard.ReleaseCardResponese;

        /**
         * Decodes a ReleaseCardResponese message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReleaseCardResponese
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ReleaseCard.ReleaseCardResponese;

        /**
         * Verifies a ReleaseCardResponese message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
