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
 * The GetLatestMinedXRPRippleBlockRITotalFees model module.
 * @module model/GetLatestMinedXRPRippleBlockRITotalFees
 * @version 1.5.0
 */
class GetLatestMinedXRPRippleBlockRITotalFees {
    /**
     * Constructs a new <code>GetLatestMinedXRPRippleBlockRITotalFees</code>.
     * @alias module:model/GetLatestMinedXRPRippleBlockRITotalFees
     * @param amount {String} Defines the amount of all fees.
     * @param unit {String} Defines the unit of the amount of all fees.
     */
    constructor(amount, unit) { 
        
        GetLatestMinedXRPRippleBlockRITotalFees.initialize(this, amount, unit);
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
     * Constructs a <code>GetLatestMinedXRPRippleBlockRITotalFees</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLatestMinedXRPRippleBlockRITotalFees} obj Optional instance to populate.
     * @return {module:model/GetLatestMinedXRPRippleBlockRITotalFees} The populated <code>GetLatestMinedXRPRippleBlockRITotalFees</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLatestMinedXRPRippleBlockRITotalFees();

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
 * Defines the amount of all fees.
 * @member {String} amount
 */
GetLatestMinedXRPRippleBlockRITotalFees.prototype['amount'] = undefined;

/**
 * Defines the unit of the amount of all fees.
 * @member {String} unit
 */
GetLatestMinedXRPRippleBlockRITotalFees.prototype['unit'] = undefined;






export default GetLatestMinedXRPRippleBlockRITotalFees;

