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
 * The ListDepositAddressesRIFungibleTokensInner model module.
 * @module model/ListDepositAddressesRIFungibleTokensInner
 * @version 1.7.3
 */
class ListDepositAddressesRIFungibleTokensInner {
    /**
     * Constructs a new <code>ListDepositAddressesRIFungibleTokensInner</code>.
     * @alias module:model/ListDepositAddressesRIFungibleTokensInner
     * @param amount {String} Defines the amount of the fungible tokens.
     * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
     * @param name {String} Defines the token's name as a string.
     * @param symbol {String} Defines the symbol of the fungible tokens.
     * @param tokenDecimals {Number} Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
     * @param type {String} Defines the specific token type.
     */
    constructor(amount, identifier, name, symbol, tokenDecimals, type) { 
        
        ListDepositAddressesRIFungibleTokensInner.initialize(this, amount, identifier, name, symbol, tokenDecimals, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, identifier, name, symbol, tokenDecimals, type) { 
        obj['amount'] = amount;
        obj['identifier'] = identifier;
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['tokenDecimals'] = tokenDecimals;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ListDepositAddressesRIFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDepositAddressesRIFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListDepositAddressesRIFungibleTokensInner} The populated <code>ListDepositAddressesRIFungibleTokensInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDepositAddressesRIFungibleTokensInner();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
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
            if (data.hasOwnProperty('tokenDecimals')) {
                obj['tokenDecimals'] = ApiClient.convertToType(data['tokenDecimals'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the amount of the fungible tokens.
 * @member {String} amount
 */
ListDepositAddressesRIFungibleTokensInner.prototype['amount'] = undefined;

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */
ListDepositAddressesRIFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} name
 */
ListDepositAddressesRIFungibleTokensInner.prototype['name'] = undefined;

/**
 * Defines the symbol of the fungible tokens.
 * @member {String} symbol
 */
ListDepositAddressesRIFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */
ListDepositAddressesRIFungibleTokensInner.prototype['tokenDecimals'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListDepositAddressesRIFungibleTokensInner.prototype['type'] = undefined;






export default ListDepositAddressesRIFungibleTokensInner;

