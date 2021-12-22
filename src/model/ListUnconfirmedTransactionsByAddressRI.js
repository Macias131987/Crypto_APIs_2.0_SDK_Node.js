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
import ListUnconfirmedTransactionsByAddressRIBS from './ListUnconfirmedTransactionsByAddressRIBS';
import ListUnconfirmedTransactionsByAddressRIRecipients from './ListUnconfirmedTransactionsByAddressRIRecipients';
import ListUnconfirmedTransactionsByAddressRISenders from './ListUnconfirmedTransactionsByAddressRISenders';

/**
 * The ListUnconfirmedTransactionsByAddressRI model module.
 * @module model/ListUnconfirmedTransactionsByAddressRI
 * @version 1.4.0
 */
class ListUnconfirmedTransactionsByAddressRI {
    /**
     * Constructs a new <code>ListUnconfirmedTransactionsByAddressRI</code>.
     * @alias module:model/ListUnconfirmedTransactionsByAddressRI
     * @param recipients {Array.<module:model/ListUnconfirmedTransactionsByAddressRIRecipients>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param senders {Array.<module:model/ListUnconfirmedTransactionsByAddressRISenders>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param blockchainSpecific {module:model/ListUnconfirmedTransactionsByAddressRIBS} 
     */
    constructor(recipients, senders, timestamp, transactionHash, transactionId, blockchainSpecific) { 
        
        ListUnconfirmedTransactionsByAddressRI.initialize(this, recipients, senders, timestamp, transactionHash, transactionId, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipients, senders, timestamp, transactionHash, transactionId, blockchainSpecific) { 
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['transactionId'] = transactionId;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRI} The populated <code>ListUnconfirmedTransactionsByAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTransactionsByAddressRI();

            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [ListUnconfirmedTransactionsByAddressRIRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [ListUnconfirmedTransactionsByAddressRISenders]);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = ListUnconfirmedTransactionsByAddressRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }


}

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIRecipients>} recipients
 */
ListUnconfirmedTransactionsByAddressRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRISenders>} senders
 */
ListUnconfirmedTransactionsByAddressRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListUnconfirmedTransactionsByAddressRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
ListUnconfirmedTransactionsByAddressRI.prototype['transactionHash'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
ListUnconfirmedTransactionsByAddressRI.prototype['transactionId'] = undefined;

/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBS} blockchainSpecific
 */
ListUnconfirmedTransactionsByAddressRI.prototype['blockchainSpecific'] = undefined;






export default ListUnconfirmedTransactionsByAddressRI;

