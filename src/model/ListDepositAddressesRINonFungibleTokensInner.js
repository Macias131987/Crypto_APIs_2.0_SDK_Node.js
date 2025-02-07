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
 * The ListDepositAddressesRINonFungibleTokensInner model module.
 * @module model/ListDepositAddressesRINonFungibleTokensInner
 * @version 1.7.3
 */
class ListDepositAddressesRINonFungibleTokensInner {
    /**
     * Constructs a new <code>ListDepositAddressesRINonFungibleTokensInner</code>.
     * @alias module:model/ListDepositAddressesRINonFungibleTokensInner
     * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
     * @param name {String} Defines the token's name as a string.
     * @param symbol {String} Defines the symbol of the non-fungible tokens.
     * @param tokenId {String} Represents tokens' unique identifier.
     * @param type {String} Defines the specific token type.
     */
    constructor(identifier, name, symbol, tokenId, type) { 
        
        ListDepositAddressesRINonFungibleTokensInner.initialize(this, identifier, name, symbol, tokenId, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, identifier, name, symbol, tokenId, type) { 
        obj['identifier'] = identifier;
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['tokenId'] = tokenId;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ListDepositAddressesRINonFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDepositAddressesRINonFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListDepositAddressesRINonFungibleTokensInner} The populated <code>ListDepositAddressesRINonFungibleTokensInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDepositAddressesRINonFungibleTokensInner();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} name
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['name'] = undefined;

/**
 * Defines the symbol of the non-fungible tokens.
 * @member {String} symbol
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['tokenId'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['type'] = undefined;






export default ListDepositAddressesRINonFungibleTokensInner;

