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
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee
 * @version 1.7.3
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee() {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee);

    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('exactAmount')) {
          obj['exactAmount'] = _ApiClient["default"].convertToType(data['exactAmount'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee;
}();
/**
 * Represents the fee address
 * @member {String} address
 */


PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.prototype['address'] = undefined;
/**
 * Representation of the exact amount value
 * @member {String} exactAmount
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.prototype['exactAmount'] = undefined;
/**
 * Represents the fee priority
 * @member {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.PriorityEnum} priority
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.prototype['priority'] = undefined;
/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee['PriorityEnum'] = {
  /**
   * value: "slow"
   * @const
   */
  "slow": "slow",

  /**
   * value: "standard"
   * @const
   */
  "standard": "standard",

  /**
   * value: "fast"
   * @const
   */
  "fast": "fast"
};
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee;
exports["default"] = _default;