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
import AddressTokensTransactionUnconfirmedToken from './AddressTokensTransactionUnconfirmedToken';

/**
 * The AddressTokensTransactionUnconfirmedDataItem model module.
 * @module model/AddressTokensTransactionUnconfirmedDataItem
 * @version 1.7.3
 */
class AddressTokensTransactionUnconfirmedDataItem {
    /**
     * Constructs a new <code>AddressTokensTransactionUnconfirmedDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/AddressTokensTransactionUnconfirmedDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param address {String} Defines the specific address to which the token transaction has been sent and is pending confirmation.
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param tokenType {module:model/AddressTokensTransactionUnconfirmedDataItem.TokenTypeEnum} Defines the type of token sent with the transaction, e.g. ERC 20.
     * @param token {module:model/AddressTokensTransactionUnconfirmedToken} 
     * @param direction {module:model/AddressTokensTransactionUnconfirmedDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
     * @param firstSeenInMempoolTimestamp {Number} Defines the exact time the transaction has been first accepted into the mempool to await confirmation as timestamp.
     */
    constructor(blockchain, network, address, transactionId, tokenType, token, direction, firstSeenInMempoolTimestamp) { 
        
        AddressTokensTransactionUnconfirmedDataItem.initialize(this, blockchain, network, address, transactionId, tokenType, token, direction, firstSeenInMempoolTimestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, address, transactionId, tokenType, token, direction, firstSeenInMempoolTimestamp) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['address'] = address;
        obj['transactionId'] = transactionId;
        obj['tokenType'] = tokenType;
        obj['token'] = token;
        obj['direction'] = direction;
        obj['firstSeenInMempoolTimestamp'] = firstSeenInMempoolTimestamp;
    }

    /**
     * Constructs a <code>AddressTokensTransactionUnconfirmedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionUnconfirmedDataItem} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionUnconfirmedDataItem} The populated <code>AddressTokensTransactionUnconfirmedDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionUnconfirmedDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = AddressTokensTransactionUnconfirmedToken.constructFromObject(data['token']);
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('firstSeenInMempoolTimestamp')) {
                obj['firstSeenInMempoolTimestamp'] = ApiClient.convertToType(data['firstSeenInMempoolTimestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
AddressTokensTransactionUnconfirmedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
AddressTokensTransactionUnconfirmedDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address to which the token transaction has been sent and is pending confirmation.
 * @member {String} address
 */
AddressTokensTransactionUnconfirmedDataItem.prototype['address'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
AddressTokensTransactionUnconfirmedDataItem.prototype['transactionId'] = undefined;

/**
 * Defines the type of token sent with the transaction, e.g. ERC 20.
 * @member {module:model/AddressTokensTransactionUnconfirmedDataItem.TokenTypeEnum} tokenType
 */
AddressTokensTransactionUnconfirmedDataItem.prototype['tokenType'] = undefined;

/**
 * @member {module:model/AddressTokensTransactionUnconfirmedToken} token
 */
AddressTokensTransactionUnconfirmedDataItem.prototype['token'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressTokensTransactionUnconfirmedDataItem.DirectionEnum} direction
 */
AddressTokensTransactionUnconfirmedDataItem.prototype['direction'] = undefined;

/**
 * Defines the exact time the transaction has been first accepted into the mempool to await confirmation as timestamp.
 * @member {Number} firstSeenInMempoolTimestamp
 */
AddressTokensTransactionUnconfirmedDataItem.prototype['firstSeenInMempoolTimestamp'] = undefined;





/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */
AddressTokensTransactionUnconfirmedDataItem['TokenTypeEnum'] = {

    /**
     * value: "ERC-20"
     * @const
     */
    "ERC-20": "ERC-20",

    /**
     * value: "ERC-721"
     * @const
     */
    "ERC-721": "ERC-721",

    /**
     * value: "OMNI"
     * @const
     */
    "OMNI": "OMNI"
};


/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressTokensTransactionUnconfirmedDataItem['DirectionEnum'] = {

    /**
     * value: "incoming"
     * @const
     */
    "incoming": "incoming",

    /**
     * value: "outgoing"
     * @const
     */
    "outgoing": "outgoing"
};



export default AddressTokensTransactionUnconfirmedDataItem;

