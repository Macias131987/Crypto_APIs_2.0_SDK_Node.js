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
import AddressTokensTransactionUnconfirmedErc20 from './AddressTokensTransactionUnconfirmedErc20';
import AddressTokensTransactionUnconfirmedErc721 from './AddressTokensTransactionUnconfirmedErc721';
import AddressTokensTransactionUnconfirmedOmni from './AddressTokensTransactionUnconfirmedOmni';

/**
 * The AddressTokensTransactionUnconfirmedToken model module.
 * @module model/AddressTokensTransactionUnconfirmedToken
 * @version 1.5.0
 */
class AddressTokensTransactionUnconfirmedToken {
    /**
     * Constructs a new <code>AddressTokensTransactionUnconfirmedToken</code>.
     * @alias module:model/AddressTokensTransactionUnconfirmedToken
     * @implements module:model/AddressTokensTransactionUnconfirmedErc20
     * @implements module:model/AddressTokensTransactionUnconfirmedErc721
     * @implements module:model/AddressTokensTransactionUnconfirmedOmni
     * @param name {String} Specifies the name of the token.
     * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
     * @param amount {String} Defines the amount of tokens sent with the transaction that is pending confirmation.
     * @param contractAddress {String} Specifies the address of the contract.
     * @param tokenId {String} Specifies the unique ID of the token.
     * @param propertyId {String} Defines the ID of the property for Omni Layer.
     * @param transactionType {String} Defines the type of the transaction made.
     * @param createdByTransactionId {String} The transaction ID used to create the token.
     */
    constructor(name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) { 
        AddressTokensTransactionUnconfirmedErc20.initialize(this, name, symbol, amount, contractAddress);AddressTokensTransactionUnconfirmedErc721.initialize(this, name, symbol, tokenId, contractAddress);AddressTokensTransactionUnconfirmedOmni.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
        AddressTokensTransactionUnconfirmedToken.initialize(this, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) { 
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['amount'] = amount;
        obj['contractAddress'] = contractAddress;
        obj['tokenId'] = tokenId;
        obj['propertyId'] = propertyId;
        obj['transactionType'] = transactionType;
        obj['createdByTransactionId'] = createdByTransactionId;
    }

    /**
     * Constructs a <code>AddressTokensTransactionUnconfirmedToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionUnconfirmedToken} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionUnconfirmedToken} The populated <code>AddressTokensTransactionUnconfirmedToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionUnconfirmedToken();
            AddressTokensTransactionUnconfirmedErc20.constructFromObject(data, obj);
            AddressTokensTransactionUnconfirmedErc721.constructFromObject(data, obj);
            AddressTokensTransactionUnconfirmedOmni.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('createdByTransactionId')) {
                obj['createdByTransactionId'] = ApiClient.convertToType(data['createdByTransactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionUnconfirmedToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionUnconfirmedToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
AddressTokensTransactionUnconfirmedToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */
AddressTokensTransactionUnconfirmedToken.prototype['amount'] = undefined;

/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionUnconfirmedToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the unique ID of the token.
 * @member {String} tokenId
 */
AddressTokensTransactionUnconfirmedToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionUnconfirmedToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction made.
 * @member {String} transactionType
 */
AddressTokensTransactionUnconfirmedToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionUnconfirmedToken.prototype['createdByTransactionId'] = undefined;


// Implement AddressTokensTransactionUnconfirmedErc20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionUnconfirmedErc20.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionUnconfirmedErc20.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
AddressTokensTransactionUnconfirmedErc20.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */
AddressTokensTransactionUnconfirmedErc20.prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionUnconfirmedErc20.prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionUnconfirmedErc721 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionUnconfirmedErc721.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionUnconfirmedErc721.prototype['symbol'] = undefined;
/**
 * Specifies the unique ID of the token.
 * @member {String} tokenId
 */
AddressTokensTransactionUnconfirmedErc721.prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionUnconfirmedErc721.prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionUnconfirmedOmni interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionUnconfirmedOmni.prototype['name'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionUnconfirmedOmni.prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction made.
 * @member {String} transactionType
 */
AddressTokensTransactionUnconfirmedOmni.prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionUnconfirmedOmni.prototype['createdByTransactionId'] = undefined;
/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */
AddressTokensTransactionUnconfirmedOmni.prototype['amount'] = undefined;




export default AddressTokensTransactionUnconfirmedToken;

