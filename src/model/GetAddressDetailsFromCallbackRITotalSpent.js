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
 * The GetAddressDetailsFromCallbackRITotalSpent model module.
 * @module model/GetAddressDetailsFromCallbackRITotalSpent
 * @version 1.7.3
 */
class GetAddressDetailsFromCallbackRITotalSpent {
    /**
     * Constructs a new <code>GetAddressDetailsFromCallbackRITotalSpent</code>.
     * @alias module:model/GetAddressDetailsFromCallbackRITotalSpent
     */
    constructor() { 
        
        GetAddressDetailsFromCallbackRITotalSpent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAddressDetailsFromCallbackRITotalSpent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsFromCallbackRITotalSpent} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsFromCallbackRITotalSpent} The populated <code>GetAddressDetailsFromCallbackRITotalSpent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddressDetailsFromCallbackRITotalSpent();

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
 * Defines the total amount of all spent by this address coins, based on confirmed transactions.
 * @member {String} amount
 */
GetAddressDetailsFromCallbackRITotalSpent.prototype['amount'] = undefined;

/**
 * Represents the unit of the total spent amount.
 * @member {String} unit
 */
GetAddressDetailsFromCallbackRITotalSpent.prototype['unit'] = undefined;






export default GetAddressDetailsFromCallbackRITotalSpent;

