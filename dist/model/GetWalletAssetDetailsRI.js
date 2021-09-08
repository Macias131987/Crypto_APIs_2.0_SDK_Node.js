"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetWalletAssetDetailsRIConfirmedBalance = _interopRequireDefault(require("./GetWalletAssetDetailsRIConfirmedBalance"));

var _GetWalletAssetDetailsRIRecievedConfirmedAmount = _interopRequireDefault(require("./GetWalletAssetDetailsRIRecievedConfirmedAmount"));

var _GetWalletAssetDetailsRISentConfirmedAmount = _interopRequireDefault(require("./GetWalletAssetDetailsRISentConfirmedAmount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetWalletAssetDetailsRI model module.
 * @module model/GetWalletAssetDetailsRI
 * @version 1.2.1
 */
var GetWalletAssetDetailsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletAssetDetailsRI</code>.
   * @alias module:model/GetWalletAssetDetailsRI
   * @param confirmedBalance {module:model/GetWalletAssetDetailsRIConfirmedBalance} 
   * @param depositAddressesCount {Number} Specifies the count of deposit addresses in the Wallet.
   * @param name {String} Defines the name of the Wallet given to it by the user.
   * @param recievedConfirmedAmount {module:model/GetWalletAssetDetailsRIRecievedConfirmedAmount} 
   * @param sentConfirmedAmount {module:model/GetWalletAssetDetailsRISentConfirmedAmount} 
   */
  function GetWalletAssetDetailsRI(confirmedBalance, depositAddressesCount, name, recievedConfirmedAmount, sentConfirmedAmount) {
    _classCallCheck(this, GetWalletAssetDetailsRI);

    GetWalletAssetDetailsRI.initialize(this, confirmedBalance, depositAddressesCount, name, recievedConfirmedAmount, sentConfirmedAmount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetWalletAssetDetailsRI, null, [{
    key: "initialize",
    value: function initialize(obj, confirmedBalance, depositAddressesCount, name, recievedConfirmedAmount, sentConfirmedAmount) {
      obj['confirmedBalance'] = confirmedBalance;
      obj['depositAddressesCount'] = depositAddressesCount;
      obj['name'] = name;
      obj['recievedConfirmedAmount'] = recievedConfirmedAmount;
      obj['sentConfirmedAmount'] = sentConfirmedAmount;
    }
    /**
     * Constructs a <code>GetWalletAssetDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletAssetDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetWalletAssetDetailsRI} The populated <code>GetWalletAssetDetailsRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletAssetDetailsRI();

        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _GetWalletAssetDetailsRIConfirmedBalance["default"].constructFromObject(data['confirmedBalance']);
        }

        if (data.hasOwnProperty('depositAddressesCount')) {
          obj['depositAddressesCount'] = _ApiClient["default"].convertToType(data['depositAddressesCount'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('recievedConfirmedAmount')) {
          obj['recievedConfirmedAmount'] = _GetWalletAssetDetailsRIRecievedConfirmedAmount["default"].constructFromObject(data['recievedConfirmedAmount']);
        }

        if (data.hasOwnProperty('sentConfirmedAmount')) {
          obj['sentConfirmedAmount'] = _GetWalletAssetDetailsRISentConfirmedAmount["default"].constructFromObject(data['sentConfirmedAmount']);
        }
      }

      return obj;
    }
  }]);

  return GetWalletAssetDetailsRI;
}();
/**
 * @member {module:model/GetWalletAssetDetailsRIConfirmedBalance} confirmedBalance
 */


GetWalletAssetDetailsRI.prototype['confirmedBalance'] = undefined;
/**
 * Specifies the count of deposit addresses in the Wallet.
 * @member {Number} depositAddressesCount
 */

GetWalletAssetDetailsRI.prototype['depositAddressesCount'] = undefined;
/**
 * Defines the name of the Wallet given to it by the user.
 * @member {String} name
 */

GetWalletAssetDetailsRI.prototype['name'] = undefined;
/**
 * @member {module:model/GetWalletAssetDetailsRIRecievedConfirmedAmount} recievedConfirmedAmount
 */

GetWalletAssetDetailsRI.prototype['recievedConfirmedAmount'] = undefined;
/**
 * @member {module:model/GetWalletAssetDetailsRISentConfirmedAmount} sentConfirmedAmount
 */

GetWalletAssetDetailsRI.prototype['sentConfirmedAmount'] = undefined;
var _default = GetWalletAssetDetailsRI;
exports["default"] = _default;