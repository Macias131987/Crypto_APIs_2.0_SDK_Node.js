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
 * The AddressTokensTransactionConfirmedOmni model module.
 * @module model/AddressTokensTransactionConfirmedOmni
 * @version 1.7.3
 */
class AddressTokensTransactionConfirmedOmni {
    /**
     * Constructs a new <code>AddressTokensTransactionConfirmedOmni</code>.
     * OMNI
     * @alias module:model/AddressTokensTransactionConfirmedOmni
     * @param name {String} Specifies the name of the token.
     * @param propertyId {String} Defines the ID of the property for Omni Layer.
     * @param transactionType {String} Defines the type of the transaction.
     * @param createdByTransactionId {String} The transaction ID used to create the token.
     * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
     */
    constructor(name, propertyId, transactionType, createdByTransactionId, amount) { 
        
        AddressTokensTransactionConfirmedOmni.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, propertyId, transactionType, createdByTransactionId, amount) { 
        obj['name'] = name;
        obj['propertyId'] = propertyId;
        obj['transactionType'] = transactionType;
        obj['createdByTransactionId'] = createdByTransactionId;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedOmni</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedOmni} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedOmni} The populated <code>AddressTokensTransactionConfirmedOmni</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionConfirmedOmni();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('createdByTransactionId')) {
                obj['createdByTransactionId'] = ApiClient.convertToType(data['createdByTransactionId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionConfirmedOmni.prototype['name'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionConfirmedOmni.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
AddressTokensTransactionConfirmedOmni.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionConfirmedOmni.prototype['createdByTransactionId'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
AddressTokensTransactionConfirmedOmni.prototype['amount'] = undefined;






export default AddressTokensTransactionConfirmedOmni;

