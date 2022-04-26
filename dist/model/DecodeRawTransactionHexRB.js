"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DecodeRawTransactionHexRBData = _interopRequireDefault(require("./DecodeRawTransactionHexRBData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRB model module.
 * @module model/DecodeRawTransactionHexRB
 * @version 1.5.0
 */
var DecodeRawTransactionHexRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRB</code>.
   * @alias module:model/DecodeRawTransactionHexRB
   * @param data {module:model/DecodeRawTransactionHexRBData} 
   */
  function DecodeRawTransactionHexRB(data) {
    _classCallCheck(this, DecodeRawTransactionHexRB);

    DecodeRawTransactionHexRB.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRB} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRB} The populated <code>DecodeRawTransactionHexRB</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRB();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _DecodeRawTransactionHexRBData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


DecodeRawTransactionHexRB.prototype['context'] = undefined;
/**
 * @member {module:model/DecodeRawTransactionHexRBData} data
 */

DecodeRawTransactionHexRB.prototype['data'] = undefined;
var _default = DecodeRawTransactionHexRB;
exports["default"] = _default;