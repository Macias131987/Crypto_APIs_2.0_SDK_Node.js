"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSDScriptSig = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSDScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListTransactionsByBlockHeightRIBSD2Vin model module.
 * @module model/ListTransactionsByBlockHeightRIBSD2Vin
 * @version 1.4.0
 */
var ListTransactionsByBlockHeightRIBSD2Vin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBSD2Vin</code>.
   * @alias module:model/ListTransactionsByBlockHeightRIBSD2Vin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSDScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txinwitness {Array.<String>} 
   * @param value {String} Represents the sent/received amount.
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function ListTransactionsByBlockHeightRIBSD2Vin(addresses, scriptSig, sequence, txinwitness, value, vout) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBSD2Vin);

    ListTransactionsByBlockHeightRIBSD2Vin.initialize(this, addresses, scriptSig, sequence, txinwitness, value, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHeightRIBSD2Vin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txinwitness, value, vout) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txinwitness'] = txinwitness;
      obj['value'] = value;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSD2Vin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSD2Vin} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSD2Vin} The populated <code>ListTransactionsByBlockHeightRIBSD2Vin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightRIBSD2Vin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _GetTransactionDetailsByTransactionIDRIBSDScriptSig["default"].constructFromObject(data['scriptSig']);
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

  return ListTransactionsByBlockHeightRIBSD2Vin;
}();
/**
 * @member {Array.<String>} addresses
 */


ListTransactionsByBlockHeightRIBSD2Vin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

ListTransactionsByBlockHeightRIBSD2Vin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSDScriptSig} scriptSig
 */

ListTransactionsByBlockHeightRIBSD2Vin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {String} sequence
 */

ListTransactionsByBlockHeightRIBSD2Vin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListTransactionsByBlockHeightRIBSD2Vin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListTransactionsByBlockHeightRIBSD2Vin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByBlockHeightRIBSD2Vin.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

ListTransactionsByBlockHeightRIBSD2Vin.prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHeightRIBSD2Vin;
exports["default"] = _default;