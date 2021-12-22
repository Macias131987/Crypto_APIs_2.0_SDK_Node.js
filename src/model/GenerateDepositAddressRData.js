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
import GenerateDepositAddressRI from './GenerateDepositAddressRI';

/**
 * The GenerateDepositAddressRData model module.
 * @module model/GenerateDepositAddressRData
 * @version 1.4.0
 */
class GenerateDepositAddressRData {
    /**
     * Constructs a new <code>GenerateDepositAddressRData</code>.
     * @alias module:model/GenerateDepositAddressRData
     * @param item {module:model/GenerateDepositAddressRI} 
     */
    constructor(item) { 
        
        GenerateDepositAddressRData.initialize(this, item);
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
     * Constructs a <code>GenerateDepositAddressRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateDepositAddressRData} obj Optional instance to populate.
     * @return {module:model/GenerateDepositAddressRData} The populated <code>GenerateDepositAddressRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateDepositAddressRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GenerateDepositAddressRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GenerateDepositAddressRI} item
 */
GenerateDepositAddressRData.prototype['item'] = undefined;






export default GenerateDepositAddressRData;

