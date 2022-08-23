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
import ListAllUnconfirmedTransactionsRIBSECFee from './ListAllUnconfirmedTransactionsRIBSECFee';
import ListAllUnconfirmedTransactionsRIBSECGasPrice from './ListAllUnconfirmedTransactionsRIBSECGasPrice';

/**
 * The ListAllUnconfirmedTransactionsRIBSEC model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSEC
 * @version 1.7.3
 */
class ListAllUnconfirmedTransactionsRIBSEC {
    /**
     * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSEC</code>.
     * Ethereum Classic
     * @alias module:model/ListAllUnconfirmedTransactionsRIBSEC
     * @param fee {module:model/ListAllUnconfirmedTransactionsRIBSECFee} 
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/ListAllUnconfirmedTransactionsRIBSECGasPrice} 
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} Defines the transaction status.
     */
    constructor(fee, gasLimit, gasPrice, nonce, transactionStatus) { 
        
        ListAllUnconfirmedTransactionsRIBSEC.initialize(this, fee, gasLimit, gasPrice, nonce, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee, gasLimit, gasPrice, nonce, transactionStatus) { 
        obj['fee'] = fee;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSEC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSEC} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSEC} The populated <code>ListAllUnconfirmedTransactionsRIBSEC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllUnconfirmedTransactionsRIBSEC();

            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ListAllUnconfirmedTransactionsRIBSECFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ListAllUnconfirmedTransactionsRIBSECGasPrice.constructFromObject(data['gasPrice']);
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
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECFee} fee
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['fee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECGasPrice} gasPrice
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['gasPrice'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['nonce'] = undefined;

/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['transactionStatus'] = undefined;






export default ListAllUnconfirmedTransactionsRIBSEC;

