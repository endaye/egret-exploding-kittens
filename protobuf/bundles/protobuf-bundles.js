var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ClearBoom = (function() {

    /**
     * Namespace ClearBoom.
     * @exports ClearBoom
     * @namespace
     */
    var ClearBoom = {};

    ClearBoom.ClearBoomRequest = (function() {

        /**
         * Properties of a ClearBoomRequest.
         * @memberof ClearBoom
         * @interface IClearBoomRequest
         * @property {number|null} [defuse] ClearBoomRequest defuse
         * @property {number|null} [returnPos] ClearBoomRequest returnPos
         */

        /**
         * Constructs a new ClearBoomRequest.
         * @memberof ClearBoom
         * @classdesc Represents a ClearBoomRequest.
         * @implements IClearBoomRequest
         * @constructor
         * @param {ClearBoom.IClearBoomRequest=} [properties] Properties to set
         */
        function ClearBoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClearBoomRequest defuse.
         * @member {number} defuse
         * @memberof ClearBoom.ClearBoomRequest
         * @instance
         */
        ClearBoomRequest.prototype.defuse = 0;

        /**
         * ClearBoomRequest returnPos.
         * @member {number} returnPos
         * @memberof ClearBoom.ClearBoomRequest
         * @instance
         */
        ClearBoomRequest.prototype.returnPos = 0;

        /**
         * Creates a new ClearBoomRequest instance using the specified properties.
         * @function create
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {ClearBoom.IClearBoomRequest=} [properties] Properties to set
         * @returns {ClearBoom.ClearBoomRequest} ClearBoomRequest instance
         */
        ClearBoomRequest.create = function create(properties) {
            return new ClearBoomRequest(properties);
        };

        /**
         * Encodes the specified ClearBoomRequest message. Does not implicitly {@link ClearBoom.ClearBoomRequest.verify|verify} messages.
         * @function encode
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {ClearBoom.IClearBoomRequest} message ClearBoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearBoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.defuse != null && Object.hasOwnProperty.call(message, "defuse"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.defuse);
            if (message.returnPos != null && Object.hasOwnProperty.call(message, "returnPos"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.returnPos);
            return writer;
        };

        /**
         * Encodes the specified ClearBoomRequest message, length delimited. Does not implicitly {@link ClearBoom.ClearBoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {ClearBoom.IClearBoomRequest} message ClearBoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearBoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClearBoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClearBoom.ClearBoomRequest} ClearBoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearBoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClearBoom.ClearBoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.defuse = reader.uint32();
                    break;
                case 2:
                    message.returnPos = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClearBoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClearBoom.ClearBoomRequest} ClearBoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearBoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClearBoomRequest message.
         * @function verify
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClearBoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.defuse != null && message.hasOwnProperty("defuse"))
                if (!$util.isInteger(message.defuse))
                    return "defuse: integer expected";
            if (message.returnPos != null && message.hasOwnProperty("returnPos"))
                if (!$util.isInteger(message.returnPos))
                    return "returnPos: integer expected";
            return null;
        };

        return ClearBoomRequest;
    })();

    return ClearBoom;
})();

$root.Common = (function() {

    /**
     * Namespace Common.
     * @exports Common
     * @namespace
     */
    var Common = {};

    Common.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof Common
         * @interface IPlayerInfo
         * @property {number|null} [uid] PlayerInfo uid
         * @property {number|null} [isBot] PlayerInfo isBot
         * @property {number|null} [state] PlayerInfo state
         * @property {string|null} [name] PlayerInfo name
         * @property {string|null} [avatar] PlayerInfo avatar
         * @property {Common.IHandsInfo|null} [handsInfo] PlayerInfo handsInfo
         * @property {number|null} [countDownTime] PlayerInfo countDownTime
         * @property {number|null} [attackMark] PlayerInfo attackMark
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof Common
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {Common.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo uid.
         * @member {number} uid
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.uid = 0;

        /**
         * PlayerInfo isBot.
         * @member {number} isBot
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.isBot = 0;

        /**
         * PlayerInfo state.
         * @member {number} state
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.state = 0;

        /**
         * PlayerInfo name.
         * @member {string} name
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.name = "";

        /**
         * PlayerInfo avatar.
         * @member {string} avatar
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.avatar = "";

        /**
         * PlayerInfo handsInfo.
         * @member {Common.IHandsInfo|null|undefined} handsInfo
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.handsInfo = null;

        /**
         * PlayerInfo countDownTime.
         * @member {number} countDownTime
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.countDownTime = 0;

        /**
         * PlayerInfo attackMark.
         * @member {number} attackMark
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.attackMark = 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.IPlayerInfo=} [properties] Properties to set
         * @returns {Common.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.isBot != null && Object.hasOwnProperty.call(message, "isBot"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.isBot);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.state);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.avatar);
            if (message.handsInfo != null && Object.hasOwnProperty.call(message, "handsInfo"))
                $root.Common.HandsInfo.encode(message.handsInfo, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.countDownTime != null && Object.hasOwnProperty.call(message, "countDownTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.countDownTime);
            if (message.attackMark != null && Object.hasOwnProperty.call(message, "attackMark"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.attackMark);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.isBot = reader.uint32();
                    break;
                case 3:
                    message.state = reader.uint32();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.avatar = reader.string();
                    break;
                case 6:
                    message.handsInfo = $root.Common.HandsInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.countDownTime = reader.uint32();
                    break;
                case 8:
                    message.attackMark = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof Common.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.isBot != null && message.hasOwnProperty("isBot"))
                if (!$util.isInteger(message.isBot))
                    return "isBot: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.handsInfo != null && message.hasOwnProperty("handsInfo")) {
                var error = $root.Common.HandsInfo.verify(message.handsInfo);
                if (error)
                    return "handsInfo." + error;
            }
            if (message.countDownTime != null && message.hasOwnProperty("countDownTime"))
                if (!$util.isInteger(message.countDownTime))
                    return "countDownTime: integer expected";
            if (message.attackMark != null && message.hasOwnProperty("attackMark"))
                if (!$util.isInteger(message.attackMark))
                    return "attackMark: integer expected";
            return null;
        };

        return PlayerInfo;
    })();

    Common.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof Common
         * @interface IRoomInfo
         * @property {string|null} [no] RoomInfo no
         * @property {number|null} [state] RoomInfo state
         * @property {number|null} [clockwise] RoomInfo clockwise
         * @property {Array.<Common.IPlayerInfo>|null} [players] RoomInfo players
         * @property {Common.IDeckInfo|null} [deckInfo] RoomInfo deckInfo
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof Common
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {Common.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo no.
         * @member {string} no
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.no = "";

        /**
         * RoomInfo state.
         * @member {number} state
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.state = 0;

        /**
         * RoomInfo clockwise.
         * @member {number} clockwise
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.clockwise = 0;

        /**
         * RoomInfo players.
         * @member {Array.<Common.IPlayerInfo>} players
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.players = $util.emptyArray;

        /**
         * RoomInfo deckInfo.
         * @member {Common.IDeckInfo|null|undefined} deckInfo
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.deckInfo = null;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof Common.RoomInfo
         * @static
         * @param {Common.IRoomInfo=} [properties] Properties to set
         * @returns {Common.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link Common.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.RoomInfo
         * @static
         * @param {Common.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.no != null && Object.hasOwnProperty.call(message, "no"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.no);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.state);
            if (message.clockwise != null && Object.hasOwnProperty.call(message, "clockwise"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.clockwise);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.Common.PlayerInfo.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.deckInfo != null && Object.hasOwnProperty.call(message, "deckInfo"))
                $root.Common.DeckInfo.encode(message.deckInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link Common.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.RoomInfo
         * @static
         * @param {Common.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.no = reader.string();
                    break;
                case 2:
                    message.state = reader.uint32();
                    break;
                case 3:
                    message.clockwise = reader.uint32();
                    break;
                case 4:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.Common.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.deckInfo = $root.Common.DeckInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof Common.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.no != null && message.hasOwnProperty("no"))
                if (!$util.isString(message.no))
                    return "no: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.clockwise != null && message.hasOwnProperty("clockwise"))
                if (!$util.isInteger(message.clockwise))
                    return "clockwise: integer expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.Common.PlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.deckInfo != null && message.hasOwnProperty("deckInfo")) {
                var error = $root.Common.DeckInfo.verify(message.deckInfo);
                if (error)
                    return "deckInfo." + error;
            }
            return null;
        };

        return RoomInfo;
    })();

    Common.DeckInfo = (function() {

        /**
         * Properties of a DeckInfo.
         * @memberof Common
         * @interface IDeckInfo
         * @property {number|null} [leftCount] DeckInfo leftCount
         * @property {number|null} [leftBoomCount] DeckInfo leftBoomCount
         */

        /**
         * Constructs a new DeckInfo.
         * @memberof Common
         * @classdesc Represents a DeckInfo.
         * @implements IDeckInfo
         * @constructor
         * @param {Common.IDeckInfo=} [properties] Properties to set
         */
        function DeckInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeckInfo leftCount.
         * @member {number} leftCount
         * @memberof Common.DeckInfo
         * @instance
         */
        DeckInfo.prototype.leftCount = 0;

        /**
         * DeckInfo leftBoomCount.
         * @member {number} leftBoomCount
         * @memberof Common.DeckInfo
         * @instance
         */
        DeckInfo.prototype.leftBoomCount = 0;

        /**
         * Creates a new DeckInfo instance using the specified properties.
         * @function create
         * @memberof Common.DeckInfo
         * @static
         * @param {Common.IDeckInfo=} [properties] Properties to set
         * @returns {Common.DeckInfo} DeckInfo instance
         */
        DeckInfo.create = function create(properties) {
            return new DeckInfo(properties);
        };

        /**
         * Encodes the specified DeckInfo message. Does not implicitly {@link Common.DeckInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.DeckInfo
         * @static
         * @param {Common.IDeckInfo} message DeckInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeckInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.leftCount != null && Object.hasOwnProperty.call(message, "leftCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.leftCount);
            if (message.leftBoomCount != null && Object.hasOwnProperty.call(message, "leftBoomCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.leftBoomCount);
            return writer;
        };

        /**
         * Encodes the specified DeckInfo message, length delimited. Does not implicitly {@link Common.DeckInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.DeckInfo
         * @static
         * @param {Common.IDeckInfo} message DeckInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeckInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeckInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.DeckInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.DeckInfo} DeckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeckInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.DeckInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.leftCount = reader.uint32();
                    break;
                case 2:
                    message.leftBoomCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeckInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.DeckInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.DeckInfo} DeckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeckInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeckInfo message.
         * @function verify
         * @memberof Common.DeckInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeckInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.leftCount != null && message.hasOwnProperty("leftCount"))
                if (!$util.isInteger(message.leftCount))
                    return "leftCount: integer expected";
            if (message.leftBoomCount != null && message.hasOwnProperty("leftBoomCount"))
                if (!$util.isInteger(message.leftBoomCount))
                    return "leftBoomCount: integer expected";
            return null;
        };

        return DeckInfo;
    })();

    Common.HandsInfo = (function() {

        /**
         * Properties of a HandsInfo.
         * @memberof Common
         * @interface IHandsInfo
         * @property {Array.<number>|null} [cardIds] HandsInfo cardIds
         * @property {number|null} [mulliganCnt] HandsInfo mulliganCnt
         * @property {number|Long|null} [mulliganExpireTime] HandsInfo mulliganExpireTime
         */

        /**
         * Constructs a new HandsInfo.
         * @memberof Common
         * @classdesc Represents a HandsInfo.
         * @implements IHandsInfo
         * @constructor
         * @param {Common.IHandsInfo=} [properties] Properties to set
         */
        function HandsInfo(properties) {
            this.cardIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandsInfo cardIds.
         * @member {Array.<number>} cardIds
         * @memberof Common.HandsInfo
         * @instance
         */
        HandsInfo.prototype.cardIds = $util.emptyArray;

        /**
         * HandsInfo mulliganCnt.
         * @member {number} mulliganCnt
         * @memberof Common.HandsInfo
         * @instance
         */
        HandsInfo.prototype.mulliganCnt = 0;

        /**
         * HandsInfo mulliganExpireTime.
         * @member {number|Long} mulliganExpireTime
         * @memberof Common.HandsInfo
         * @instance
         */
        HandsInfo.prototype.mulliganExpireTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new HandsInfo instance using the specified properties.
         * @function create
         * @memberof Common.HandsInfo
         * @static
         * @param {Common.IHandsInfo=} [properties] Properties to set
         * @returns {Common.HandsInfo} HandsInfo instance
         */
        HandsInfo.create = function create(properties) {
            return new HandsInfo(properties);
        };

        /**
         * Encodes the specified HandsInfo message. Does not implicitly {@link Common.HandsInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.HandsInfo
         * @static
         * @param {Common.IHandsInfo} message HandsInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandsInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardIds != null && message.cardIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.cardIds.length; ++i)
                    writer.uint32(message.cardIds[i]);
                writer.ldelim();
            }
            if (message.mulliganCnt != null && Object.hasOwnProperty.call(message, "mulliganCnt"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.mulliganCnt);
            if (message.mulliganExpireTime != null && Object.hasOwnProperty.call(message, "mulliganExpireTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.mulliganExpireTime);
            return writer;
        };

        /**
         * Encodes the specified HandsInfo message, length delimited. Does not implicitly {@link Common.HandsInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.HandsInfo
         * @static
         * @param {Common.IHandsInfo} message HandsInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandsInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandsInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.HandsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.HandsInfo} HandsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandsInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.HandsInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cardIds && message.cardIds.length))
                        message.cardIds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardIds.push(reader.uint32());
                    } else
                        message.cardIds.push(reader.uint32());
                    break;
                case 2:
                    message.mulliganCnt = reader.uint32();
                    break;
                case 3:
                    message.mulliganExpireTime = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HandsInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.HandsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.HandsInfo} HandsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandsInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandsInfo message.
         * @function verify
         * @memberof Common.HandsInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandsInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardIds != null && message.hasOwnProperty("cardIds")) {
                if (!Array.isArray(message.cardIds))
                    return "cardIds: array expected";
                for (var i = 0; i < message.cardIds.length; ++i)
                    if (!$util.isInteger(message.cardIds[i]))
                        return "cardIds: integer[] expected";
            }
            if (message.mulliganCnt != null && message.hasOwnProperty("mulliganCnt"))
                if (!$util.isInteger(message.mulliganCnt))
                    return "mulliganCnt: integer expected";
            if (message.mulliganExpireTime != null && message.hasOwnProperty("mulliganExpireTime"))
                if (!$util.isInteger(message.mulliganExpireTime) && !(message.mulliganExpireTime && $util.isInteger(message.mulliganExpireTime.low) && $util.isInteger(message.mulliganExpireTime.high)))
                    return "mulliganExpireTime: integer|Long expected";
            return null;
        };

        return HandsInfo;
    })();

    /**
     * ErrorType enum.
     * @name Common.ErrorType
     * @enum {number}
     * @property {number} ROOM_GAME_STARTED=0 ROOM_GAME_STARTED value
     * @property {number} ROOM_PLAYER_IS_FULL=1 ROOM_PLAYER_IS_FULL value
     * @property {number} ADJUST_HANDS_FAIL=2 ADJUST_HANDS_FAIL value
     * @property {number} RELEASE_CARD_FAIL=3 RELEASE_CARD_FAIL value
     */
    Common.ErrorType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ROOM_GAME_STARTED"] = 0;
        values[valuesById[1] = "ROOM_PLAYER_IS_FULL"] = 1;
        values[valuesById[2] = "ADJUST_HANDS_FAIL"] = 2;
        values[valuesById[3] = "RELEASE_CARD_FAIL"] = 3;
        return values;
    })();

    Common.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof Common
         * @interface IError
         * @property {Common.ErrorType|null} [type] Error type
         * @property {string|null} [msg] Error msg
         */

        /**
         * Constructs a new Error.
         * @memberof Common
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {Common.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error type.
         * @member {Common.ErrorType} type
         * @memberof Common.Error
         * @instance
         */
        Error.prototype.type = 0;

        /**
         * Error msg.
         * @member {string} msg
         * @memberof Common.Error
         * @instance
         */
        Error.prototype.msg = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof Common.Error
         * @static
         * @param {Common.IError=} [properties] Properties to set
         * @returns {Common.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link Common.Error.verify|verify} messages.
         * @function encode
         * @memberof Common.Error
         * @static
         * @param {Common.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link Common.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.Error
         * @static
         * @param {Common.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof Common.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof Common.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        return Error;
    })();

    Common.PickInfo = (function() {

        /**
         * Properties of a PickInfo.
         * @memberof Common
         * @interface IPickInfo
         * @property {number|null} [uid] PickInfo uid
         */

        /**
         * Constructs a new PickInfo.
         * @memberof Common
         * @classdesc Represents a PickInfo.
         * @implements IPickInfo
         * @constructor
         * @param {Common.IPickInfo=} [properties] Properties to set
         */
        function PickInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PickInfo uid.
         * @member {number} uid
         * @memberof Common.PickInfo
         * @instance
         */
        PickInfo.prototype.uid = 0;

        /**
         * Creates a new PickInfo instance using the specified properties.
         * @function create
         * @memberof Common.PickInfo
         * @static
         * @param {Common.IPickInfo=} [properties] Properties to set
         * @returns {Common.PickInfo} PickInfo instance
         */
        PickInfo.create = function create(properties) {
            return new PickInfo(properties);
        };

        /**
         * Encodes the specified PickInfo message. Does not implicitly {@link Common.PickInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.PickInfo
         * @static
         * @param {Common.IPickInfo} message PickInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PickInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified PickInfo message, length delimited. Does not implicitly {@link Common.PickInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.PickInfo
         * @static
         * @param {Common.IPickInfo} message PickInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PickInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PickInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.PickInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.PickInfo} PickInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PickInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.PickInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PickInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.PickInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.PickInfo} PickInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PickInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PickInfo message.
         * @function verify
         * @memberof Common.PickInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PickInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            return null;
        };

        return PickInfo;
    })();

    Common.ReleaseInfo = (function() {

        /**
         * Properties of a ReleaseInfo.
         * @memberof Common
         * @interface IReleaseInfo
         * @property {number|null} [uid] ReleaseInfo uid
         * @property {number|null} [cardId] ReleaseInfo cardId
         * @property {number|null} [targetId] ReleaseInfo targetId
         */

        /**
         * Constructs a new ReleaseInfo.
         * @memberof Common
         * @classdesc Represents a ReleaseInfo.
         * @implements IReleaseInfo
         * @constructor
         * @param {Common.IReleaseInfo=} [properties] Properties to set
         */
        function ReleaseInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReleaseInfo uid.
         * @member {number} uid
         * @memberof Common.ReleaseInfo
         * @instance
         */
        ReleaseInfo.prototype.uid = 0;

        /**
         * ReleaseInfo cardId.
         * @member {number} cardId
         * @memberof Common.ReleaseInfo
         * @instance
         */
        ReleaseInfo.prototype.cardId = 0;

        /**
         * ReleaseInfo targetId.
         * @member {number} targetId
         * @memberof Common.ReleaseInfo
         * @instance
         */
        ReleaseInfo.prototype.targetId = 0;

        /**
         * Creates a new ReleaseInfo instance using the specified properties.
         * @function create
         * @memberof Common.ReleaseInfo
         * @static
         * @param {Common.IReleaseInfo=} [properties] Properties to set
         * @returns {Common.ReleaseInfo} ReleaseInfo instance
         */
        ReleaseInfo.create = function create(properties) {
            return new ReleaseInfo(properties);
        };

        /**
         * Encodes the specified ReleaseInfo message. Does not implicitly {@link Common.ReleaseInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.ReleaseInfo
         * @static
         * @param {Common.IReleaseInfo} message ReleaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReleaseInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cardId);
            if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.targetId);
            return writer;
        };

        /**
         * Encodes the specified ReleaseInfo message, length delimited. Does not implicitly {@link Common.ReleaseInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.ReleaseInfo
         * @static
         * @param {Common.IReleaseInfo} message ReleaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReleaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReleaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.ReleaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.ReleaseInfo} ReleaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReleaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.ReleaseInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.cardId = reader.uint32();
                    break;
                case 3:
                    message.targetId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReleaseInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.ReleaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.ReleaseInfo} ReleaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReleaseInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReleaseInfo message.
         * @function verify
         * @memberof Common.ReleaseInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReleaseInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                if (!$util.isInteger(message.cardId))
                    return "cardId: integer expected";
            if (message.targetId != null && message.hasOwnProperty("targetId"))
                if (!$util.isInteger(message.targetId))
                    return "targetId: integer expected";
            return null;
        };

        return ReleaseInfo;
    })();

    Common.GameRankingInfo = (function() {

        /**
         * Properties of a GameRankingInfo.
         * @memberof Common
         * @interface IGameRankingInfo
         * @property {Array.<number>|null} [ranking] GameRankingInfo ranking
         */

        /**
         * Constructs a new GameRankingInfo.
         * @memberof Common
         * @classdesc Represents a GameRankingInfo.
         * @implements IGameRankingInfo
         * @constructor
         * @param {Common.IGameRankingInfo=} [properties] Properties to set
         */
        function GameRankingInfo(properties) {
            this.ranking = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRankingInfo ranking.
         * @member {Array.<number>} ranking
         * @memberof Common.GameRankingInfo
         * @instance
         */
        GameRankingInfo.prototype.ranking = $util.emptyArray;

        /**
         * Creates a new GameRankingInfo instance using the specified properties.
         * @function create
         * @memberof Common.GameRankingInfo
         * @static
         * @param {Common.IGameRankingInfo=} [properties] Properties to set
         * @returns {Common.GameRankingInfo} GameRankingInfo instance
         */
        GameRankingInfo.create = function create(properties) {
            return new GameRankingInfo(properties);
        };

        /**
         * Encodes the specified GameRankingInfo message. Does not implicitly {@link Common.GameRankingInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.GameRankingInfo
         * @static
         * @param {Common.IGameRankingInfo} message GameRankingInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRankingInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ranking != null && message.ranking.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.ranking.length; ++i)
                    writer.uint32(message.ranking[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GameRankingInfo message, length delimited. Does not implicitly {@link Common.GameRankingInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.GameRankingInfo
         * @static
         * @param {Common.IGameRankingInfo} message GameRankingInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRankingInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRankingInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.GameRankingInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.GameRankingInfo} GameRankingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRankingInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.GameRankingInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ranking && message.ranking.length))
                        message.ranking = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ranking.push(reader.uint32());
                    } else
                        message.ranking.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRankingInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.GameRankingInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.GameRankingInfo} GameRankingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRankingInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRankingInfo message.
         * @function verify
         * @memberof Common.GameRankingInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRankingInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ranking != null && message.hasOwnProperty("ranking")) {
                if (!Array.isArray(message.ranking))
                    return "ranking: array expected";
                for (var i = 0; i < message.ranking.length; ++i)
                    if (!$util.isInteger(message.ranking[i]))
                        return "ranking: integer[] expected";
            }
            return null;
        };

        return GameRankingInfo;
    })();

    return Common;
})();

$root.JoinRoom = (function() {

    /**
     * Namespace JoinRoom.
     * @exports JoinRoom
     * @namespace
     */
    var JoinRoom = {};

    JoinRoom.JoinRoomRequest = (function() {

        /**
         * Properties of a JoinRoomRequest.
         * @memberof JoinRoom
         * @interface IJoinRoomRequest
         * @property {string|null} [cookie] JoinRoomRequest cookie
         * @property {number|null} [wdh] JoinRoomRequest wdh
         * @property {Array.<Common.IPlayerInfo>|null} [players] JoinRoomRequest players
         * @property {number|null} [gameId] JoinRoomRequest gameId
         */

        /**
         * Constructs a new JoinRoomRequest.
         * @memberof JoinRoom
         * @classdesc Represents a JoinRoomRequest.
         * @implements IJoinRoomRequest
         * @constructor
         * @param {JoinRoom.IJoinRoomRequest=} [properties] Properties to set
         */
        function JoinRoomRequest(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomRequest cookie.
         * @member {string} cookie
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.cookie = "";

        /**
         * JoinRoomRequest wdh.
         * @member {number} wdh
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.wdh = 0;

        /**
         * JoinRoomRequest players.
         * @member {Array.<Common.IPlayerInfo>} players
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.players = $util.emptyArray;

        /**
         * JoinRoomRequest gameId.
         * @member {number} gameId
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.gameId = 0;

        /**
         * Creates a new JoinRoomRequest instance using the specified properties.
         * @function create
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {JoinRoom.IJoinRoomRequest=} [properties] Properties to set
         * @returns {JoinRoom.JoinRoomRequest} JoinRoomRequest instance
         */
        JoinRoomRequest.create = function create(properties) {
            return new JoinRoomRequest(properties);
        };

        /**
         * Encodes the specified JoinRoomRequest message. Does not implicitly {@link JoinRoom.JoinRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {JoinRoom.IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cookie != null && Object.hasOwnProperty.call(message, "cookie"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cookie);
            if (message.wdh != null && Object.hasOwnProperty.call(message, "wdh"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.wdh);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.Common.PlayerInfo.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link JoinRoom.JoinRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {JoinRoom.IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {JoinRoom.JoinRoomRequest} JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoom.JoinRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cookie = reader.string();
                    break;
                case 2:
                    message.wdh = reader.uint32();
                    break;
                case 3:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.Common.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.gameId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {JoinRoom.JoinRoomRequest} JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomRequest message.
         * @function verify
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cookie != null && message.hasOwnProperty("cookie"))
                if (!$util.isString(message.cookie))
                    return "cookie: string expected";
            if (message.wdh != null && message.hasOwnProperty("wdh"))
                if (!$util.isInteger(message.wdh))
                    return "wdh: integer expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.Common.PlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        return JoinRoomRequest;
    })();

    return JoinRoom;
})();

$root.Msg = (function() {

    /**
     * Namespace Msg.
     * @exports Msg
     * @namespace
     */
    var Msg = {};

    Msg.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof Msg
         * @interface IMessage
         * @property {string|null} [requestId] Message requestId
         * @property {number|null} [userId] Message userId
         * @property {string|null} [roomNo] Message roomNo
         * @property {string|null} [content] Message content
         * @property {Msg.Message.CommandType|null} [cmd] Message cmd
         * @property {JoinRoom.IJoinRoomRequest|null} [joinRoomReq] Message joinRoomReq
         * @property {ClearBoom.IClearBoomRequest|null} [clearBoomReq] Message clearBoomReq
         * @property {ReleaseCard.IReleaseCardRequest|null} [releaseCardReq] Message releaseCardReq
         * @property {ReleaseCard.IReleaseCardResponese|null} [releaseCardResp] Message releaseCardResp
         * @property {Common.IRoomInfo|null} [roomInfoNtf] Message roomInfoNtf
         * @property {Common.IGameRankingInfo|null} [gameRankingNtf] Message gameRankingNtf
         * @property {Common.IError|null} [err] Message err
         * @property {Common.IPickInfo|null} [pickInfoNtf] Message pickInfoNtf
         * @property {Common.IReleaseInfo|null} [releaseInfoNtf] Message releaseInfoNtf
         */

        /**
         * Constructs a new Message.
         * @memberof Msg
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {Msg.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message requestId.
         * @member {string} requestId
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.requestId = "";

        /**
         * Message userId.
         * @member {number} userId
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.userId = 0;

        /**
         * Message roomNo.
         * @member {string} roomNo
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.roomNo = "";

        /**
         * Message content.
         * @member {string} content
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.content = "";

        /**
         * Message cmd.
         * @member {Msg.Message.CommandType} cmd
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.cmd = 0;

        /**
         * Message joinRoomReq.
         * @member {JoinRoom.IJoinRoomRequest|null|undefined} joinRoomReq
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.joinRoomReq = null;

        /**
         * Message clearBoomReq.
         * @member {ClearBoom.IClearBoomRequest|null|undefined} clearBoomReq
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.clearBoomReq = null;

        /**
         * Message releaseCardReq.
         * @member {ReleaseCard.IReleaseCardRequest|null|undefined} releaseCardReq
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.releaseCardReq = null;

        /**
         * Message releaseCardResp.
         * @member {ReleaseCard.IReleaseCardResponese|null|undefined} releaseCardResp
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.releaseCardResp = null;

        /**
         * Message roomInfoNtf.
         * @member {Common.IRoomInfo|null|undefined} roomInfoNtf
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.roomInfoNtf = null;

        /**
         * Message gameRankingNtf.
         * @member {Common.IGameRankingInfo|null|undefined} gameRankingNtf
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.gameRankingNtf = null;

        /**
         * Message err.
         * @member {Common.IError|null|undefined} err
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.err = null;

        /**
         * Message pickInfoNtf.
         * @member {Common.IPickInfo|null|undefined} pickInfoNtf
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.pickInfoNtf = null;

        /**
         * Message releaseInfoNtf.
         * @member {Common.IReleaseInfo|null|undefined} releaseInfoNtf
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.releaseInfoNtf = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message extension.
         * @member {"joinRoomReq"|"clearBoomReq"|"releaseCardReq"|"releaseCardResp"|"roomInfoNtf"|"gameRankingNtf"|"err"|"pickInfoNtf"|"releaseInfoNtf"|undefined} extension
         * @memberof Msg.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "extension", {
            get: $util.oneOfGetter($oneOfFields = ["joinRoomReq", "clearBoomReq", "releaseCardReq", "releaseCardResp", "roomInfoNtf", "gameRankingNtf", "err", "pickInfoNtf", "releaseInfoNtf"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof Msg.Message
         * @static
         * @param {Msg.IMessage=} [properties] Properties to set
         * @returns {Msg.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link Msg.Message.verify|verify} messages.
         * @function encode
         * @memberof Msg.Message
         * @static
         * @param {Msg.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.userId);
            if (message.roomNo != null && Object.hasOwnProperty.call(message, "roomNo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomNo);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cmd);
            if (message.joinRoomReq != null && Object.hasOwnProperty.call(message, "joinRoomReq"))
                $root.JoinRoom.JoinRoomRequest.encode(message.joinRoomReq, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.clearBoomReq != null && Object.hasOwnProperty.call(message, "clearBoomReq"))
                $root.ClearBoom.ClearBoomRequest.encode(message.clearBoomReq, writer.uint32(/* id 108, wireType 2 =*/866).fork()).ldelim();
            if (message.releaseCardReq != null && Object.hasOwnProperty.call(message, "releaseCardReq"))
                $root.ReleaseCard.ReleaseCardRequest.encode(message.releaseCardReq, writer.uint32(/* id 109, wireType 2 =*/874).fork()).ldelim();
            if (message.releaseCardResp != null && Object.hasOwnProperty.call(message, "releaseCardResp"))
                $root.ReleaseCard.ReleaseCardResponese.encode(message.releaseCardResp, writer.uint32(/* id 110, wireType 2 =*/882).fork()).ldelim();
            if (message.roomInfoNtf != null && Object.hasOwnProperty.call(message, "roomInfoNtf"))
                $root.Common.RoomInfo.encode(message.roomInfoNtf, writer.uint32(/* id 201, wireType 2 =*/1610).fork()).ldelim();
            if (message.gameRankingNtf != null && Object.hasOwnProperty.call(message, "gameRankingNtf"))
                $root.Common.GameRankingInfo.encode(message.gameRankingNtf, writer.uint32(/* id 202, wireType 2 =*/1618).fork()).ldelim();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                $root.Common.Error.encode(message.err, writer.uint32(/* id 300, wireType 2 =*/2402).fork()).ldelim();
            if (message.pickInfoNtf != null && Object.hasOwnProperty.call(message, "pickInfoNtf"))
                $root.Common.PickInfo.encode(message.pickInfoNtf, writer.uint32(/* id 400, wireType 2 =*/3202).fork()).ldelim();
            if (message.releaseInfoNtf != null && Object.hasOwnProperty.call(message, "releaseInfoNtf"))
                $root.Common.ReleaseInfo.encode(message.releaseInfoNtf, writer.uint32(/* id 401, wireType 2 =*/3210).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Msg.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Message
         * @static
         * @param {Msg.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.string();
                    break;
                case 2:
                    message.userId = reader.uint32();
                    break;
                case 3:
                    message.roomNo = reader.string();
                    break;
                case 4:
                    message.content = reader.string();
                    break;
                case 5:
                    message.cmd = reader.int32();
                    break;
                case 101:
                    message.joinRoomReq = $root.JoinRoom.JoinRoomRequest.decode(reader, reader.uint32());
                    break;
                case 108:
                    message.clearBoomReq = $root.ClearBoom.ClearBoomRequest.decode(reader, reader.uint32());
                    break;
                case 109:
                    message.releaseCardReq = $root.ReleaseCard.ReleaseCardRequest.decode(reader, reader.uint32());
                    break;
                case 110:
                    message.releaseCardResp = $root.ReleaseCard.ReleaseCardResponese.decode(reader, reader.uint32());
                    break;
                case 201:
                    message.roomInfoNtf = $root.Common.RoomInfo.decode(reader, reader.uint32());
                    break;
                case 202:
                    message.gameRankingNtf = $root.Common.GameRankingInfo.decode(reader, reader.uint32());
                    break;
                case 300:
                    message.err = $root.Common.Error.decode(reader, reader.uint32());
                    break;
                case 400:
                    message.pickInfoNtf = $root.Common.PickInfo.decode(reader, reader.uint32());
                    break;
                case 401:
                    message.releaseInfoNtf = $root.Common.ReleaseInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof Msg.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isString(message.requestId))
                    return "requestId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.roomNo != null && message.hasOwnProperty("roomNo"))
                if (!$util.isString(message.roomNo))
                    return "roomNo: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                switch (message.cmd) {
                default:
                    return "cmd: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    break;
                }
            if (message.joinRoomReq != null && message.hasOwnProperty("joinRoomReq")) {
                properties.extension = 1;
                {
                    var error = $root.JoinRoom.JoinRoomRequest.verify(message.joinRoomReq);
                    if (error)
                        return "joinRoomReq." + error;
                }
            }
            if (message.clearBoomReq != null && message.hasOwnProperty("clearBoomReq")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.ClearBoom.ClearBoomRequest.verify(message.clearBoomReq);
                    if (error)
                        return "clearBoomReq." + error;
                }
            }
            if (message.releaseCardReq != null && message.hasOwnProperty("releaseCardReq")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.ReleaseCard.ReleaseCardRequest.verify(message.releaseCardReq);
                    if (error)
                        return "releaseCardReq." + error;
                }
            }
            if (message.releaseCardResp != null && message.hasOwnProperty("releaseCardResp")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.ReleaseCard.ReleaseCardResponese.verify(message.releaseCardResp);
                    if (error)
                        return "releaseCardResp." + error;
                }
            }
            if (message.roomInfoNtf != null && message.hasOwnProperty("roomInfoNtf")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.Common.RoomInfo.verify(message.roomInfoNtf);
                    if (error)
                        return "roomInfoNtf." + error;
                }
            }
            if (message.gameRankingNtf != null && message.hasOwnProperty("gameRankingNtf")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.Common.GameRankingInfo.verify(message.gameRankingNtf);
                    if (error)
                        return "gameRankingNtf." + error;
                }
            }
            if (message.err != null && message.hasOwnProperty("err")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.Common.Error.verify(message.err);
                    if (error)
                        return "err." + error;
                }
            }
            if (message.pickInfoNtf != null && message.hasOwnProperty("pickInfoNtf")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.Common.PickInfo.verify(message.pickInfoNtf);
                    if (error)
                        return "pickInfoNtf." + error;
                }
            }
            if (message.releaseInfoNtf != null && message.hasOwnProperty("releaseInfoNtf")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.Common.ReleaseInfo.verify(message.releaseInfoNtf);
                    if (error)
                        return "releaseInfoNtf." + error;
                }
            }
            return null;
        };

        /**
         * CommandType enum.
         * @name Msg.Message.CommandType
         * @enum {number}
         * @property {number} HEARTBEAT_REQ=0 HEARTBEAT_REQ value
         * @property {number} HEARTBEAT_RESP=1 HEARTBEAT_RESP value
         * @property {number} JOIN_ROOM_REQ=2 JOIN_ROOM_REQ value
         * @property {number} ADJUST_CARD_REQ=3 ADJUST_CARD_REQ value
         * @property {number} PICK_CARD_REQ=4 PICK_CARD_REQ value
         * @property {number} RELEASE_CARD_REQ=5 RELEASE_CARD_REQ value
         * @property {number} RELEASE_CARD_RESP=6 RELEASE_CARD_RESP value
         * @property {number} ROOM_INFO_NTF=7 ROOM_INFO_NTF value
         * @property {number} GAME_RANK_NTF=8 GAME_RANK_NTF value
         * @property {number} ERROR=9 ERROR value
         * @property {number} PICK_INFO_NTF=10 PICK_INFO_NTF value
         * @property {number} RELEASE_INFO_NTF=11 RELEASE_INFO_NTF value
         * @property {number} DEFUSE_FAILED_REQ=12 DEFUSE_FAILED_REQ value
         */
        Message.CommandType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "HEARTBEAT_REQ"] = 0;
            values[valuesById[1] = "HEARTBEAT_RESP"] = 1;
            values[valuesById[2] = "JOIN_ROOM_REQ"] = 2;
            values[valuesById[3] = "ADJUST_CARD_REQ"] = 3;
            values[valuesById[4] = "PICK_CARD_REQ"] = 4;
            values[valuesById[5] = "RELEASE_CARD_REQ"] = 5;
            values[valuesById[6] = "RELEASE_CARD_RESP"] = 6;
            values[valuesById[7] = "ROOM_INFO_NTF"] = 7;
            values[valuesById[8] = "GAME_RANK_NTF"] = 8;
            values[valuesById[9] = "ERROR"] = 9;
            values[valuesById[10] = "PICK_INFO_NTF"] = 10;
            values[valuesById[11] = "RELEASE_INFO_NTF"] = 11;
            values[valuesById[12] = "DEFUSE_FAILED_REQ"] = 12;
            return values;
        })();

        return Message;
    })();

    return Msg;
})();

