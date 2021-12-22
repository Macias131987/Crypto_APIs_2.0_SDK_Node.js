"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTokenDetailsByContractAddressRData = _interopRequireDefault(require("./GetTokenDetailsByContractAddressRData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetTokenDetailsByContractAddressR model module.
 * @module model/GetTokenDetailsByContractAddressR
 * @version 1.4.0
 */
var GetTokenDetailsByContractAddressR = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTokenDetailsByContractAddressR</code>.
   * @alias module:model/GetTokenDetailsByContractAddressR
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
   * @param data {module:model/GetTokenDetailsByContractAddressRData} 
   */
  function GetTokenDetailsByContractAddressR(apiVersion, requestId, data) {
    _classCallCheck(this, GetTokenDetailsByContractAddressR);

    GetTokenDetailsByContractAddressR.initialize(this, apiVersion, requestId, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTokenDetailsByContractAddressR, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, requestId, data) {
      obj['apiVersion'] = apiVersion;
      obj['requestId'] = requestId;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>GetTokenDetailsByContractAddressR</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenDetailsByContractAddressR} obj Optional instance to populate.
     * @return {module:model/GetTokenDetailsByContractAddressR} The populated <code>GetTokenDetailsByContractAddressR</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTokenDetailsByContractAddressR();

        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }

        if (data.hasOwnProperty('requestId')) {
          obj['requestId'] = _ApiClient["default"].convertToType(data['requestId'], 'String');
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _GetTokenDetailsByContractAddressRData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return GetTokenDetailsByContractAddressR;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */


GetTokenDetailsByContractAddressR.prototype['apiVersion'] = undefined;
/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */

GetTokenDetailsByContractAddressR.prototype['requestId'] = undefined;
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */

GetTokenDetailsByContractAddressR.prototype['context'] = undefined;
/**
 * @member {module:model/GetTokenDetailsByContractAddressRData} data
 */

GetTokenDetailsByContractAddressR.prototype['data'] = undefined;
var _default = GetTokenDetailsByContractAddressR;
exports["default"] = _default;