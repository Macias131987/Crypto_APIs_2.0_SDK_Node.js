"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListHDWalletXPubYPubZPubUTXOsRI = _interopRequireDefault(require("./ListHDWalletXPubYPubZPubUTXOsRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListHDWalletXPubYPubZPubUTXOsRData model module.
 * @module model/ListHDWalletXPubYPubZPubUTXOsRData
 * @version 1.7.3
 */
var ListHDWalletXPubYPubZPubUTXOsRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListHDWalletXPubYPubZPubUTXOsRData</code>.
   * @alias module:model/ListHDWalletXPubYPubZPubUTXOsRData
   * @param limit {Number} Defines how many items should be returned in the response per page basis.
   * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
   * @param total {Number} Defines the total number of items returned in the response.
   * @param items {Array.<module:model/ListHDWalletXPubYPubZPubUTXOsRI>} 
   */
  function ListHDWalletXPubYPubZPubUTXOsRData(limit, offset, total, items) {
    _classCallCheck(this, ListHDWalletXPubYPubZPubUTXOsRData);

    ListHDWalletXPubYPubZPubUTXOsRData.initialize(this, limit, offset, total, items);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListHDWalletXPubYPubZPubUTXOsRData, null, [{
    key: "initialize",
    value: function initialize(obj, limit, offset, total, items) {
      obj['limit'] = limit;
      obj['offset'] = offset;
      obj['total'] = total;
      obj['items'] = items;
    }
    /**
     * Constructs a <code>ListHDWalletXPubYPubZPubUTXOsRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletXPubYPubZPubUTXOsRData} obj Optional instance to populate.
     * @return {module:model/ListHDWalletXPubYPubZPubUTXOsRData} The populated <code>ListHDWalletXPubYPubZPubUTXOsRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListHDWalletXPubYPubZPubUTXOsRData();

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ListHDWalletXPubYPubZPubUTXOsRI["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListHDWalletXPubYPubZPubUTXOsRData;
}();
/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */


ListHDWalletXPubYPubZPubUTXOsRData.prototype['limit'] = undefined;
/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */

ListHDWalletXPubYPubZPubUTXOsRData.prototype['offset'] = undefined;
/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */

ListHDWalletXPubYPubZPubUTXOsRData.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/ListHDWalletXPubYPubZPubUTXOsRI>} items
 */

ListHDWalletXPubYPubZPubUTXOsRData.prototype['items'] = undefined;
var _default = ListHDWalletXPubYPubZPubUTXOsRData;
exports["default"] = _default;