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
 * The GetTransactionDetailsByTransactionIDRIBSZVJoinSplit model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplit
 * @version 1.4.0
 */
class GetTransactionDetailsByTransactionIDRIBSZVJoinSplit {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSZVJoinSplit</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplit
     * @param anchor {String} Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
     * @param cipherTexts {Array.<String>} 
     * @param commitments {Array.<String>} 
     * @param macs {Array.<String>} 
     * @param nullifiers {Array.<String>} 
     * @param oneTimePubKey {String} Defines the one time public key.
     * @param proof {String} Defines the proof.
     * @param randomSeed {String} Represents a 256-bit seed that must be chosen independently at random for each JoinSplit description.
     * @param vPubNew {String} Defines the value that the joinSplit transfer will insert into the transparent transaction value pool
     * @param vPubOld {String} Defines the value that the joinSplit transfer will remove from the transparent transaction value pool.
     */
    constructor(anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld) { 
        
        GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.initialize(this, anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld) { 
        obj['anchor'] = anchor;
        obj['cipherTexts'] = cipherTexts;
        obj['commitments'] = commitments;
        obj['macs'] = macs;
        obj['nullifiers'] = nullifiers;
        obj['oneTimePubKey'] = oneTimePubKey;
        obj['proof'] = proof;
        obj['randomSeed'] = randomSeed;
        obj['vPubNew'] = vPubNew;
        obj['vPubOld'] = vPubOld;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSZVJoinSplit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplit} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplit} The populated <code>GetTransactionDetailsByTransactionIDRIBSZVJoinSplit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDRIBSZVJoinSplit();

            if (data.hasOwnProperty('anchor')) {
                obj['anchor'] = ApiClient.convertToType(data['anchor'], 'String');
            }
            if (data.hasOwnProperty('cipherTexts')) {
                obj['cipherTexts'] = ApiClient.convertToType(data['cipherTexts'], ['String']);
            }
            if (data.hasOwnProperty('commitments')) {
                obj['commitments'] = ApiClient.convertToType(data['commitments'], ['String']);
            }
            if (data.hasOwnProperty('macs')) {
                obj['macs'] = ApiClient.convertToType(data['macs'], ['String']);
            }
            if (data.hasOwnProperty('nullifiers')) {
                obj['nullifiers'] = ApiClient.convertToType(data['nullifiers'], ['String']);
            }
            if (data.hasOwnProperty('oneTimePubKey')) {
                obj['oneTimePubKey'] = ApiClient.convertToType(data['oneTimePubKey'], 'String');
            }
            if (data.hasOwnProperty('proof')) {
                obj['proof'] = ApiClient.convertToType(data['proof'], 'String');
            }
            if (data.hasOwnProperty('randomSeed')) {
                obj['randomSeed'] = ApiClient.convertToType(data['randomSeed'], 'String');
            }
            if (data.hasOwnProperty('vPubNew')) {
                obj['vPubNew'] = ApiClient.convertToType(data['vPubNew'], 'String');
            }
            if (data.hasOwnProperty('vPubOld')) {
                obj['vPubOld'] = ApiClient.convertToType(data['vPubOld'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
 * @member {String} anchor
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['anchor'] = undefined;

/**
 * @member {Array.<String>} cipherTexts
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['cipherTexts'] = undefined;

/**
 * @member {Array.<String>} commitments
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['commitments'] = undefined;

/**
 * @member {Array.<String>} macs
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['macs'] = undefined;

/**
 * @member {Array.<String>} nullifiers
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['nullifiers'] = undefined;

/**
 * Defines the one time public key.
 * @member {String} oneTimePubKey
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['oneTimePubKey'] = undefined;

/**
 * Defines the proof.
 * @member {String} proof
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['proof'] = undefined;

/**
 * Represents a 256-bit seed that must be chosen independently at random for each JoinSplit description.
 * @member {String} randomSeed
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['randomSeed'] = undefined;

/**
 * Defines the value that the joinSplit transfer will insert into the transparent transaction value pool
 * @member {String} vPubNew
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['vPubNew'] = undefined;

/**
 * Defines the value that the joinSplit transfer will remove from the transparent transaction value pool.
 * @member {String} vPubOld
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.prototype['vPubOld'] = undefined;






export default GetTransactionDetailsByTransactionIDRIBSZVJoinSplit;

