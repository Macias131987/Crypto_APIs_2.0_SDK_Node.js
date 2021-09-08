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
 * The ListHDWalletXPubYPubZPubTransactionsRIFee model module.
 * @module model/ListHDWalletXPubYPubZPubTransactionsRIFee
 * @version 1.2.1
 */
class ListHDWalletXPubYPubZPubTransactionsRIFee {
    /**
     * Constructs a new <code>ListHDWalletXPubYPubZPubTransactionsRIFee</code>.
     * @alias module:model/ListHDWalletXPubYPubZPubTransactionsRIFee
     * @param amount {String} Defines the amount of the transaction fee.
     */
    constructor(amount) { 
        
        ListHDWalletXPubYPubZPubTransactionsRIFee.initialize(this, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount) { 
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>ListHDWalletXPubYPubZPubTransactionsRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletXPubYPubZPubTransactionsRIFee} obj Optional instance to populate.
     * @return {module:model/ListHDWalletXPubYPubZPubTransactionsRIFee} The populated <code>ListHDWalletXPubYPubZPubTransactionsRIFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListHDWalletXPubYPubZPubTransactionsRIFee();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the amount of the transaction fee.
 * @member {String} amount
 */
ListHDWalletXPubYPubZPubTransactionsRIFee.prototype['amount'] = undefined;






export default ListHDWalletXPubYPubZPubTransactionsRIFee;

