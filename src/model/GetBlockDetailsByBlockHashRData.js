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
import GetBlockDetailsByBlockHashRI from './GetBlockDetailsByBlockHashRI';

/**
 * The GetBlockDetailsByBlockHashRData model module.
 * @module model/GetBlockDetailsByBlockHashRData
 * @version 1.4.0
 */
class GetBlockDetailsByBlockHashRData {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHashRData</code>.
     * @alias module:model/GetBlockDetailsByBlockHashRData
     * @param item {module:model/GetBlockDetailsByBlockHashRI} 
     */
    constructor(item) { 
        
        GetBlockDetailsByBlockHashRData.initialize(this, item);
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
     * Constructs a <code>GetBlockDetailsByBlockHashRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashRData} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashRData} The populated <code>GetBlockDetailsByBlockHashRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHashRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetBlockDetailsByBlockHashRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetBlockDetailsByBlockHashRI} item
 */
GetBlockDetailsByBlockHashRData.prototype['item'] = undefined;






export default GetBlockDetailsByBlockHashRData;

