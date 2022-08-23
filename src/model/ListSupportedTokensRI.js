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

/**
 * The ListSupportedTokensRI model module.
 * @module model/ListSupportedTokensRI
 * @version 1.7.3
 */
class ListSupportedTokensRI {
    /**
     * Constructs a new <code>ListSupportedTokensRI</code>.
     * @alias module:model/ListSupportedTokensRI
     * @param decimals {Number} Defines the token's decimal number or all of its points after the zero.
     * @param identifier {String} Represents a unique identifier for the specific blockchain and network, e.g. smart contract address, property ID, etc.
     * @param name {String} Defines the token name.
     * @param symbol {String} Defines the token's unique symbol in the Crypto APIs listings.
     * @param type {String} Represents the token's type representation, e.g. ERC-20, Omni, etc.
     */
    constructor(decimals, identifier, name, symbol, type) { 
        
        ListSupportedTokensRI.initialize(this, decimals, identifier, name, symbol, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, decimals, identifier, name, symbol, type) { 
        obj['decimals'] = decimals;
        obj['identifier'] = identifier;
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ListSupportedTokensRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSupportedTokensRI} obj Optional instance to populate.
     * @return {module:model/ListSupportedTokensRI} The populated <code>ListSupportedTokensRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSupportedTokensRI();

            if (data.hasOwnProperty('decimals')) {
                obj['decimals'] = ApiClient.convertToType(data['decimals'], 'Number');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the token's decimal number or all of its points after the zero.
 * @member {Number} decimals
 */
ListSupportedTokensRI.prototype['decimals'] = undefined;

/**
 * Represents a unique identifier for the specific blockchain and network, e.g. smart contract address, property ID, etc.
 * @member {String} identifier
 */
ListSupportedTokensRI.prototype['identifier'] = undefined;

/**
 * Defines the token name.
 * @member {String} name
 */
ListSupportedTokensRI.prototype['name'] = undefined;

/**
 * Defines the token's unique symbol in the Crypto APIs listings.
 * @member {String} symbol
 */
ListSupportedTokensRI.prototype['symbol'] = undefined;

/**
 * Represents the token's type representation, e.g. ERC-20, Omni, etc.
 * @member {String} type
 */
ListSupportedTokensRI.prototype['type'] = undefined;






export default ListSupportedTokensRI;

