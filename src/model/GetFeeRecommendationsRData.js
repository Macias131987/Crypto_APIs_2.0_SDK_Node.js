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
import GetFeeRecommendationsRI from './GetFeeRecommendationsRI';

/**
 * The GetFeeRecommendationsRData model module.
 * @module model/GetFeeRecommendationsRData
 * @version 1.4.0
 */
class GetFeeRecommendationsRData {
    /**
     * Constructs a new <code>GetFeeRecommendationsRData</code>.
     * @alias module:model/GetFeeRecommendationsRData
     * @param item {module:model/GetFeeRecommendationsRI} 
     */
    constructor(item) { 
        
        GetFeeRecommendationsRData.initialize(this, item);
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
     * Constructs a <code>GetFeeRecommendationsRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeRecommendationsRData} obj Optional instance to populate.
     * @return {module:model/GetFeeRecommendationsRData} The populated <code>GetFeeRecommendationsRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFeeRecommendationsRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetFeeRecommendationsRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetFeeRecommendationsRI} item
 */
GetFeeRecommendationsRData.prototype['item'] = undefined;






export default GetFeeRecommendationsRData;

