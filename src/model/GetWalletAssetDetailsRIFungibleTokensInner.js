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
 * The GetWalletAssetDetailsRIFungibleTokensInner model module.
 * @module model/GetWalletAssetDetailsRIFungibleTokensInner
 * @version 1.7.3
 */
class GetWalletAssetDetailsRIFungibleTokensInner {
    /**
     * Constructs a new <code>GetWalletAssetDetailsRIFungibleTokensInner</code>.
     * @alias module:model/GetWalletAssetDetailsRIFungibleTokensInner
     * @param confirmedAmount {String} Defines the amount of the fungible tokens.
     * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
     * @param symbol {String} Defines the symbol of the fungible tokens.
     * @param type {String} Defines the specific token type.
     */
    constructor(confirmedAmount, identifier, symbol, type) { 
        
        GetWalletAssetDetailsRIFungibleTokensInner.initialize(this, confirmedAmount, identifier, symbol, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, confirmedAmount, identifier, symbol, type) { 
        obj['confirmedAmount'] = confirmedAmount;
        obj['identifier'] = identifier;
        obj['symbol'] = symbol;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>GetWalletAssetDetailsRIFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletAssetDetailsRIFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/GetWalletAssetDetailsRIFungibleTokensInner} The populated <code>GetWalletAssetDetailsRIFungibleTokensInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletAssetDetailsRIFungibleTokensInner();

            if (data.hasOwnProperty('confirmedAmount')) {
                obj['confirmedAmount'] = ApiClient.convertToType(data['confirmedAmount'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
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
 * Defines the amount of the fungible tokens.
 * @member {String} confirmedAmount
 */
GetWalletAssetDetailsRIFungibleTokensInner.prototype['confirmedAmount'] = undefined;

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */
GetWalletAssetDetailsRIFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Defines the symbol of the fungible tokens.
 * @member {String} symbol
 */
GetWalletAssetDetailsRIFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
GetWalletAssetDetailsRIFungibleTokensInner.prototype['type'] = undefined;






export default GetWalletAssetDetailsRIFungibleTokensInner;

