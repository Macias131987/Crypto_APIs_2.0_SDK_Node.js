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
 * The ListConfirmedTokensTransfersByAddressRI model module.
 * @module model/ListConfirmedTokensTransfersByAddressRI
 * @version 1.4.0
 */
class ListConfirmedTokensTransfersByAddressRI {
    /**
     * Constructs a new <code>ListConfirmedTokensTransfersByAddressRI</code>.
     * @alias module:model/ListConfirmedTokensTransfersByAddressRI
     * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
     * @param minedInBlockHeight {Number} Defines the block height in which this transaction was confirmed/mined.
     * @param recipientAddress {String} Defines the address to which the recipient receives the transferred tokens.
     * @param senderAddress {String} Defines the address from which the sender transfers tokens.
     * @param tokenDecimals {Number} Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
     * @param tokenName {String} Defines the token's name as a string.
     * @param tokenSymbol {String} Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
     * @param tokenType {String} Defines the specific token type.
     * @param transactionHash {String} Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param transactionTimestamp {Number} Defines the specific time/date when the transaction was created in Unix Timestamp.
     */
    constructor(contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, transactionHash, transactionTimestamp) { 
        
        ListConfirmedTokensTransfersByAddressRI.initialize(this, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, transactionHash, transactionTimestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, transactionHash, transactionTimestamp) { 
        obj['contractAddress'] = contractAddress;
        obj['minedInBlockHeight'] = minedInBlockHeight;
        obj['recipientAddress'] = recipientAddress;
        obj['senderAddress'] = senderAddress;
        obj['tokenDecimals'] = tokenDecimals;
        obj['tokenName'] = tokenName;
        obj['tokenSymbol'] = tokenSymbol;
        obj['tokenType'] = tokenType;
        obj['transactionHash'] = transactionHash;
        obj['transactionTimestamp'] = transactionTimestamp;
    }

    /**
     * Constructs a <code>ListConfirmedTokensTransfersByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTokensTransfersByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTokensTransfersByAddressRI} The populated <code>ListConfirmedTokensTransfersByAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListConfirmedTokensTransfersByAddressRI();

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
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
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
        }
        return obj;
    }


}

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
ListConfirmedTokensTransfersByAddressRI.prototype['contractAddress'] = undefined;

/**
 * Defines the block height in which this transaction was confirmed/mined.
 * @member {Number} minedInBlockHeight
 */
ListConfirmedTokensTransfersByAddressRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Defines the address to which the recipient receives the transferred tokens.
 * @member {String} recipientAddress
 */
ListConfirmedTokensTransfersByAddressRI.prototype['recipientAddress'] = undefined;

/**
 * Defines the address from which the sender transfers tokens.
 * @member {String} senderAddress
 */
ListConfirmedTokensTransfersByAddressRI.prototype['senderAddress'] = undefined;

/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */
ListConfirmedTokensTransfersByAddressRI.prototype['tokenDecimals'] = undefined;

/**
 * Represents the unique token identifier.
 * @member {String} tokenId
 */
ListConfirmedTokensTransfersByAddressRI.prototype['tokenId'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} tokenName
 */
ListConfirmedTokensTransfersByAddressRI.prototype['tokenName'] = undefined;

/**
 * Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
 * @member {String} tokenSymbol
 */
ListConfirmedTokensTransfersByAddressRI.prototype['tokenSymbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} tokenType
 */
ListConfirmedTokensTransfersByAddressRI.prototype['tokenType'] = undefined;

/**
 * Defines the token amount of the transfer.
 * @member {String} tokensAmount
 */
ListConfirmedTokensTransfersByAddressRI.prototype['tokensAmount'] = undefined;

/**
 * Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} transactionHash
 */
ListConfirmedTokensTransfersByAddressRI.prototype['transactionHash'] = undefined;

/**
 * Defines the specific time/date when the transaction was created in Unix Timestamp.
 * @member {Number} transactionTimestamp
 */
ListConfirmedTokensTransfersByAddressRI.prototype['transactionTimestamp'] = undefined;






export default ListConfirmedTokensTransfersByAddressRI;

