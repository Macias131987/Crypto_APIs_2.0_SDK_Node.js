"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SyncHDWalletXPubYPubZPubRBDataItem = _interopRequireDefault(require("./SyncHDWalletXPubYPubZPubRBDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SyncHDWalletXPubYPubZPubRBData model module.
 * @module model/SyncHDWalletXPubYPubZPubRBData
 * @version 1.7.3
 */
var SyncHDWalletXPubYPubZPubRBData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SyncHDWalletXPubYPubZPubRBData</code>.
   * @alias module:model/SyncHDWalletXPubYPubZPubRBData
   * @param item {module:model/SyncHDWalletXPubYPubZPubRBDataItem} 
   */
  function SyncHDWalletXPubYPubZPubRBData(item) {
    _classCallCheck(this, SyncHDWalletXPubYPubZPubRBData);

    SyncHDWalletXPubYPubZPubRBData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SyncHDWalletXPubYPubZPubRBData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>SyncHDWalletXPubYPubZPubRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncHDWalletXPubYPubZPubRBData} obj Optional instance to populate.
     * @return {module:model/SyncHDWalletXPubYPubZPubRBData} The populated <code>SyncHDWalletXPubYPubZPubRBData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SyncHDWalletXPubYPubZPubRBData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _SyncHDWalletXPubYPubZPubRBDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return SyncHDWalletXPubYPubZPubRBData;
}();
/**
 * @member {module:model/SyncHDWalletXPubYPubZPubRBDataItem} item
 */


SyncHDWalletXPubYPubZPubRBData.prototype['item'] = undefined;
var _default = SyncHDWalletXPubYPubZPubRBData;
exports["default"] = _default;