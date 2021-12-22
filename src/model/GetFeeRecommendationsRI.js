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
 * The GetFeeRecommendationsRI model module.
 * @module model/GetFeeRecommendationsRI
 * @version 1.4.0
 */
class GetFeeRecommendationsRI {
    /**
     * Constructs a new <code>GetFeeRecommendationsRI</code>.
     * @alias module:model/GetFeeRecommendationsRI
     * @param unit {String} Defines the unit of the fee, e.g. BTC.
     * @param fast {String} Fast fee per byte calculated from unconfirmed transactions
     * @param slow {String} Slow fee per byte calculated from unconfirmed transactions
     * @param standard {String} Standard fee per byte calculated from unconfirmed transactions
     */
    constructor(unit, fast, slow, standard) { 
        
        GetFeeRecommendationsRI.initialize(this, unit, fast, slow, standard);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, unit, fast, slow, standard) { 
        obj['unit'] = unit;
        obj['fast'] = fast;
        obj['slow'] = slow;
        obj['standard'] = standard;
    }

    /**
     * Constructs a <code>GetFeeRecommendationsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeRecommendationsRI} obj Optional instance to populate.
     * @return {module:model/GetFeeRecommendationsRI} The populated <code>GetFeeRecommendationsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFeeRecommendationsRI();

            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('fast')) {
                obj['fast'] = ApiClient.convertToType(data['fast'], 'String');
            }
            if (data.hasOwnProperty('slow')) {
                obj['slow'] = ApiClient.convertToType(data['slow'], 'String');
            }
            if (data.hasOwnProperty('standard')) {
                obj['standard'] = ApiClient.convertToType(data['standard'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the unit of the fee, e.g. BTC.
 * @member {String} unit
 */
GetFeeRecommendationsRI.prototype['unit'] = undefined;

/**
 * Fast fee per byte calculated from unconfirmed transactions
 * @member {String} fast
 */
GetFeeRecommendationsRI.prototype['fast'] = undefined;

/**
 * Slow fee per byte calculated from unconfirmed transactions
 * @member {String} slow
 */
GetFeeRecommendationsRI.prototype['slow'] = undefined;

/**
 * Standard fee per byte calculated from unconfirmed transactions
 * @member {String} standard
 */
GetFeeRecommendationsRI.prototype['standard'] = undefined;






export default GetFeeRecommendationsRI;

