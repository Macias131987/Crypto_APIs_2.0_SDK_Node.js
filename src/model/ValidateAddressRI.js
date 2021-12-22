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
 * The ValidateAddressRI model module.
 * @module model/ValidateAddressRI
 * @version 1.4.0
 */
class ValidateAddressRI {
    /**
     * Constructs a new <code>ValidateAddressRI</code>.
     * @alias module:model/ValidateAddressRI
     * @param address {String} Represents the specific address that will be checked if it's valid or not.
     * @param isValid {Boolean} Defines whether the address is valid or not. Set as boolean.
     */
    constructor(address, isValid) { 
        
        ValidateAddressRI.initialize(this, address, isValid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, isValid) { 
        obj['address'] = address;
        obj['isValid'] = isValid;
    }

    /**
     * Constructs a <code>ValidateAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateAddressRI} obj Optional instance to populate.
     * @return {module:model/ValidateAddressRI} The populated <code>ValidateAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidateAddressRI();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('isValid')) {
                obj['isValid'] = ApiClient.convertToType(data['isValid'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific address that will be checked if it's valid or not.
 * @member {String} address
 */
ValidateAddressRI.prototype['address'] = undefined;

/**
 * Defines whether the address is valid or not. Set as boolean.
 * @member {Boolean} isValid
 */
ValidateAddressRI.prototype['isValid'] = undefined;






export default ValidateAddressRI;

