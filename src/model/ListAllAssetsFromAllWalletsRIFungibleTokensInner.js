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
 * The ListAllAssetsFromAllWalletsRIFungibleTokensInner model module.
 * @module model/ListAllAssetsFromAllWalletsRIFungibleTokensInner
 * @version 1.7.3
 */
class ListAllAssetsFromAllWalletsRIFungibleTokensInner {
    /**
     * Constructs a new <code>ListAllAssetsFromAllWalletsRIFungibleTokensInner</code>.
     * @alias module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner
     * @param amount {String} Defines the amount of the fungible tokens.
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param symbol {String} Defines the symbol of the fungible tokens.
     * @param type {String} Defines the specific token type.
     */
    constructor(amount, blockchain, identifier, network, symbol, type) { 
        
        ListAllAssetsFromAllWalletsRIFungibleTokensInner.initialize(this, amount, blockchain, identifier, network, symbol, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, blockchain, identifier, network, symbol, type) { 
        obj['amount'] = amount;
        obj['blockchain'] = blockchain;
        obj['identifier'] = identifier;
        obj['network'] = network;
        obj['symbol'] = symbol;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ListAllAssetsFromAllWalletsRIFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner} The populated <code>ListAllAssetsFromAllWalletsRIFungibleTokensInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllAssetsFromAllWalletsRIFungibleTokensInner();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
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
 * @member {String} amount
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['amount'] = undefined;

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['blockchain'] = undefined;

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['network'] = undefined;

/**
 * Defines the symbol of the fungible tokens.
 * @member {String} symbol
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['type'] = undefined;






export default ListAllAssetsFromAllWalletsRIFungibleTokensInner;

