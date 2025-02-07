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
import ListWalletTransactionsRIFee from './ListWalletTransactionsRIFee';
import ListWalletTransactionsRIFungibleTokensInner from './ListWalletTransactionsRIFungibleTokensInner';
import ListWalletTransactionsRIInternalTransactionsInner from './ListWalletTransactionsRIInternalTransactionsInner';
import ListWalletTransactionsRINonFungibleTokensInner from './ListWalletTransactionsRINonFungibleTokensInner';
import ListWalletTransactionsRIRecipientsInner from './ListWalletTransactionsRIRecipientsInner';
import ListWalletTransactionsRISendersInner from './ListWalletTransactionsRISendersInner';
import ListWalletTransactionsRIValue from './ListWalletTransactionsRIValue';

/**
 * The ListWalletTransactionsRI model module.
 * @module model/ListWalletTransactionsRI
 * @version 1.7.3
 */
class ListWalletTransactionsRI {
    /**
     * Constructs a new <code>ListWalletTransactionsRI</code>.
     * @alias module:model/ListWalletTransactionsRI
     * @param direction {String} Defines the direction of the transaction, e.g. incoming.
     * @param fee {module:model/ListWalletTransactionsRIFee} 
     * @param recipients {Array.<module:model/ListWalletTransactionsRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param senders {Array.<module:model/ListWalletTransactionsRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param status {String} Defines the status of the transaction, if it is confirmed or unconfirmed.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionId {String} Represents the unique TD of the transaction.
     * @param value {module:model/ListWalletTransactionsRIValue} 
     */
    constructor(direction, fee, recipients, senders, status, timestamp, transactionId, value) { 
        
        ListWalletTransactionsRI.initialize(this, direction, fee, recipients, senders, status, timestamp, transactionId, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, direction, fee, recipients, senders, status, timestamp, transactionId, value) { 
        obj['direction'] = direction;
        obj['fee'] = fee;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['status'] = status;
        obj['timestamp'] = timestamp;
        obj['transactionId'] = transactionId;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListWalletTransactionsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRI} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRI} The populated <code>ListWalletTransactionsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListWalletTransactionsRI();

            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ListWalletTransactionsRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('fungibleTokens')) {
                obj['fungibleTokens'] = ApiClient.convertToType(data['fungibleTokens'], [ListWalletTransactionsRIFungibleTokensInner]);
            }
            if (data.hasOwnProperty('internalTransactions')) {
                obj['internalTransactions'] = ApiClient.convertToType(data['internalTransactions'], [ListWalletTransactionsRIInternalTransactionsInner]);
            }
            if (data.hasOwnProperty('nonFungibleTokens')) {
                obj['nonFungibleTokens'] = ApiClient.convertToType(data['nonFungibleTokens'], [ListWalletTransactionsRINonFungibleTokensInner]);
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [ListWalletTransactionsRIRecipientsInner]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [ListWalletTransactionsRISendersInner]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ListWalletTransactionsRIValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * Defines the direction of the transaction, e.g. incoming.
 * @member {String} direction
 */
ListWalletTransactionsRI.prototype['direction'] = undefined;

/**
 * @member {module:model/ListWalletTransactionsRIFee} fee
 */
ListWalletTransactionsRI.prototype['fee'] = undefined;

/**
 * Represents fungible tokens'es detailed information
 * @member {Array.<module:model/ListWalletTransactionsRIFungibleTokensInner>} fungibleTokens
 */
ListWalletTransactionsRI.prototype['fungibleTokens'] = undefined;

/**
 * @member {Array.<module:model/ListWalletTransactionsRIInternalTransactionsInner>} internalTransactions
 */
ListWalletTransactionsRI.prototype['internalTransactions'] = undefined;

/**
 * Represents non-fungible tokens'es detailed information.
 * @member {Array.<module:model/ListWalletTransactionsRINonFungibleTokensInner>} nonFungibleTokens
 */
ListWalletTransactionsRI.prototype['nonFungibleTokens'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListWalletTransactionsRIRecipientsInner>} recipients
 */
ListWalletTransactionsRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListWalletTransactionsRISendersInner>} senders
 */
ListWalletTransactionsRI.prototype['senders'] = undefined;

/**
 * Defines the status of the transaction, if it is confirmed or unconfirmed.
 * @member {String} status
 */
ListWalletTransactionsRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListWalletTransactionsRI.prototype['timestamp'] = undefined;

/**
 * Represents the unique TD of the transaction.
 * @member {String} transactionId
 */
ListWalletTransactionsRI.prototype['transactionId'] = undefined;

/**
 * @member {module:model/ListWalletTransactionsRIValue} value
 */
ListWalletTransactionsRI.prototype['value'] = undefined;






export default ListWalletTransactionsRI;

