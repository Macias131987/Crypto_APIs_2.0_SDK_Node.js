"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TransactionRequestBroadcastedDataItem model module.
 * @module model/TransactionRequestBroadcastedDataItem
 * @version 1.5.0
 */
var TransactionRequestBroadcastedDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionRequestBroadcastedDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/TransactionRequestBroadcastedDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param requiredApprovals {Number} The required number of approvals needed to approve the transaction.
   * @param requiredRejections {Number} The required number of rejections needed to reject the transaction.
   * @param currentApprovals {Number} The current number of approvals given for the transaction.
   * @param currentRejections {Number} The current number of rejections given for the transaction.
   * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
   */
  function TransactionRequestBroadcastedDataItem(blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections, transactionId) {
    _classCallCheck(this, TransactionRequestBroadcastedDataItem);

    TransactionRequestBroadcastedDataItem.initialize(this, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections, transactionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionRequestBroadcastedDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections, transactionId) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['requiredApprovals'] = requiredApprovals;
      obj['requiredRejections'] = requiredRejections;
      obj['currentApprovals'] = currentApprovals;
      obj['currentRejections'] = currentRejections;
      obj['transactionId'] = transactionId;
    }
    /**
     * Constructs a <code>TransactionRequestBroadcastedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestBroadcastedDataItem} obj Optional instance to populate.
     * @return {module:model/TransactionRequestBroadcastedDataItem} The populated <code>TransactionRequestBroadcastedDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionRequestBroadcastedDataItem();

        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('requiredApprovals')) {
          obj['requiredApprovals'] = _ApiClient["default"].convertToType(data['requiredApprovals'], 'Number');
        }

        if (data.hasOwnProperty('requiredRejections')) {
          obj['requiredRejections'] = _ApiClient["default"].convertToType(data['requiredRejections'], 'Number');
        }

        if (data.hasOwnProperty('currentApprovals')) {
          obj['currentApprovals'] = _ApiClient["default"].convertToType(data['currentApprovals'], 'Number');
        }

        if (data.hasOwnProperty('currentRejections')) {
          obj['currentRejections'] = _ApiClient["default"].convertToType(data['currentRejections'], 'Number');
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransactionRequestBroadcastedDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */


TransactionRequestBroadcastedDataItem.prototype['blockchain'] = undefined;
/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */

TransactionRequestBroadcastedDataItem.prototype['network'] = undefined;
/**
 * The required number of approvals needed to approve the transaction.
 * @member {Number} requiredApprovals
 */

TransactionRequestBroadcastedDataItem.prototype['requiredApprovals'] = undefined;
/**
 * The required number of rejections needed to reject the transaction.
 * @member {Number} requiredRejections
 */

TransactionRequestBroadcastedDataItem.prototype['requiredRejections'] = undefined;
/**
 * The current number of approvals given for the transaction.
 * @member {Number} currentApprovals
 */

TransactionRequestBroadcastedDataItem.prototype['currentApprovals'] = undefined;
/**
 * The current number of rejections given for the transaction.
 * @member {Number} currentRejections
 */

TransactionRequestBroadcastedDataItem.prototype['currentRejections'] = undefined;
/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */

TransactionRequestBroadcastedDataItem.prototype['transactionId'] = undefined;
var _default = TransactionRequestBroadcastedDataItem;
exports["default"] = _default;