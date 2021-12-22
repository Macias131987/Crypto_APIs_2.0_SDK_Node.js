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
 * The ListOmniTokensByAddressRI model module.
 * @module model/ListOmniTokensByAddressRI
 * @version 1.4.0
 */
class ListOmniTokensByAddressRI {
    /**
     * Constructs a new <code>ListOmniTokensByAddressRI</code>.
     * @alias module:model/ListOmniTokensByAddressRI
     * @param balance {String} Defines the balance of the Omni tokens to send in the address.
     * @param frozen {String} Defines the amount frozen by the issuer (applies to managed properties only).
     * @param name {String} Defines the name of the Omni tokens to send.
     * @param propertyId {Number} Represents the identifier of the tokens to send.
     * @param reserved {String} Represents the amount reserved by sell offers and accepts.
     */
    constructor(balance, frozen, name, propertyId, reserved) { 
        
        ListOmniTokensByAddressRI.initialize(this, balance, frozen, name, propertyId, reserved);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, balance, frozen, name, propertyId, reserved) { 
        obj['balance'] = balance;
        obj['frozen'] = frozen;
        obj['name'] = name;
        obj['propertyId'] = propertyId;
        obj['reserved'] = reserved;
    }

    /**
     * Constructs a <code>ListOmniTokensByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListOmniTokensByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListOmniTokensByAddressRI} The populated <code>ListOmniTokensByAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListOmniTokensByAddressRI();

            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
            }
            if (data.hasOwnProperty('frozen')) {
                obj['frozen'] = ApiClient.convertToType(data['frozen'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'Number');
            }
            if (data.hasOwnProperty('reserved')) {
                obj['reserved'] = ApiClient.convertToType(data['reserved'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the balance of the Omni tokens to send in the address.
 * @member {String} balance
 */
ListOmniTokensByAddressRI.prototype['balance'] = undefined;

/**
 * Defines the amount frozen by the issuer (applies to managed properties only).
 * @member {String} frozen
 */
ListOmniTokensByAddressRI.prototype['frozen'] = undefined;

/**
 * Defines the name of the Omni tokens to send.
 * @member {String} name
 */
ListOmniTokensByAddressRI.prototype['name'] = undefined;

/**
 * Represents the identifier of the tokens to send.
 * @member {Number} propertyId
 */
ListOmniTokensByAddressRI.prototype['propertyId'] = undefined;

/**
 * Represents the amount reserved by sell offers and accepts.
 * @member {String} reserved
 */
ListOmniTokensByAddressRI.prototype['reserved'] = undefined;






export default ListOmniTokensByAddressRI;

