"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResourceNotFound = _interopRequireDefault(require("./ResourceNotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetXRPRippleTransactionDetailsByTransactionID404Response model module.
 * @module model/GetXRPRippleTransactionDetailsByTransactionID404Response
 * @version 1.7.3
 */
var GetXRPRippleTransactionDetailsByTransactionID404Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetXRPRippleTransactionDetailsByTransactionID404Response</code>.
   * @alias module:model/GetXRPRippleTransactionDetailsByTransactionID404Response
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
   * @param error {module:model/ResourceNotFound} 
   */
  function GetXRPRippleTransactionDetailsByTransactionID404Response(apiVersion, requestId, error) {
    _classCallCheck(this, GetXRPRippleTransactionDetailsByTransactionID404Response);

    GetXRPRippleTransactionDetailsByTransactionID404Response.initialize(this, apiVersion, requestId, error);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetXRPRippleTransactionDetailsByTransactionID404Response, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, requestId, error) {
      obj['apiVersion'] = apiVersion;
      obj['requestId'] = requestId;
      obj['error'] = error;
    }
    /**
     * Constructs a <code>GetXRPRippleTransactionDetailsByTransactionID404Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleTransactionDetailsByTransactionID404Response} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleTransactionDetailsByTransactionID404Response} The populated <code>GetXRPRippleTransactionDetailsByTransactionID404Response</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetXRPRippleTransactionDetailsByTransactionID404Response();

        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }

        if (data.hasOwnProperty('requestId')) {
          obj['requestId'] = _ApiClient["default"].convertToType(data['requestId'], 'String');
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ResourceNotFound["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return GetXRPRippleTransactionDetailsByTransactionID404Response;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */


GetXRPRippleTransactionDetailsByTransactionID404Response.prototype['apiVersion'] = undefined;
/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */

GetXRPRippleTransactionDetailsByTransactionID404Response.prototype['requestId'] = undefined;
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */

GetXRPRippleTransactionDetailsByTransactionID404Response.prototype['context'] = undefined;
/**
 * @member {module:model/ResourceNotFound} error
 */

GetXRPRippleTransactionDetailsByTransactionID404Response.prototype['error'] = undefined;
var _default = GetXRPRippleTransactionDetailsByTransactionID404Response;
exports["default"] = _default;