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
 * The GetZilliqaAddressDetailsRIBalance model module.
 * @module model/GetZilliqaAddressDetailsRIBalance
 * @version 1.7.3
 */
var GetZilliqaAddressDetailsRIBalance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetZilliqaAddressDetailsRIBalance</code>.
   * Represents the total balance of the address as an object.
   * @alias module:model/GetZilliqaAddressDetailsRIBalance
   * @param amount {String} Represents the amount of the address's balance.
   * @param unit {String} Represents the unit of the address's balance.
   */
  function GetZilliqaAddressDetailsRIBalance(amount, unit) {
    _classCallCheck(this, GetZilliqaAddressDetailsRIBalance);

    GetZilliqaAddressDetailsRIBalance.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetZilliqaAddressDetailsRIBalance, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>GetZilliqaAddressDetailsRIBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetZilliqaAddressDetailsRIBalance} obj Optional instance to populate.
     * @return {module:model/GetZilliqaAddressDetailsRIBalance} The populated <code>GetZilliqaAddressDetailsRIBalance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetZilliqaAddressDetailsRIBalance();

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

  return GetZilliqaAddressDetailsRIBalance;
}();
/**
 * Represents the amount of the address's balance.
 * @member {String} amount
 */


GetZilliqaAddressDetailsRIBalance.prototype['amount'] = undefined;
/**
 * Represents the unit of the address's balance.
 * @member {String} unit
 */

GetZilliqaAddressDetailsRIBalance.prototype['unit'] = undefined;
var _default = GetZilliqaAddressDetailsRIBalance;
exports["default"] = _default;