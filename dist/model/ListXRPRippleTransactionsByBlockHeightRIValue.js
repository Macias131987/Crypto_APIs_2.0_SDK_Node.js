"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListXRPRippleTransactionsByBlockHeightRIValue model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRIValue
 * @version 1.2.1
 */
var ListXRPRippleTransactionsByBlockHeightRIValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRIValue</code>.
   * @alias module:model/ListXRPRippleTransactionsByBlockHeightRIValue
   * @param amount {String} 
   * @param unit {String} 
   */
  function ListXRPRippleTransactionsByBlockHeightRIValue(amount, unit) {
    _classCallCheck(this, ListXRPRippleTransactionsByBlockHeightRIValue);

    ListXRPRippleTransactionsByBlockHeightRIValue.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListXRPRippleTransactionsByBlockHeightRIValue, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRIValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRIValue} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRIValue} The populated <code>ListXRPRippleTransactionsByBlockHeightRIValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByBlockHeightRIValue();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListXRPRippleTransactionsByBlockHeightRIValue;
}();
/**
 * @member {String} amount
 */


ListXRPRippleTransactionsByBlockHeightRIValue.prototype['amount'] = undefined;
/**
 * @member {String} unit
 */

ListXRPRippleTransactionsByBlockHeightRIValue.prototype['unit'] = undefined;
var _default = ListXRPRippleTransactionsByBlockHeightRIValue;
exports["default"] = _default;