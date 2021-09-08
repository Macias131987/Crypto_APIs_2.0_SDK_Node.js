"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSBScriptSig = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHashRIBSBVin model module.
 * @module model/ListTransactionsByBlockHashRIBSBVin
 * @version 1.2.1
 */
var ListTransactionsByBlockHashRIBSBVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashRIBSBVin</code>.
   * @alias module:model/ListTransactionsByBlockHashRIBSBVin
   * @param addresses {Array.<String>} 
   * @param coinbase {String} Represents the coinbase hex.
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSBScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param txinwitness {Array.<String>} 
   * @param value {String} Represents the sent/received amount.
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function ListTransactionsByBlockHashRIBSBVin(addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) {
    _classCallCheck(this, ListTransactionsByBlockHashRIBSBVin);

    ListTransactionsByBlockHashRIBSBVin.initialize(this, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashRIBSBVin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) {
      obj['addresses'] = addresses;
      obj['coinbase'] = coinbase;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txid'] = txid;
      obj['txinwitness'] = txinwitness;
      obj['value'] = value;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHashRIBSBVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSBVin} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSBVin} The populated <code>ListTransactionsByBlockHashRIBSBVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashRIBSBVin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _GetTransactionDetailsByTransactionIDRIBSBScriptSig["default"].constructFromObject(data['scriptSig']);
        }

        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'String');
        }

        if (data.hasOwnProperty('txid')) {
          obj['txid'] = _ApiClient["default"].convertToType(data['txid'], 'String');
        }

        if (data.hasOwnProperty('txinwitness')) {
          obj['txinwitness'] = _ApiClient["default"].convertToType(data['txinwitness'], ['String']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHashRIBSBVin;
}();
/**
 * @member {Array.<String>} addresses
 */


ListTransactionsByBlockHashRIBSBVin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

ListTransactionsByBlockHashRIBSBVin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBScriptSig} scriptSig
 */

ListTransactionsByBlockHashRIBSBVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {String} sequence
 */

ListTransactionsByBlockHashRIBSBVin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListTransactionsByBlockHashRIBSBVin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListTransactionsByBlockHashRIBSBVin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByBlockHashRIBSBVin.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

ListTransactionsByBlockHashRIBSBVin.prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHashRIBSBVin;
exports["default"] = _default;