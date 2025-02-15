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
 * The BlockMinedDataItem model module.
 * @module model/BlockMinedDataItem
 * @version 1.7.3
 */
class BlockMinedDataItem {
    /**
     * Constructs a new <code>BlockMinedDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/BlockMinedDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param height {Number} Defines the number of blocks in the blockchain preceding this specific block.
     * @param hash {String} Represents the hash of the block's header, i.e. an output that has a fixed length.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in seconds since Unix Epoch time.
     */
    constructor(blockchain, network, height, hash, timestamp) { 
        
        BlockMinedDataItem.initialize(this, blockchain, network, height, hash, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, height, hash, timestamp) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['height'] = height;
        obj['hash'] = hash;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>BlockMinedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockMinedDataItem} obj Optional instance to populate.
     * @return {module:model/BlockMinedDataItem} The populated <code>BlockMinedDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockMinedDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
BlockMinedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
BlockMinedDataItem.prototype['network'] = undefined;

/**
 * Defines the number of blocks in the blockchain preceding this specific block.
 * @member {Number} height
 */
BlockMinedDataItem.prototype['height'] = undefined;

/**
 * Represents the hash of the block's header, i.e. an output that has a fixed length.
 * @member {String} hash
 */
BlockMinedDataItem.prototype['hash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in seconds since Unix Epoch time.
 * @member {Number} timestamp
 */
BlockMinedDataItem.prototype['timestamp'] = undefined;






export default BlockMinedDataItem;

