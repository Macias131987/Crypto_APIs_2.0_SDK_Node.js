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
 * The GetEIP1559FeeRecommendationsRIBaseFeePerGas model module.
 * @module model/GetEIP1559FeeRecommendationsRIBaseFeePerGas
 * @version 1.7.3
 */
class GetEIP1559FeeRecommendationsRIBaseFeePerGas {
    /**
     * Constructs a new <code>GetEIP1559FeeRecommendationsRIBaseFeePerGas</code>.
     * @alias module:model/GetEIP1559FeeRecommendationsRIBaseFeePerGas
     * @param unit {String} Represents the unit of the base fee per gas.
     * @param value {String} Represents the expected base fee per gas of the upcoming block, calculated from the previous block data.
     */
    constructor(unit, value) { 
        
        GetEIP1559FeeRecommendationsRIBaseFeePerGas.initialize(this, unit, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, unit, value) { 
        obj['unit'] = unit;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsRIBaseFeePerGas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsRIBaseFeePerGas} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsRIBaseFeePerGas} The populated <code>GetEIP1559FeeRecommendationsRIBaseFeePerGas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEIP1559FeeRecommendationsRIBaseFeePerGas();

            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the unit of the base fee per gas.
 * @member {String} unit
 */
GetEIP1559FeeRecommendationsRIBaseFeePerGas.prototype['unit'] = undefined;

/**
 * Represents the expected base fee per gas of the upcoming block, calculated from the previous block data.
 * @member {String} value
 */
GetEIP1559FeeRecommendationsRIBaseFeePerGas.prototype['value'] = undefined;






export default GetEIP1559FeeRecommendationsRIBaseFeePerGas;

