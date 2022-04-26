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
import ListConfirmedTransactionsByAddressRIBSBSCGasPrice from './ListConfirmedTransactionsByAddressRIBSBSCGasPrice';

/**
 * The ListUnconfirmedTransactionsByAddressRIBSBSC model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSBSC
 * @version 1.5.0
 */
class ListUnconfirmedTransactionsByAddressRIBSBSC {
    /**
     * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSBSC</code>.
     * Binance Smart Chain
     * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSBSC
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} 
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} String representation of the transaction status
     */
    constructor(gasLimit, gasPrice, inputData, nonce, transactionStatus) { 
        
        ListUnconfirmedTransactionsByAddressRIBSBSC.initialize(this, gasLimit, gasPrice, inputData, nonce, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gasLimit, gasPrice, inputData, nonce, transactionStatus) { 
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSBSC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSBSC} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSBSC} The populated <code>ListUnconfirmedTransactionsByAddressRIBSBSC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTransactionsByAddressRIBSBSC();

            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ListConfirmedTransactionsByAddressRIBSBSCGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListUnconfirmedTransactionsByAddressRIBSBSC.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListUnconfirmedTransactionsByAddressRIBSBSC.prototype['gasPrice'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListUnconfirmedTransactionsByAddressRIBSBSC.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListUnconfirmedTransactionsByAddressRIBSBSC.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListUnconfirmedTransactionsByAddressRIBSBSC.prototype['transactionStatus'] = undefined;






export default ListUnconfirmedTransactionsByAddressRIBSBSC;

