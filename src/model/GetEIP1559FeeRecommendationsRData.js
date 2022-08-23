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
import GetEIP1559FeeRecommendationsRI from './GetEIP1559FeeRecommendationsRI';

/**
 * The GetEIP1559FeeRecommendationsRData model module.
 * @module model/GetEIP1559FeeRecommendationsRData
 * @version 1.7.3
 */
class GetEIP1559FeeRecommendationsRData {
    /**
     * Constructs a new <code>GetEIP1559FeeRecommendationsRData</code>.
     * @alias module:model/GetEIP1559FeeRecommendationsRData
     * @param item {module:model/GetEIP1559FeeRecommendationsRI} 
     */
    constructor(item) { 
        
        GetEIP1559FeeRecommendationsRData.initialize(this, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, item) { 
        obj['item'] = item;
    }

    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsRData} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsRData} The populated <code>GetEIP1559FeeRecommendationsRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEIP1559FeeRecommendationsRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetEIP1559FeeRecommendationsRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetEIP1559FeeRecommendationsRI} item
 */
GetEIP1559FeeRecommendationsRData.prototype['item'] = undefined;






export default GetEIP1559FeeRecommendationsRData;

