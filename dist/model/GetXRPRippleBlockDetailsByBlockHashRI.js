"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetXRPRippleBlockDetailsByBlockHashRITotalCoins = _interopRequireDefault(require("./GetXRPRippleBlockDetailsByBlockHashRITotalCoins"));

var _GetXRPRippleBlockDetailsByBlockHeightRITotalFees = _interopRequireDefault(require("./GetXRPRippleBlockDetailsByBlockHeightRITotalFees"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetXRPRippleBlockDetailsByBlockHashRI model module.
 * @module model/GetXRPRippleBlockDetailsByBlockHashRI
 * @version 1.7.3
 */
var GetXRPRippleBlockDetailsByBlockHashRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetXRPRippleBlockDetailsByBlockHashRI</code>.
   * @alias module:model/GetXRPRippleBlockDetailsByBlockHashRI
   * @param blockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
   * @param nextBlockHash {String} Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
   * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
   * @param totalCoins {module:model/GetXRPRippleBlockDetailsByBlockHashRITotalCoins} 
   * @param totalFees {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalFees} 
   * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
   */
  function GetXRPRippleBlockDetailsByBlockHashRI(blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount) {
    _classCallCheck(this, GetXRPRippleBlockDetailsByBlockHashRI);

    GetXRPRippleBlockDetailsByBlockHashRI.initialize(this, blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetXRPRippleBlockDetailsByBlockHashRI, null, [{
    key: "initialize",
    value: function initialize(obj, blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount) {
      obj['blockHash'] = blockHash;
      obj['blockHeight'] = blockHeight;
      obj['nextBlockHash'] = nextBlockHash;
      obj['previousBlockHash'] = previousBlockHash;
      obj['timestamp'] = timestamp;
      obj['totalCoins'] = totalCoins;
      obj['totalFees'] = totalFees;
      obj['transactionsCount'] = transactionsCount;
    }
    /**
     * Constructs a <code>GetXRPRippleBlockDetailsByBlockHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleBlockDetailsByBlockHashRI} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleBlockDetailsByBlockHashRI} The populated <code>GetXRPRippleBlockDetailsByBlockHashRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetXRPRippleBlockDetailsByBlockHashRI();

        if (data.hasOwnProperty('blockHash')) {
          obj['blockHash'] = _ApiClient["default"].convertToType(data['blockHash'], 'String');
        }

        if (data.hasOwnProperty('blockHeight')) {
          obj['blockHeight'] = _ApiClient["default"].convertToType(data['blockHeight'], 'Number');
        }

        if (data.hasOwnProperty('nextBlockHash')) {
          obj['nextBlockHash'] = _ApiClient["default"].convertToType(data['nextBlockHash'], 'String');
        }

        if (data.hasOwnProperty('previousBlockHash')) {
          obj['previousBlockHash'] = _ApiClient["default"].convertToType(data['previousBlockHash'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('totalCoins')) {
          obj['totalCoins'] = _GetXRPRippleBlockDetailsByBlockHashRITotalCoins["default"].constructFromObject(data['totalCoins']);
        }

        if (data.hasOwnProperty('totalFees')) {
          obj['totalFees'] = _GetXRPRippleBlockDetailsByBlockHeightRITotalFees["default"].constructFromObject(data['totalFees']);
        }

        if (data.hasOwnProperty('transactionsCount')) {
          obj['transactionsCount'] = _ApiClient["default"].convertToType(data['transactionsCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetXRPRippleBlockDetailsByBlockHashRI;
}();
/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} blockHash
 */


GetXRPRippleBlockDetailsByBlockHashRI.prototype['blockHash'] = undefined;
/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */

GetXRPRippleBlockDetailsByBlockHashRI.prototype['blockHeight'] = undefined;
/**
 * Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
 * @member {String} nextBlockHash
 */

GetXRPRippleBlockDetailsByBlockHashRI.prototype['nextBlockHash'] = undefined;
/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */

GetXRPRippleBlockDetailsByBlockHashRI.prototype['previousBlockHash'] = undefined;
/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */

GetXRPRippleBlockDetailsByBlockHashRI.prototype['timestamp'] = undefined;
/**
 * @member {module:model/GetXRPRippleBlockDetailsByBlockHashRITotalCoins} totalCoins
 */

GetXRPRippleBlockDetailsByBlockHashRI.prototype['totalCoins'] = undefined;
/**
 * @member {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalFees} totalFees
 */

GetXRPRippleBlockDetailsByBlockHashRI.prototype['totalFees'] = undefined;
/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */

GetXRPRippleBlockDetailsByBlockHashRI.prototype['transactionsCount'] = undefined;
var _default = GetXRPRippleBlockDetailsByBlockHashRI;
exports["default"] = _default;