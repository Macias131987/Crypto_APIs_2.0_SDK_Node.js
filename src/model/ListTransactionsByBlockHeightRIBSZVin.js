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
import ListTransactionsByBlockHeightRIBSZScriptSig from './ListTransactionsByBlockHeightRIBSZScriptSig';

/**
 * The ListTransactionsByBlockHeightRIBSZVin model module.
 * @module model/ListTransactionsByBlockHeightRIBSZVin
 * @version 1.4.0
 */
class ListTransactionsByBlockHeightRIBSZVin {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSZVin</code>.
     * @alias module:model/ListTransactionsByBlockHeightRIBSZVin
     * @param addresses {Array.<String>} 
     * @param coinbase {String} Represents the coinbase hex.
     * @param scriptSig {module:model/ListTransactionsByBlockHeightRIBSZScriptSig} 
     * @param sequence {Number} Represents the script sequence number.
     * @param txid {String} Represents the reference transaction identifier.
     * @param txinwitness {Array.<String>} 
     * @param value {String} Defines the specific amount.
     * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
     */
    constructor(addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) { 
        
        ListTransactionsByBlockHeightRIBSZVin.initialize(this, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) { 
        obj['addresses'] = addresses;
        obj['coinbase'] = coinbase;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txid'] = txid;
        obj['txinwitness'] = txinwitness;
        obj['value'] = value;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSZVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSZVin} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSZVin} The populated <code>ListTransactionsByBlockHeightRIBSZVin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSZVin();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('coinbase')) {
                obj['coinbase'] = ApiClient.convertToType(data['coinbase'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = ListTransactionsByBlockHeightRIBSZScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
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
ListTransactionsByBlockHeightRIBSZVin.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
ListTransactionsByBlockHeightRIBSZVin.prototype['coinbase'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSZScriptSig} scriptSig
 */
ListTransactionsByBlockHeightRIBSZVin.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */
ListTransactionsByBlockHeightRIBSZVin.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListTransactionsByBlockHeightRIBSZVin.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListTransactionsByBlockHeightRIBSZVin.prototype['txinwitness'] = undefined;

/**
 * Defines the specific amount.
 * @member {String} value
 */
ListTransactionsByBlockHeightRIBSZVin.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListTransactionsByBlockHeightRIBSZVin.prototype['vout'] = undefined;






export default ListTransactionsByBlockHeightRIBSZVin;

