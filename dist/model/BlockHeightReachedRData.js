"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockHeightReachedRI = _interopRequireDefault(require("./BlockHeightReachedRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The BlockHeightReachedRData model module.
 * @module model/BlockHeightReachedRData
 * @version 1.7.3
 */
var BlockHeightReachedRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockHeightReachedRData</code>.
   * @alias module:model/BlockHeightReachedRData
   * @param item {module:model/BlockHeightReachedRI} 
   */
  function BlockHeightReachedRData(item) {
    _classCallCheck(this, BlockHeightReachedRData);

    BlockHeightReachedRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockHeightReachedRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>BlockHeightReachedRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockHeightReachedRData} obj Optional instance to populate.
     * @return {module:model/BlockHeightReachedRData} The populated <code>BlockHeightReachedRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockHeightReachedRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _BlockHeightReachedRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return BlockHeightReachedRData;
}();
/**
 * @member {module:model/BlockHeightReachedRI} item
 */


BlockHeightReachedRData.prototype['item'] = undefined;
var _default = BlockHeightReachedRData;
exports["default"] = _default;