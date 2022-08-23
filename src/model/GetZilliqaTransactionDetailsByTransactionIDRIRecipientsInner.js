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

/**
 * The GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner model module.
 * @module model/GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner
 * @version 1.7.3
 */
class GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner {
    /**
     * Constructs a new <code>GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner</code>.
     * @alias module:model/GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner
     * @param address {String} Represents the hash of the address that receives the funds.
     * @param amount {String} Defines the amount of the received funds as a string.
     */
    constructor(address, amount) { 
        
        GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner.initialize(this, address, amount);
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
     * Constructs a <code>GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner} obj Optional instance to populate.
     * @return {module:model/GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner} The populated <code>GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner();

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
 * Represents the hash of the address that receives the funds.
 * @member {String} address
 */
GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner.prototype['address'] = undefined;

/**
 * Defines the amount of the received funds as a string.
 * @member {String} amount
 */
GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner.prototype['amount'] = undefined;






export default GetZilliqaTransactionDetailsByTransactionIDRIRecipientsInner;

