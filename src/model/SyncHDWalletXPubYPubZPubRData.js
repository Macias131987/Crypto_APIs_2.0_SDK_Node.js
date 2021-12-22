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
import SyncHDWalletXPubYPubZPubRI from './SyncHDWalletXPubYPubZPubRI';

/**
 * The SyncHDWalletXPubYPubZPubRData model module.
 * @module model/SyncHDWalletXPubYPubZPubRData
 * @version 1.4.0
 */
class SyncHDWalletXPubYPubZPubRData {
    /**
     * Constructs a new <code>SyncHDWalletXPubYPubZPubRData</code>.
     * @alias module:model/SyncHDWalletXPubYPubZPubRData
     * @param item {module:model/SyncHDWalletXPubYPubZPubRI} 
     */
    constructor(item) { 
        
        SyncHDWalletXPubYPubZPubRData.initialize(this, item);
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
     * Constructs a <code>SyncHDWalletXPubYPubZPubRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncHDWalletXPubYPubZPubRData} obj Optional instance to populate.
     * @return {module:model/SyncHDWalletXPubYPubZPubRData} The populated <code>SyncHDWalletXPubYPubZPubRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SyncHDWalletXPubYPubZPubRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = SyncHDWalletXPubYPubZPubRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SyncHDWalletXPubYPubZPubRI} item
 */
SyncHDWalletXPubYPubZPubRData.prototype['item'] = undefined;






export default SyncHDWalletXPubYPubZPubRData;

