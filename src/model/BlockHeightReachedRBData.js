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
import BlockHeightReachedRBDataItem from './BlockHeightReachedRBDataItem';

/**
 * The BlockHeightReachedRBData model module.
 * @module model/BlockHeightReachedRBData
 * @version 1.7.3
 */
class BlockHeightReachedRBData {
    /**
     * Constructs a new <code>BlockHeightReachedRBData</code>.
     * @alias module:model/BlockHeightReachedRBData
     * @param item {module:model/BlockHeightReachedRBDataItem} 
     */
    constructor(item) { 
        
        BlockHeightReachedRBData.initialize(this, item);
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
     * Constructs a <code>BlockHeightReachedRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockHeightReachedRBData} obj Optional instance to populate.
     * @return {module:model/BlockHeightReachedRBData} The populated <code>BlockHeightReachedRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockHeightReachedRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = BlockHeightReachedRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BlockHeightReachedRBDataItem} item
 */
BlockHeightReachedRBData.prototype['item'] = undefined;






export default BlockHeightReachedRBData;

