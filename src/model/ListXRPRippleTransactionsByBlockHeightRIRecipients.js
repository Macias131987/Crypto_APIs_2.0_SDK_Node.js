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
 * The ListXRPRippleTransactionsByBlockHeightRIRecipients model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRIRecipients
 * @version 1.4.0
 */
class ListXRPRippleTransactionsByBlockHeightRIRecipients {
    /**
     * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRIRecipients</code>.
     * @alias module:model/ListXRPRippleTransactionsByBlockHeightRIRecipients
     * @param address {String} String representation of the receiver address
     * @param amount {String} String representation of the amount
     */
    constructor(address, amount) { 
        
        ListXRPRippleTransactionsByBlockHeightRIRecipients.initialize(this, address, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount) { 
        obj['address'] = address;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRIRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRIRecipients} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRIRecipients} The populated <code>ListXRPRippleTransactionsByBlockHeightRIRecipients</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListXRPRippleTransactionsByBlockHeightRIRecipients();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * String representation of the receiver address
 * @member {String} address
 */
ListXRPRippleTransactionsByBlockHeightRIRecipients.prototype['address'] = undefined;

/**
 * String representation of the amount
 * @member {String} amount
 */
ListXRPRippleTransactionsByBlockHeightRIRecipients.prototype['amount'] = undefined;






export default ListXRPRippleTransactionsByBlockHeightRIRecipients;

