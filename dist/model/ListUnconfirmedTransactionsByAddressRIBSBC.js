"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListUnconfirmedTransactionsByAddressRIBSBCVinInner = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSBCVinInner"));

var _ListUnconfirmedTransactionsByAddressRIBSBCVoutInner = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSBCVoutInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListUnconfirmedTransactionsByAddressRIBSBC model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSBC
 * @version 1.7.3
 */
var ListUnconfirmedTransactionsByAddressRIBSBC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSBC</code>.
   * Bitcoin Cash
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSBC
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents the transaction's version number.
   * @param vin {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBCVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBCVoutInner>} Represents the transaction outputs.
   */
  function ListUnconfirmedTransactionsByAddressRIBSBC(locktime, size, version, vin, vout) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBSBC);

    ListUnconfirmedTransactionsByAddressRIBSBC.initialize(this, locktime, size, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnconfirmedTransactionsByAddressRIBSBC, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSBC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSBC} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSBC} The populated <code>ListUnconfirmedTransactionsByAddressRIBSBC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRIBSBC();

        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListUnconfirmedTransactionsByAddressRIBSBCVinInner["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListUnconfirmedTransactionsByAddressRIBSBCVoutInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListUnconfirmedTransactionsByAddressRIBSBC;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */


ListUnconfirmedTransactionsByAddressRIBSBC.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListUnconfirmedTransactionsByAddressRIBSBC.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

ListUnconfirmedTransactionsByAddressRIBSBC.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBCVinInner>} vin
 */

ListUnconfirmedTransactionsByAddressRIBSBC.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBCVoutInner>} vout
 */

ListUnconfirmedTransactionsByAddressRIBSBC.prototype['vout'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRIBSBC;
exports["default"] = _default;