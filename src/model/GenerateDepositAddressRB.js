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
import GenerateDepositAddressRBData from './GenerateDepositAddressRBData';

/**
 * The GenerateDepositAddressRB model module.
 * @module model/GenerateDepositAddressRB
 * @version 1.7.3
 */
class GenerateDepositAddressRB {
    /**
     * Constructs a new <code>GenerateDepositAddressRB</code>.
     * @alias module:model/GenerateDepositAddressRB
     * @param data {module:model/GenerateDepositAddressRBData} 
     */
    constructor(data) { 
        
        GenerateDepositAddressRB.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>GenerateDepositAddressRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateDepositAddressRB} obj Optional instance to populate.
     * @return {module:model/GenerateDepositAddressRB} The populated <code>GenerateDepositAddressRB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateDepositAddressRB();

            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = GenerateDepositAddressRBData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
GenerateDepositAddressRB.prototype['context'] = undefined;

/**
 * @member {module:model/GenerateDepositAddressRBData} data
 */
GenerateDepositAddressRB.prototype['data'] = undefined;






export default GenerateDepositAddressRB;