$root.ReleaseCard = (function() {

    /**
     * Namespace ReleaseCard.
     * @exports ReleaseCard
     * @namespace
     */
    var ReleaseCard = {};

    ReleaseCard.ReleaseCardRequest = (function() {

        /**
         * Properties of a ReleaseCardRequest.
         * @memberof ReleaseCard
         * @interface IReleaseCardRequest
         * @property {number|null} [cardId] ReleaseCardRequest cardId
         * @property {number|null} [targetId] ReleaseCardRequest targetId
         * @property {number|null} [favorPush] ReleaseCardRequest favorPush
         */

        /**
         * Constructs a new ReleaseCardRequest.
         * @memberof ReleaseCard
         * @classdesc Represents a ReleaseCardRequest.
         * @implements IReleaseCardRequest
         * @constructor
         * @param {ReleaseCard.IReleaseCardRequest=} [properties] Properties to set
         */
        function ReleaseCardRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReleaseCardRequest cardId.
         * @member {number} cardId
         * @memberof ReleaseCard.ReleaseCardRequest
         * @instance
         */
        ReleaseCardRequest.prototype.cardId = 0;

        /**
         * ReleaseCardRequest targetId.
         * @member {number} targetId
         * @memberof ReleaseCard.ReleaseCardRequest
         * @instance
         */
        ReleaseCardRequest.prototype.targetId = 0;

        /**
         * ReleaseCardRequest favorPush.
         * @member {number} favorPush
         * @memberof ReleaseCard.ReleaseCardRequest
         * @instance
         */
        ReleaseCardRequest.prototype.favorPush = 0;

        /**
         * Creates a new ReleaseCardRequest instance using the specified properties.
         * @function create
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {ReleaseCard.IReleaseCardRequest=} [properties] Properties to set
         * @returns {ReleaseCard.ReleaseCardRequest} ReleaseCardRequest instance
         */
        ReleaseCardRequest.create = function create(properties) {
            return new ReleaseCardRequest(properties);
        };

        /**
         * Encodes the specified ReleaseCardRequest message. Does not implicitly {@link ReleaseCard.ReleaseCardRequest.verify|verify} messages.
         * @function encode
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {ReleaseCard.IReleaseCardRequest} message ReleaseCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReleaseCardRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cardId);
            if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.targetId);
            if (message.favorPush != null && Object.hasOwnProperty.call(message, "favorPush"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.favorPush);
            return writer;
        };

        /**
         * Encodes the specified ReleaseCardRequest message, length delimited. Does not implicitly {@link ReleaseCard.ReleaseCardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {ReleaseCard.IReleaseCardRequest} message ReleaseCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReleaseCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReleaseCardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ReleaseCard.ReleaseCardRequest} ReleaseCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReleaseCardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReleaseCard.ReleaseCardRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cardId = reader.uint32();
                    break;
                case 2:
                    message.targetId = reader.uint32();
                    break;
                case 3:
                    message.favorPush = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReleaseCardRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ReleaseCard.ReleaseCardRequest} ReleaseCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReleaseCardRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReleaseCardRequest message.
         * @function verify
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReleaseCardRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                if (!$util.isInteger(message.cardId))
                    return "cardId: integer expected";
            if (message.targetId != null && message.hasOwnProperty("targetId"))
                if (!$util.isInteger(message.targetId))
                    return "targetId: integer expected";
            if (message.favorPush != null && message.hasOwnProperty("favorPush"))
                if (!$util.isInteger(message.favorPush))
                    return "favorPush: integer expected";
            return null;
        };

        return ReleaseCardRequest;
    })();

    ReleaseCard.ReleaseCardResponese = (function() {

        /**
         * Properties of a ReleaseCardResponese.
         * @memberof ReleaseCard
         * @interface IReleaseCardResponese
         * @property {number|null} [predictIndex] ReleaseCardResponese predictIndex
         * @property {Array.<number>|null} [xrayCards] ReleaseCardResponese xrayCards
         */

        /**
         * Constructs a new ReleaseCardResponese.
         * @memberof ReleaseCard
         * @classdesc Represents a ReleaseCardResponese.
         * @implements IReleaseCardResponese
         * @constructor
         * @param {ReleaseCard.IReleaseCardResponese=} [properties] Properties to set
         */
        function ReleaseCardResponese(properties) {
            this.xrayCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReleaseCardResponese predictIndex.
         * @member {number} predictIndex
         * @memberof ReleaseCard.ReleaseCardResponese
         * @instance
         */
        ReleaseCardResponese.prototype.predictIndex = 0;

        /**
         * ReleaseCardResponese xrayCards.
         * @member {Array.<number>} xrayCards
         * @memberof ReleaseCard.ReleaseCardResponese
         * @instance
         */
        ReleaseCardResponese.prototype.xrayCards = $util.emptyArray;

        /**
         * Creates a new ReleaseCardResponese instance using the specified properties.
         * @function create
         * @memberof ReleaseCard.ReleaseCardResponese
         * @static
         * @param {ReleaseCard.IReleaseCardResponese=} [properties] Properties to set
         * @returns {ReleaseCard.ReleaseCardResponese} ReleaseCardResponese instance
         */
        ReleaseCardResponese.create = function create(properties) {
            return new ReleaseCardResponese(properties);
        };

        /**
         * Encodes the specified ReleaseCardResponese message. Does not implicitly {@link ReleaseCard.ReleaseCardResponese.verify|verify} messages.
         * @function encode
         * @memberof ReleaseCard.ReleaseCardResponese
         * @static
         * @param {ReleaseCard.IReleaseCardResponese} message ReleaseCardResponese message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReleaseCardResponese.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.predictIndex != null && Object.hasOwnProperty.call(message, "predictIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.predictIndex);
            if (message.xrayCards != null && message.xrayCards.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.xrayCards.length; ++i)
                    writer.uint32(message.xrayCards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ReleaseCardResponese message, length delimited. Does not implicitly {@link ReleaseCard.ReleaseCardResponese.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ReleaseCard.ReleaseCardResponese
         * @static
         * @param {ReleaseCard.IReleaseCardResponese} message ReleaseCardResponese message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReleaseCardResponese.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReleaseCardResponese message from the specified reader or buffer.
         * @function decode
         * @memberof ReleaseCard.ReleaseCardResponese
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ReleaseCard.ReleaseCardResponese} ReleaseCardResponese
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReleaseCardResponese.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReleaseCard.ReleaseCardResponese();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.predictIndex = reader.uint32();
                    break;
                case 2:
                    if (!(message.xrayCards && message.xrayCards.length))
                        message.xrayCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.xrayCards.push(reader.uint32());
                    } else
                        message.xrayCards.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReleaseCardResponese message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ReleaseCard.ReleaseCardResponese
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ReleaseCard.ReleaseCardResponese} ReleaseCardResponese
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReleaseCardResponese.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReleaseCardResponese message.
         * @function verify
         * @memberof ReleaseCard.ReleaseCardResponese
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReleaseCardResponese.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.predictIndex != null && message.hasOwnProperty("predictIndex"))
                if (!$util.isInteger(message.predictIndex))
                    return "predictIndex: integer expected";
            if (message.xrayCards != null && message.hasOwnProperty("xrayCards")) {
                if (!Array.isArray(message.xrayCards))
                    return "xrayCards: array expected";
                for (var i = 0; i < message.xrayCards.length; ++i)
                    if (!$util.isInteger(message.xrayCards[i]))
                        return "xrayCards: integer[] expected";
            }
            return null;
        };

        return ReleaseCardResponese;
    })();

    return ReleaseCard;
})();