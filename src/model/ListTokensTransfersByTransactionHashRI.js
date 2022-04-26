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
import ListTokensTransfersByTransactionHashRITransactionFee from './ListTokensTransfersByTransactionHashRITransactionFee';

/**
 * The ListTokensTransfersByTransactionHashRI model module.
 * @module model/ListTokensTransfersByTransactionHashRI
 * @version 1.5.0
 */
class ListTokensTransfersByTransactionHashRI {
    /**
     * Constructs a new <code>ListTokensTransfersByTransactionHashRI</code>.
     * @alias module:model/ListTokensTransfersByTransactionHashRI
     * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
     * @param minedInBlockHeight {Number} Defines the block height in which this transaction was confirmed/mined.
     * @param recipientAddress {String} Defines the address to which the recipient receives the transferred tokens.
     * @param senderAddress {String} Defines the address from which the sender transfers tokens.
     * @param tokenDecimals {Number} Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
     * @param tokenName {String} Defines the token's name as a string.
     * @param tokenSymbol {String} Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
     * @param tokenType {String} Defines the specific token type.
     * @param tokensAmount {String} Defines the token amount of the transfer.
     * @param transactionHash {String} Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param transactionTimestamp {Number} Defines the specific time/date when the transaction was created in Unix Timestamp.
     * @param transactionFee {module:model/ListTokensTransfersByTransactionHashRITransactionFee} 
     */
    constructor(contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, tokensAmount, transactionHash, transactionTimestamp, transactionFee) { 
        
        ListTokensTransfersByTransactionHashRI.initialize(this, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, tokensAmount, transactionHash, transactionTimestamp, transactionFee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, tokensAmount, transactionHash, transactionTimestamp, transactionFee) { 
        obj['contractAddress'] = contractAddress;
        obj['minedInBlockHeight'] = minedInBlockHeight;
        obj['recipientAddress'] = recipientAddress;
        obj['senderAddress'] = senderAddress;
        obj['tokenDecimals'] = tokenDecimals;
        obj['tokenName'] = tokenName;
        obj['tokenSymbol'] = tokenSymbol;
        obj['tokenType'] = tokenType;
        obj['tokensAmount'] = tokensAmount;
        obj['transactionHash'] = transactionHash;
        obj['transactionTimestamp'] = transactionTimestamp;
        obj['transactionFee'] = transactionFee;
    }

    /**
     * Constructs a <code>ListTokensTransfersByTransactionHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensTransfersByTransactionHashRI} obj Optional instance to populate.
     * @return {module:model/ListTokensTransfersByTransactionHashRI} The populated <code>ListTokensTransfersByTransactionHashRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTokensTransfersByTransactionHashRI();

            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('minedInBlockHeight')) {
                obj['minedInBlockHeight'] = ApiClient.convertToType(data['minedInBlockHeight'], 'Number');
            }
            if (data.hasOwnProperty('recipientAddress')) {
                obj['recipientAddress'] = ApiClient.convertToType(data['recipientAddress'], 'String');
            }
            if (data.hasOwnProperty('senderAddress')) {
                obj['senderAddress'] = ApiClient.convertToType(data['senderAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenDecimals')) {
                obj['tokenDecimals'] = ApiClient.convertToType(data['tokenDecimals'], 'Number');
            }
            if (data.hasOwnProperty('tokenName')) {
                obj['tokenName'] = ApiClient.convertToType(data['tokenName'], 'String');
            }
            if (data.hasOwnProperty('tokenSymbol')) {
                obj['tokenSymbol'] = ApiClient.convertToType(data['tokenSymbol'], 'String');
            }
            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('tokensAmount')) {
                obj['tokensAmount'] = ApiClient.convertToType(data['tokensAmount'], 'String');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('transactionTimestamp')) {
                obj['transactionTimestamp'] = ApiClient.convertToType(data['transactionTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionFee')) {
                obj['transactionFee'] = ListTokensTransfersByTransactionHashRITransactionFee.constructFromObject(data['transactionFee']);
            }
        }
        return obj;
    }


}

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
ListTokensTransfersByTransactionHashRI.prototype['contractAddress'] = undefined;

/**
 * Defines the block height in which this transaction was confirmed/mined.
 * @member {Number} minedInBlockHeight
 */
ListTokensTransfersByTransactionHashRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Defines the address to which the recipient receives the transferred tokens.
 * @member {String} recipientAddress
 */
ListTokensTransfersByTransactionHashRI.prototype['recipientAddress'] = undefined;

/**
 * Defines the address from which the sender transfers tokens.
 * @member {String} senderAddress
 */
ListTokensTransfersByTransactionHashRI.prototype['senderAddress'] = undefined;

/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */
ListTokensTransfersByTransactionHashRI.prototype['tokenDecimals'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} tokenName
 */
ListTokensTransfersByTransactionHashRI.prototype['tokenName'] = undefined;

/**
 * Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
 * @member {String} tokenSymbol
 */
ListTokensTransfersByTransactionHashRI.prototype['tokenSymbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} tokenType
 */
ListTokensTransfersByTransactionHashRI.prototype['tokenType'] = undefined;

/**
 * Defines the token amount of the transfer.
 * @member {String} tokensAmount
 */
ListTokensTransfersByTransactionHashRI.prototype['tokensAmount'] = undefined;

/**
 * Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} transactionHash
 */
ListTokensTransfersByTransactionHashRI.prototype['transactionHash'] = undefined;

/**
 * Defines the specific time/date when the transaction was created in Unix Timestamp.
 * @member {Number} transactionTimestamp
 */
ListTokensTransfersByTransactionHashRI.prototype['transactionTimestamp'] = undefined;

/**
 * @member {module:model/ListTokensTransfersByTransactionHashRITransactionFee} transactionFee
 */
ListTokensTransfersByTransactionHashRI.prototype['transactionFee'] = undefined;






export default ListTokensTransfersByTransactionHashRI;

