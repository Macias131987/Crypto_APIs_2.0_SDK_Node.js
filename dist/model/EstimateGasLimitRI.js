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
 * The EstimateGasLimitRI model module.
 * @module model/EstimateGasLimitRI
 * @version 1.7.3
 */
var EstimateGasLimitRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EstimateGasLimitRI</code>.
   * @alias module:model/EstimateGasLimitRI
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   */
  function EstimateGasLimitRI(gasLimit) {
    _classCallCheck(this, EstimateGasLimitRI);

    EstimateGasLimitRI.initialize(this, gasLimit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EstimateGasLimitRI, null, [{
    key: "initialize",
    value: function initialize(obj, gasLimit) {
      obj['gasLimit'] = gasLimit;
    }
    /**
     * Constructs a <code>EstimateGasLimitRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateGasLimitRI} obj Optional instance to populate.
     * @return {module:model/EstimateGasLimitRI} The populated <code>EstimateGasLimitRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EstimateGasLimitRI();

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EstimateGasLimitRI;
}();
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */


EstimateGasLimitRI.prototype['gasLimit'] = undefined;
var _default = EstimateGasLimitRI;
exports["default"] = _default;