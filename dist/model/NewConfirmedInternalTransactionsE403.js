"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BannedIpAddress = _interopRequireDefault(require("./BannedIpAddress"));

var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));

var _BlockchainEventsCallbacksLimitReached = _interopRequireDefault(require("./BlockchainEventsCallbacksLimitReached"));

var _EndpointNotAllowedForApiKey = _interopRequireDefault(require("./EndpointNotAllowedForApiKey"));

var _EndpointNotAllowedForPlan = _interopRequireDefault(require("./EndpointNotAllowedForPlan"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("./FeatureMainnetsNotAllowedForPlan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NewConfirmedInternalTransactionsE403 model module.
 * @module model/NewConfirmedInternalTransactionsE403
 * @version 1.7.3
 */
var NewConfirmedInternalTransactionsE403 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedInternalTransactionsE403</code>.
   * @alias module:model/NewConfirmedInternalTransactionsE403
   * @implements module:model/BannedIpAddress
   * @implements module:model/EndpointNotAllowedForPlan
   * @implements module:model/EndpointNotAllowedForApiKey
   * @implements module:model/FeatureMainnetsNotAllowedForPlan
   * @implements module:model/BlockchainEventsCallbacksLimitReached
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function NewConfirmedInternalTransactionsE403(code, message) {
    _classCallCheck(this, NewConfirmedInternalTransactionsE403);

    _BannedIpAddress["default"].initialize(this, code, message);

    _EndpointNotAllowedForPlan["default"].initialize(this, code, message);

    _EndpointNotAllowedForApiKey["default"].initialize(this, code, message);

    _FeatureMainnetsNotAllowedForPlan["default"].initialize(this, code, message);

    _BlockchainEventsCallbacksLimitReached["default"].initialize(this, code, message);

    NewConfirmedInternalTransactionsE403.initialize(this, code, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedInternalTransactionsE403, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>NewConfirmedInternalTransactionsE403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsE403} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsE403} The populated <code>NewConfirmedInternalTransactionsE403</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedInternalTransactionsE403();

        _BannedIpAddress["default"].constructFromObject(data, obj);

        _EndpointNotAllowedForPlan["default"].constructFromObject(data, obj);

        _EndpointNotAllowedForApiKey["default"].constructFromObject(data, obj);

        _FeatureMainnetsNotAllowedForPlan["default"].constructFromObject(data, obj);

        _BlockchainEventsCallbacksLimitReached["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_BannedIpAddressDetailsInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedInternalTransactionsE403;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */


NewConfirmedInternalTransactionsE403.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

NewConfirmedInternalTransactionsE403.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

NewConfirmedInternalTransactionsE403.prototype['details'] = undefined; // Implement BannedIpAddress interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_BannedIpAddress["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_BannedIpAddress["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

_BannedIpAddress["default"].prototype['details'] = undefined; // Implement EndpointNotAllowedForPlan interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_EndpointNotAllowedForPlan["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_EndpointNotAllowedForPlan["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

_EndpointNotAllowedForPlan["default"].prototype['details'] = undefined; // Implement EndpointNotAllowedForApiKey interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_EndpointNotAllowedForApiKey["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_EndpointNotAllowedForApiKey["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

_EndpointNotAllowedForApiKey["default"].prototype['details'] = undefined; // Implement FeatureMainnetsNotAllowedForPlan interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_FeatureMainnetsNotAllowedForPlan["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_FeatureMainnetsNotAllowedForPlan["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

_FeatureMainnetsNotAllowedForPlan["default"].prototype['details'] = undefined; // Implement BlockchainEventsCallbacksLimitReached interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_BlockchainEventsCallbacksLimitReached["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_BlockchainEventsCallbacksLimitReached["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

_BlockchainEventsCallbacksLimitReached["default"].prototype['details'] = undefined;
var _default = NewConfirmedInternalTransactionsE403;
exports["default"] = _default;