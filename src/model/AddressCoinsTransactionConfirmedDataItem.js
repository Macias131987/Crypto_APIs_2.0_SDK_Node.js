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
import AddressCoinsTransactionConfirmedDataItemMinedInBlock from './AddressCoinsTransactionConfirmedDataItemMinedInBlock';

/**
 * The AddressCoinsTransactionConfirmedDataItem model module.
 * @module model/AddressCoinsTransactionConfirmedDataItem
 * @version 1.4.0
 */
class AddressCoinsTransactionConfirmedDataItem {
    /**
     * Constructs a new <code>AddressCoinsTransactionConfirmedDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/AddressCoinsTransactionConfirmedDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param address {String} Defines the specific address to which the coin transaction has been sent and is confirmed.
     * @param minedInBlock {module:model/AddressCoinsTransactionConfirmedDataItemMinedInBlock} 
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param amount {String} Defines the amount of coins sent with the confirmed transaction.
     * @param unit {String} Defines the unit of the transaction, e.g. BTC.
     * @param direction {module:model/AddressCoinsTransactionConfirmedDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
     */
    constructor(blockchain, network, address, minedInBlock, transactionId, amount, unit, direction) { 
        
        AddressCoinsTransactionConfirmedDataItem.initialize(this, blockchain, network, address, minedInBlock, transactionId, amount, unit, direction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, address, minedInBlock, transactionId, amount, unit, direction) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['address'] = address;
        obj['minedInBlock'] = minedInBlock;
        obj['transactionId'] = transactionId;
        obj['amount'] = amount;
        obj['unit'] = unit;
        obj['direction'] = direction;
    }

    /**
     * Constructs a <code>AddressCoinsTransactionConfirmedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCoinsTransactionConfirmedDataItem} obj Optional instance to populate.
     * @return {module:model/AddressCoinsTransactionConfirmedDataItem} The populated <code>AddressCoinsTransactionConfirmedDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressCoinsTransactionConfirmedDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('minedInBlock')) {
                obj['minedInBlock'] = AddressCoinsTransactionConfirmedDataItemMinedInBlock.constructFromObject(data['minedInBlock']);
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
AddressCoinsTransactionConfirmedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
AddressCoinsTransactionConfirmedDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address to which the coin transaction has been sent and is confirmed.
 * @member {String} address
 */
AddressCoinsTransactionConfirmedDataItem.prototype['address'] = undefined;

/**
 * @member {module:model/AddressCoinsTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
AddressCoinsTransactionConfirmedDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
AddressCoinsTransactionConfirmedDataItem.prototype['transactionId'] = undefined;

/**
 * Defines the amount of coins sent with the confirmed transaction.
 * @member {String} amount
 */
AddressCoinsTransactionConfirmedDataItem.prototype['amount'] = undefined;

/**
 * Defines the unit of the transaction, e.g. BTC.
 * @member {String} unit
 */
AddressCoinsTransactionConfirmedDataItem.prototype['unit'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressCoinsTransactionConfirmedDataItem.DirectionEnum} direction
 */
AddressCoinsTransactionConfirmedDataItem.prototype['direction'] = undefined;





/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressCoinsTransactionConfirmedDataItem['DirectionEnum'] = {

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



export default AddressCoinsTransactionConfirmedDataItem;

