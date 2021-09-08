"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetHDWalletXPubYPubZPubDetailsRI = _interopRequireDefault(require("./GetHDWalletXPubYPubZPubDetailsRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetHDWalletXPubYPubZPubDetailsRData model module.
 * @module model/GetHDWalletXPubYPubZPubDetailsRData
 * @version 1.2.1
 */
var GetHDWalletXPubYPubZPubDetailsRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetHDWalletXPubYPubZPubDetailsRData</code>.
   * @alias module:model/GetHDWalletXPubYPubZPubDetailsRData
   * @param item {module:model/GetHDWalletXPubYPubZPubDetailsRI} 
   */
  function GetHDWalletXPubYPubZPubDetailsRData(item) {
    _classCallCheck(this, GetHDWalletXPubYPubZPubDetailsRData);

    GetHDWalletXPubYPubZPubDetailsRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetHDWalletXPubYPubZPubDetailsRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubDetailsRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubDetailsRData} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubDetailsRData} The populated <code>GetHDWalletXPubYPubZPubDetailsRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetHDWalletXPubYPubZPubDetailsRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetHDWalletXPubYPubZPubDetailsRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GetHDWalletXPubYPubZPubDetailsRData;
}();
/**
 * @member {module:model/GetHDWalletXPubYPubZPubDetailsRI} item
 */


GetHDWalletXPubYPubZPubDetailsRData.prototype['item'] = undefined;
var _default = GetHDWalletXPubYPubZPubDetailsRData;
exports["default"] = _default;