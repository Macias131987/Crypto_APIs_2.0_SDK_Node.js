"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DecodeRawTransactionHexRISZVoutInnerScriptPubKey = _interopRequireDefault(require("./DecodeRawTransactionHexRISZVoutInnerScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRISZVoutInner model module.
 * @module model/DecodeRawTransactionHexRISZVoutInner
 * @version 1.7.3
 */
var DecodeRawTransactionHexRISZVoutInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISZVoutInner</code>.
   * @alias module:model/DecodeRawTransactionHexRISZVoutInner
   * @param scriptPubKey {module:model/DecodeRawTransactionHexRISZVoutInnerScriptPubKey} 
   */
  function DecodeRawTransactionHexRISZVoutInner(scriptPubKey) {
    _classCallCheck(this, DecodeRawTransactionHexRISZVoutInner);

    DecodeRawTransactionHexRISZVoutInner.initialize(this, scriptPubKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISZVoutInner, null, [{
    key: "initialize",
    value: function initialize(obj, scriptPubKey) {
      obj['scriptPubKey'] = scriptPubKey;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISZVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISZVoutInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISZVoutInner} The populated <code>DecodeRawTransactionHexRISZVoutInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISZVoutInner();

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _DecodeRawTransactionHexRISZVoutInnerScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISZVoutInner;
}();
/**
 * @member {module:model/DecodeRawTransactionHexRISZVoutInnerScriptPubKey} scriptPubKey
 */


DecodeRawTransactionHexRISZVoutInner.prototype['scriptPubKey'] = undefined;
/**
 * Defines the specific amount.
 * @member {String} value
 */

DecodeRawTransactionHexRISZVoutInner.prototype['value'] = undefined;
var _default = DecodeRawTransactionHexRISZVoutInner;
exports["default"] = _default;