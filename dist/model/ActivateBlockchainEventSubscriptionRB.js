"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivateBlockchainEventSubscriptionRBData = _interopRequireDefault(require("./ActivateBlockchainEventSubscriptionRBData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ActivateBlockchainEventSubscriptionRB model module.
 * @module model/ActivateBlockchainEventSubscriptionRB
 * @version 1.7.3
 */
var ActivateBlockchainEventSubscriptionRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActivateBlockchainEventSubscriptionRB</code>.
   * @alias module:model/ActivateBlockchainEventSubscriptionRB
   * @param data {module:model/ActivateBlockchainEventSubscriptionRBData} 
   */
  function ActivateBlockchainEventSubscriptionRB(data) {
    _classCallCheck(this, ActivateBlockchainEventSubscriptionRB);

    ActivateBlockchainEventSubscriptionRB.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActivateBlockchainEventSubscriptionRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>ActivateBlockchainEventSubscriptionRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivateBlockchainEventSubscriptionRB} obj Optional instance to populate.
     * @return {module:model/ActivateBlockchainEventSubscriptionRB} The populated <code>ActivateBlockchainEventSubscriptionRB</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivateBlockchainEventSubscriptionRB();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ActivateBlockchainEventSubscriptionRBData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return ActivateBlockchainEventSubscriptionRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


ActivateBlockchainEventSubscriptionRB.prototype['context'] = undefined;
/**
 * @member {module:model/ActivateBlockchainEventSubscriptionRBData} data
 */

ActivateBlockchainEventSubscriptionRB.prototype['data'] = undefined;
var _default = ActivateBlockchainEventSubscriptionRB;
exports["default"] = _default;