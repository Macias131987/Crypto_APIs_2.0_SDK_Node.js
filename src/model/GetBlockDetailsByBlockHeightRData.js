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
import GetBlockDetailsByBlockHeightRI from './GetBlockDetailsByBlockHeightRI';

/**
 * The GetBlockDetailsByBlockHeightRData model module.
 * @module model/GetBlockDetailsByBlockHeightRData
 * @version 1.4.0
 */
class GetBlockDetailsByBlockHeightRData {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHeightRData</code>.
     * @alias module:model/GetBlockDetailsByBlockHeightRData
     * @param item {module:model/GetBlockDetailsByBlockHeightRI} 
     */
    constructor(item) { 
        
        GetBlockDetailsByBlockHeightRData.initialize(this, item);
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
     * Constructs a <code>GetBlockDetailsByBlockHeightRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightRData} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightRData} The populated <code>GetBlockDetailsByBlockHeightRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHeightRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetBlockDetailsByBlockHeightRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetBlockDetailsByBlockHeightRI} item
 */
GetBlockDetailsByBlockHeightRData.prototype['item'] = undefined;






export default GetBlockDetailsByBlockHeightRData;

