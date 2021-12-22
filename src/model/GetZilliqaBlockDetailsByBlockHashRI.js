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
 * The GetZilliqaBlockDetailsByBlockHashRI model module.
 * @module model/GetZilliqaBlockDetailsByBlockHashRI
 * @version 1.4.0
 */
class GetZilliqaBlockDetailsByBlockHashRI {
    /**
     * Constructs a new <code>GetZilliqaBlockDetailsByBlockHashRI</code>.
     * @alias module:model/GetZilliqaBlockDetailsByBlockHashRI
     * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param difficulty {String} Defines how difficult it is for a specific miner to mine the block.
     * @param dsBlock {Number} Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
     * @param dsDifficulty {String} Defines how difficult it is to mine the dsBlocks.
     * @param dsLeader {String} Represents a part of the DS Committee which leads the consensus protocol for the epoch.
     * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
     * @param gasUsed {Number} Defines how much of the gas for the block has been used.
     * @param microBlocks {Array.<String>} 
     * @param nextBlockHash {String} Defines the hash of the next block from the specific blockchain.
     * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
     * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
     */
    constructor(blockHeight, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks, nextBlockHash, previousBlockHash, timestamp, transactionsCount) { 
        
        GetZilliqaBlockDetailsByBlockHashRI.initialize(this, blockHeight, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks, nextBlockHash, previousBlockHash, timestamp, transactionsCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockHeight, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks, nextBlockHash, previousBlockHash, timestamp, transactionsCount) { 
        obj['blockHeight'] = blockHeight;
        obj['difficulty'] = difficulty;
        obj['dsBlock'] = dsBlock;
        obj['dsDifficulty'] = dsDifficulty;
        obj['dsLeader'] = dsLeader;
        obj['gasLimit'] = gasLimit;
        obj['gasUsed'] = gasUsed;
        obj['microBlocks'] = microBlocks;
        obj['nextBlockHash'] = nextBlockHash;
        obj['previousBlockHash'] = previousBlockHash;
        obj['timestamp'] = timestamp;
        obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetZilliqaBlockDetailsByBlockHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetZilliqaBlockDetailsByBlockHashRI} obj Optional instance to populate.
     * @return {module:model/GetZilliqaBlockDetailsByBlockHashRI} The populated <code>GetZilliqaBlockDetailsByBlockHashRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetZilliqaBlockDetailsByBlockHashRI();

            if (data.hasOwnProperty('blockHeight')) {
                obj['blockHeight'] = ApiClient.convertToType(data['blockHeight'], 'Number');
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'String');
            }
            if (data.hasOwnProperty('dsBlock')) {
                obj['dsBlock'] = ApiClient.convertToType(data['dsBlock'], 'Number');
            }
            if (data.hasOwnProperty('dsDifficulty')) {
                obj['dsDifficulty'] = ApiClient.convertToType(data['dsDifficulty'], 'String');
            }
            if (data.hasOwnProperty('dsLeader')) {
                obj['dsLeader'] = ApiClient.convertToType(data['dsLeader'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'Number');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'Number');
            }
            if (data.hasOwnProperty('microBlocks')) {
                obj['microBlocks'] = ApiClient.convertToType(data['microBlocks'], ['String']);
            }
            if (data.hasOwnProperty('nextBlockHash')) {
                obj['nextBlockHash'] = ApiClient.convertToType(data['nextBlockHash'], 'String');
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
        }
        return obj;
    }


}

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['blockHeight'] = undefined;

/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['difficulty'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['dsLeader'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['gasUsed'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['microBlocks'] = undefined;

/**
 * Defines the hash of the next block from the specific blockchain.
 * @member {String} nextBlockHash
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['nextBlockHash'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['timestamp'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['transactionsCount'] = undefined;






export default GetZilliqaBlockDetailsByBlockHashRI;

