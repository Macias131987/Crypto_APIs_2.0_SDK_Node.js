/**
 * CryptoAPIs
 * Crypto APIs is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2021-03-20
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig from './GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig';

/**
 * The ListConfirmedTransactionsByAddressRIBSZVinInner model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSZVinInner
 * @version 1.7.3
 */
class ListConfirmedTransactionsByAddressRIBSZVinInner {
    /**
     * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSZVinInner</code>.
     * @alias module:model/ListConfirmedTransactionsByAddressRIBSZVinInner
     * @param addresses {Array.<String>} 
     * @param coinbase {String} Represents the coinbase hex.
     * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig} 
     * @param sequence {Number} Represents the script sequence number.
     * @param txid {String} Represents the reference transaction identifier.
     * @param txinwitness {Array.<String>} 
     * @param value {String} Defines the specific amount.
     * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
     */
    constructor(addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) { 
        
        ListConfirmedTransactionsByAddressRIBSZVinInner.initialize(this, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout);
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
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSZVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSZVinInner} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSZVinInner} The populated <code>ListConfirmedTransactionsByAddressRIBSZVinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListConfirmedTransactionsByAddressRIBSZVinInner();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('coinbase')) {
                obj['coinbase'] = ApiClient.convertToType(data['coinbase'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig.constructFromObject(data['scriptSig']);
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
ListConfirmedTransactionsByAddressRIBSZVinInner.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
ListConfirmedTransactionsByAddressRIBSZVinInner.prototype['coinbase'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig} scriptSig
 */
ListConfirmedTransactionsByAddressRIBSZVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */
ListConfirmedTransactionsByAddressRIBSZVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListConfirmedTransactionsByAddressRIBSZVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListConfirmedTransactionsByAddressRIBSZVinInner.prototype['txinwitness'] = undefined;

/**
 * Defines the specific amount.
 * @member {String} value
 */
ListConfirmedTransactionsByAddressRIBSZVinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListConfirmedTransactionsByAddressRIBSZVinInner.prototype['vout'] = undefined;






export default ListConfirmedTransactionsByAddressRIBSZVinInner;

