"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSBCVoutInnerScriptPubKey = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBCVoutInnerScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRIBSBCVoutInner model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSBCVoutInner
 * @version 1.7.3
 */
var ListAllUnconfirmedTransactionsRIBSBCVoutInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSBCVoutInner</code>.
   * @alias module:model/ListAllUnconfirmedTransactionsRIBSBCVoutInner
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/GetTransactionDetailsByTransactionIDRIBSBCVoutInnerScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListAllUnconfirmedTransactionsRIBSBCVoutInner(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRIBSBCVoutInner);

    ListAllUnconfirmedTransactionsRIBSBCVoutInner.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRIBSBCVoutInner, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSBCVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSBCVoutInner} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSBCVoutInner} The populated <code>ListAllUnconfirmedTransactionsRIBSBCVoutInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRIBSBCVoutInner();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _GetTransactionDetailsByTransactionIDRIBSBCVoutInnerScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListAllUnconfirmedTransactionsRIBSBCVoutInner;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


ListAllUnconfirmedTransactionsRIBSBCVoutInner.prototype['isSpent'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBCVoutInnerScriptPubKey} scriptPubKey
 */

ListAllUnconfirmedTransactionsRIBSBCVoutInner.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListAllUnconfirmedTransactionsRIBSBCVoutInner.prototype['value'] = undefined;
var _default = ListAllUnconfirmedTransactionsRIBSBCVoutInner;
exports["default"] = _default;