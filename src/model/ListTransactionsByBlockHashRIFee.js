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

/**
 * The ListTransactionsByBlockHashRIFee model module.
 * @module model/ListTransactionsByBlockHashRIFee
 * @version 1.2.1
 */
class ListTransactionsByBlockHashRIFee {
    /**
     * Constructs a new <code>ListTransactionsByBlockHashRIFee</code>.
     * @alias module:model/ListTransactionsByBlockHashRIFee
     * @param amount {String} Represents the fee amount.
     * @param unit {String} 
     */
    constructor(amount, unit) { 
        
        ListTransactionsByBlockHashRIFee.initialize(this, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, unit) { 
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHashRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIFee} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIFee} The populated <code>ListTransactionsByBlockHashRIFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHashRIFee();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the fee amount.
 * @member {String} amount
 */
ListTransactionsByBlockHashRIFee.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
ListTransactionsByBlockHashRIFee.prototype['unit'] = undefined;






export default ListTransactionsByBlockHashRIFee;

