/**
 * CryptoAPIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ListConfirmedTransactionsByAddressRIBSDScriptSig from './ListConfirmedTransactionsByAddressRIBSDScriptSig';

/**
 * The ListConfirmedTransactionsByAddressRIBSDVin model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSDVin
 * @version 1.5.0
 */
class ListConfirmedTransactionsByAddressRIBSDVin {
    /**
     * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSDVin</code>.
     * @alias module:model/ListConfirmedTransactionsByAddressRIBSDVin
     * @param addresses {Array.<String>} 
     * @param coinbase {String} Represents the coinbase hex.
     * @param scriptSig {module:model/ListConfirmedTransactionsByAddressRIBSDScriptSig} 
     * @param sequence {String} Represents the script sequence number.
     * @param txinwitness {Array.<String>} 
     * @param value {String} Represents the sent/received amount.
     */
    constructor(addresses, coinbase, scriptSig, sequence, txinwitness, value) { 
        
        ListConfirmedTransactionsByAddressRIBSDVin.initialize(this, addresses, coinbase, scriptSig, sequence, txinwitness, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, coinbase, scriptSig, sequence, txinwitness, value) { 
        obj['addresses'] = addresses;
        obj['coinbase'] = coinbase;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txinwitness'] = txinwitness;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSDVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSDVin} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSDVin} The populated <code>ListConfirmedTransactionsByAddressRIBSDVin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListConfirmedTransactionsByAddressRIBSDVin();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('coinbase')) {
                obj['coinbase'] = ApiClient.convertToType(data['coinbase'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = ListConfirmedTransactionsByAddressRIBSDScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
            }
            if (data.hasOwnProperty('txid')) {
                obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
            }
            if (data.hasOwnProperty('txinwitness')) {
                obj['txinwitness'] = ApiClient.convertToType(data['txinwitness'], ['String']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} addresses
 */
ListConfirmedTransactionsByAddressRIBSDVin.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
ListConfirmedTransactionsByAddressRIBSDVin.prototype['coinbase'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSDScriptSig} scriptSig
 */
ListConfirmedTransactionsByAddressRIBSDVin.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListConfirmedTransactionsByAddressRIBSDVin.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListConfirmedTransactionsByAddressRIBSDVin.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListConfirmedTransactionsByAddressRIBSDVin.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListConfirmedTransactionsByAddressRIBSDVin.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListConfirmedTransactionsByAddressRIBSDVin.prototype['vout'] = undefined;






export default ListConfirmedTransactionsByAddressRIBSDVin;

