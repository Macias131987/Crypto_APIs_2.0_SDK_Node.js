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
 * The GetAssetDetailsByAssetIDRILatestRate model module.
 * @module model/GetAssetDetailsByAssetIDRILatestRate
 * @version 1.7.3
 */
class GetAssetDetailsByAssetIDRILatestRate {
    /**
     * Constructs a new <code>GetAssetDetailsByAssetIDRILatestRate</code>.
     * Specifies the latest price of the asset.
     * @alias module:model/GetAssetDetailsByAssetIDRILatestRate
     * @param amount {String} Represents the amount of the latest rate.
     * @param unit {String} Specifies the unit of the latest price of the asset.
     */
    constructor(amount, unit) { 
        
        GetAssetDetailsByAssetIDRILatestRate.initialize(this, amount, unit);
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
     * Constructs a <code>GetAssetDetailsByAssetIDRILatestRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetIDRILatestRate} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetIDRILatestRate} The populated <code>GetAssetDetailsByAssetIDRILatestRate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAssetDetailsByAssetIDRILatestRate();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('calculationTimestamp')) {
                obj['calculationTimestamp'] = ApiClient.convertToType(data['calculationTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the amount of the latest rate.
 * @member {String} amount
 */
GetAssetDetailsByAssetIDRILatestRate.prototype['amount'] = undefined;

/**
 * Defines when the price was calculated in UNIX timestamp. Oldest possible timestamp is 30 days.
 * @member {Number} calculationTimestamp
 */
GetAssetDetailsByAssetIDRILatestRate.prototype['calculationTimestamp'] = undefined;

/**
 * Specifies the unit of the latest price of the asset.
 * @member {String} unit
 */
GetAssetDetailsByAssetIDRILatestRate.prototype['unit'] = undefined;






export default GetAssetDetailsByAssetIDRILatestRate;

