"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BannedIpAddressDetails = _interopRequireDefault(require("./BannedIpAddressDetails"));

var _InvalidPagination = _interopRequireDefault(require("./InvalidPagination"));

var _LimitGreaterThanAllowed = _interopRequireDefault(require("./LimitGreaterThanAllowed"));

var _UriNotFound = _interopRequireDefault(require("./UriNotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetFeeAddressDetailsE400 model module.
 * @module model/GetFeeAddressDetailsE400
 * @version 1.5.0
 */
var GetFeeAddressDetailsE400 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetFeeAddressDetailsE400</code>.
   * @alias module:model/GetFeeAddressDetailsE400
   * @implements module:model/UriNotFound
   * @implements module:model/LimitGreaterThanAllowed
   * @implements module:model/InvalidPagination
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function GetFeeAddressDetailsE400(code, message) {
    _classCallCheck(this, GetFeeAddressDetailsE400);

    _UriNotFound["default"].initialize(this, code, message);

    _LimitGreaterThanAllowed["default"].initialize(this, code, message);

    _InvalidPagination["default"].initialize(this, code, message);

    GetFeeAddressDetailsE400.initialize(this, code, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetFeeAddressDetailsE400, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>GetFeeAddressDetailsE400</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeAddressDetailsE400} obj Optional instance to populate.
     * @return {module:model/GetFeeAddressDetailsE400} The populated <code>GetFeeAddressDetailsE400</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetFeeAddressDetailsE400();

        _UriNotFound["default"].constructFromObject(data, obj);

        _LimitGreaterThanAllowed["default"].constructFromObject(data, obj);

        _InvalidPagination["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_BannedIpAddressDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetFeeAddressDetailsE400;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */


GetFeeAddressDetailsE400.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

GetFeeAddressDetailsE400.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

GetFeeAddressDetailsE400.prototype['details'] = undefined; // Implement UriNotFound interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_UriNotFound["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_UriNotFound["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_UriNotFound["default"].prototype['details'] = undefined; // Implement LimitGreaterThanAllowed interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_LimitGreaterThanAllowed["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_LimitGreaterThanAllowed["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_LimitGreaterThanAllowed["default"].prototype['details'] = undefined; // Implement InvalidPagination interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_InvalidPagination["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_InvalidPagination["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_InvalidPagination["default"].prototype['details'] = undefined;
var _default = GetFeeAddressDetailsE400;
exports["default"] = _default;