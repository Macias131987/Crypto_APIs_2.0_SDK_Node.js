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
import ConfirmedTokensTransactionForCertainAmountOrHigherBep20 from './ConfirmedTokensTransactionForCertainAmountOrHigherBep20';
import ConfirmedTokensTransactionForCertainAmountOrHigherErc20 from './ConfirmedTokensTransactionForCertainAmountOrHigherErc20';
import ConfirmedTokensTransactionForCertainAmountOrHigherErc721 from './ConfirmedTokensTransactionForCertainAmountOrHigherErc721';

/**
 * The ConfirmedTokensTransactionForCertainAmountOrHigherToken model module.
 * @module model/ConfirmedTokensTransactionForCertainAmountOrHigherToken
 * @version 1.7.3
 */
class ConfirmedTokensTransactionForCertainAmountOrHigherToken {
    /**
     * Constructs a new <code>ConfirmedTokensTransactionForCertainAmountOrHigherToken</code>.
     * @alias module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken
     * @implements module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc20
     * @implements module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721
     * @implements module:model/ConfirmedTokensTransactionForCertainAmountOrHigherBep20
     * @param name {String} Specifies the name of the token.
     * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
     * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
     * @param contractAddress {String} Defines the address of the contract.
     * @param tokenId {String} Specifies the ID of the token.
     */
    constructor(name, symbol, amount, contractAddress, tokenId) { 
        ConfirmedTokensTransactionForCertainAmountOrHigherErc20.initialize(this, name, symbol, amount, contractAddress);ConfirmedTokensTransactionForCertainAmountOrHigherErc721.initialize(this, name, symbol, tokenId, contractAddress);ConfirmedTokensTransactionForCertainAmountOrHigherBep20.initialize(this, name, symbol, amount, contractAddress);
        ConfirmedTokensTransactionForCertainAmountOrHigherToken.initialize(this, name, symbol, amount, contractAddress, tokenId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, symbol, amount, contractAddress, tokenId) { 
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['amount'] = amount;
        obj['contractAddress'] = contractAddress;
        obj['tokenId'] = tokenId;
    }

    /**
     * Constructs a <code>ConfirmedTokensTransactionForCertainAmountOrHigherToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} obj Optional instance to populate.
     * @return {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} The populated <code>ConfirmedTokensTransactionForCertainAmountOrHigherToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfirmedTokensTransactionForCertainAmountOrHigherToken();
            ConfirmedTokensTransactionForCertainAmountOrHigherErc20.constructFromObject(data, obj);
            ConfirmedTokensTransactionForCertainAmountOrHigherErc721.constructFromObject(data, obj);
            ConfirmedTokensTransactionForCertainAmountOrHigherBep20.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('decimals')) {
                obj['decimals'] = ApiClient.convertToType(data['decimals'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the name of the token.
 * @member {String} name
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['amount'] = undefined;

/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['tokenId'] = undefined;


// Implement ConfirmedTokensTransactionForCertainAmountOrHigherErc20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc20.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc20.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc20.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc20.prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc20.prototype['contractAddress'] = undefined;
// Implement ConfirmedTokensTransactionForCertainAmountOrHigherErc721 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['symbol'] = undefined;
/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['contractAddress'] = undefined;
// Implement ConfirmedTokensTransactionForCertainAmountOrHigherBep20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
ConfirmedTokensTransactionForCertainAmountOrHigherBep20.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
ConfirmedTokensTransactionForCertainAmountOrHigherBep20.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
ConfirmedTokensTransactionForCertainAmountOrHigherBep20.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
ConfirmedTokensTransactionForCertainAmountOrHigherBep20.prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
ConfirmedTokensTransactionForCertainAmountOrHigherBep20.prototype['contractAddress'] = undefined;




export default ConfirmedTokensTransactionForCertainAmountOrHigherToken;

