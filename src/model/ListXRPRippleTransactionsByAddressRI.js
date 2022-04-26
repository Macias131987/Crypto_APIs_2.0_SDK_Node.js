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
import GetXRPRippleTransactionDetailsByTransactionIDRIRecipients from './GetXRPRippleTransactionDetailsByTransactionIDRIRecipients';
import GetXRPRippleTransactionDetailsByTransactionIDRISenders from './GetXRPRippleTransactionDetailsByTransactionIDRISenders';
import ListXRPRippleTransactionsByAddressRIFee from './ListXRPRippleTransactionsByAddressRIFee';
import ListXRPRippleTransactionsByAddressRIOffer from './ListXRPRippleTransactionsByAddressRIOffer';
import ListXRPRippleTransactionsByAddressRIReceive from './ListXRPRippleTransactionsByAddressRIReceive';
import ListXRPRippleTransactionsByAddressRIValue from './ListXRPRippleTransactionsByAddressRIValue';

/**
 * The ListXRPRippleTransactionsByAddressRI model module.
 * @module model/ListXRPRippleTransactionsByAddressRI
 * @version 1.5.0
 */
class ListXRPRippleTransactionsByAddressRI {
    /**
     * Constructs a new <code>ListXRPRippleTransactionsByAddressRI</code>.
     * @alias module:model/ListXRPRippleTransactionsByAddressRI
     * @param index {Number} Represents the index position of the transaction in the block.
     * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
     * @param recipients {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRIRecipients>} Represents an object of addresses that receive the transactions.
     * @param senders {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRISenders>} Represents an object of addresses that provide the funds.
     * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
     * @param status {String} Defines the status of the transaction.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} Represents the hash of the XRP transaction.
     * @param type {String} Specifies the type of the transaction.
     * @param fee {module:model/ListXRPRippleTransactionsByAddressRIFee} 
     * @param offer {module:model/ListXRPRippleTransactionsByAddressRIOffer} 
     * @param receive {module:model/ListXRPRippleTransactionsByAddressRIReceive} 
     * @param value {module:model/ListXRPRippleTransactionsByAddressRIValue} 
     */
    constructor(index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) { 
        
        ListXRPRippleTransactionsByAddressRI.initialize(this, index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) { 
        obj['index'] = index;
        obj['minedInBlockHash'] = minedInBlockHash;
        obj['minedInBlockHeight'] = minedInBlockHeight;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['sequence'] = sequence;
        obj['status'] = status;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['type'] = type;
        obj['fee'] = fee;
        obj['offer'] = offer;
        obj['receive'] = receive;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListXRPRippleTransactionsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByAddressRI} The populated <code>ListXRPRippleTransactionsByAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListXRPRippleTransactionsByAddressRI();

            if (data.hasOwnProperty('destinationTag')) {
                obj['destinationTag'] = ApiClient.convertToType(data['destinationTag'], 'Number');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('minedInBlockHash')) {
                obj['minedInBlockHash'] = ApiClient.convertToType(data['minedInBlockHash'], 'String');
            }
            if (data.hasOwnProperty('minedInBlockHeight')) {
                obj['minedInBlockHeight'] = ApiClient.convertToType(data['minedInBlockHeight'], 'Number');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [GetXRPRippleTransactionDetailsByTransactionIDRIRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [GetXRPRippleTransactionDetailsByTransactionIDRISenders]);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ListXRPRippleTransactionsByAddressRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('offer')) {
                obj['offer'] = ListXRPRippleTransactionsByAddressRIOffer.constructFromObject(data['offer']);
            }
            if (data.hasOwnProperty('receive')) {
                obj['receive'] = ListXRPRippleTransactionsByAddressRIReceive.constructFromObject(data['receive']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ListXRPRippleTransactionsByAddressRIValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} destinationTag
 */
ListXRPRippleTransactionsByAddressRI.prototype['destinationTag'] = undefined;

/**
 * Represents the index position of the transaction in the block.
 * @member {Number} index
 */
ListXRPRippleTransactionsByAddressRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
ListXRPRippleTransactionsByAddressRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
ListXRPRippleTransactionsByAddressRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRIRecipients>} recipients
 */
ListXRPRippleTransactionsByAddressRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRISenders>} senders
 */
ListXRPRippleTransactionsByAddressRI.prototype['senders'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
ListXRPRippleTransactionsByAddressRI.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
ListXRPRippleTransactionsByAddressRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListXRPRippleTransactionsByAddressRI.prototype['timestamp'] = undefined;

/**
 * Represents the hash of the XRP transaction.
 * @member {String} transactionHash
 */
ListXRPRippleTransactionsByAddressRI.prototype['transactionHash'] = undefined;

/**
 * Specifies the type of the transaction.
 * @member {String} type
 */
ListXRPRippleTransactionsByAddressRI.prototype['type'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByAddressRIFee} fee
 */
ListXRPRippleTransactionsByAddressRI.prototype['fee'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByAddressRIOffer} offer
 */
ListXRPRippleTransactionsByAddressRI.prototype['offer'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByAddressRIReceive} receive
 */
ListXRPRippleTransactionsByAddressRI.prototype['receive'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByAddressRIValue} value
 */
ListXRPRippleTransactionsByAddressRI.prototype['value'] = undefined;






export default ListXRPRippleTransactionsByAddressRI;

