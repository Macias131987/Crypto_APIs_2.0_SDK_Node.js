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
 * The GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend
 * @version 1.5.0
 */
var GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend
   * @param anchor {String} Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
   * @param cv {String} Defines a value commitment to the value of the input note.
   * @param nullifier {String} Represents a sequence of nullifiers of the input notes.
   * @param proof {String} Represents the proof.
   * @param rk {String} Represents the randomized validating key for spendAuthSig.
   * @param spendAuthSig {String} Used to prove knowledge of the spending key authorizing spending of an input note.
   */
  function GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend(anchor, cv, nullifier, proof, rk, spendAuthSig) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend);

    GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend.initialize(this, anchor, cv, nullifier, proof, rk, spendAuthSig);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend, null, [{
    key: "initialize",
    value: function initialize(obj, anchor, cv, nullifier, proof, rk, spendAuthSig) {
      obj['anchor'] = anchor;
      obj['cv'] = cv;
      obj['nullifier'] = nullifier;
      obj['proof'] = proof;
      obj['rk'] = rk;
      obj['spendAuthSig'] = spendAuthSig;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend} The populated <code>GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend();

        if (data.hasOwnProperty('anchor')) {
          obj['anchor'] = _ApiClient["default"].convertToType(data['anchor'], 'String');
        }

        if (data.hasOwnProperty('cv')) {
          obj['cv'] = _ApiClient["default"].convertToType(data['cv'], 'String');
        }

        if (data.hasOwnProperty('nullifier')) {
          obj['nullifier'] = _ApiClient["default"].convertToType(data['nullifier'], 'String');
        }

        if (data.hasOwnProperty('proof')) {
          obj['proof'] = _ApiClient["default"].convertToType(data['proof'], 'String');
        }

        if (data.hasOwnProperty('rk')) {
          obj['rk'] = _ApiClient["default"].convertToType(data['rk'], 'String');
        }

        if (data.hasOwnProperty('spendAuthSig')) {
          obj['spendAuthSig'] = _ApiClient["default"].convertToType(data['spendAuthSig'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend;
}();
/**
 * Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
 * @member {String} anchor
 */


GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend.prototype['anchor'] = undefined;
/**
 * Defines a value commitment to the value of the input note.
 * @member {String} cv
 */

GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend.prototype['cv'] = undefined;
/**
 * Represents a sequence of nullifiers of the input notes.
 * @member {String} nullifier
 */

GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend.prototype['nullifier'] = undefined;
/**
 * Represents the proof.
 * @member {String} proof
 */

GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend.prototype['proof'] = undefined;
/**
 * Represents the randomized validating key for spendAuthSig.
 * @member {String} rk
 */

GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend.prototype['rk'] = undefined;
/**
 * Used to prove knowledge of the spending key authorizing spending of an input note.
 * @member {String} spendAuthSig
 */

GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend.prototype['spendAuthSig'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend;
exports["default"] = _default;