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
import GetLatestMinedXRPRippleBlockRITotalCoins from './GetLatestMinedXRPRippleBlockRITotalCoins';
import GetLatestMinedXRPRippleBlockRITotalFees from './GetLatestMinedXRPRippleBlockRITotalFees';

/**
 * The GetLatestMinedXRPRippleBlockRI model module.
 * @module model/GetLatestMinedXRPRippleBlockRI
 * @version 1.5.0
 */
class GetLatestMinedXRPRippleBlockRI {
    /**
     * Constructs a new <code>GetLatestMinedXRPRippleBlockRI</code>.
     * @alias module:model/GetLatestMinedXRPRippleBlockRI
     * @param blockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
     * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
     * @param totalCoins {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} 
     * @param totalFees {module:model/GetLatestMinedXRPRippleBlockRITotalFees} 
     */
    constructor(blockHash, blockHeight, previousBlockHash, timestamp, transactionsCount, totalCoins, totalFees) { 
        
        GetLatestMinedXRPRippleBlockRI.initialize(this, blockHash, blockHeight, previousBlockHash, timestamp, transactionsCount, totalCoins, totalFees);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockHash, blockHeight, previousBlockHash, timestamp, transactionsCount, totalCoins, totalFees) { 
        obj['blockHash'] = blockHash;
        obj['blockHeight'] = blockHeight;
        obj['previousBlockHash'] = previousBlockHash;
        obj['timestamp'] = timestamp;
        obj['transactionsCount'] = transactionsCount;
        obj['totalCoins'] = totalCoins;
        obj['totalFees'] = totalFees;
    }

    /**
     * Constructs a <code>GetLatestMinedXRPRippleBlockRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLatestMinedXRPRippleBlockRI} obj Optional instance to populate.
     * @return {module:model/GetLatestMinedXRPRippleBlockRI} The populated <code>GetLatestMinedXRPRippleBlockRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLatestMinedXRPRippleBlockRI();

            if (data.hasOwnProperty('blockHash')) {
                obj['blockHash'] = ApiClient.convertToType(data['blockHash'], 'String');
            }
            if (data.hasOwnProperty('blockHeight')) {
                obj['blockHeight'] = ApiClient.convertToType(data['blockHeight'], 'Number');
            }
            if (data.hasOwnProperty('previousBlockHash')) {
                obj['previousBlockHash'] = ApiClient.convertToType(data['previousBlockHash'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('totalCoins')) {
                obj['totalCoins'] = GetLatestMinedXRPRippleBlockRITotalCoins.constructFromObject(data['totalCoins']);
            }
            if (data.hasOwnProperty('totalFees')) {
                obj['totalFees'] = GetLatestMinedXRPRippleBlockRITotalFees.constructFromObject(data['totalFees']);
            }
        }
        return obj;
    }


}

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} blockHash
 */
GetLatestMinedXRPRippleBlockRI.prototype['blockHash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */
GetLatestMinedXRPRippleBlockRI.prototype['blockHeight'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
GetLatestMinedXRPRippleBlockRI.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
GetLatestMinedXRPRippleBlockRI.prototype['timestamp'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetLatestMinedXRPRippleBlockRI.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */
GetLatestMinedXRPRippleBlockRI.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */
GetLatestMinedXRPRippleBlockRI.prototype['totalFees'] = undefined;






export default GetLatestMinedXRPRippleBlockRI;

