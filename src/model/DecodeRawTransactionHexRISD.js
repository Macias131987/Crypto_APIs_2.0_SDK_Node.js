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
import DecodeRawTransactionHexRISDVin from './DecodeRawTransactionHexRISDVin';
import DecodeRawTransactionHexRISDVout from './DecodeRawTransactionHexRISDVout';

/**
 * The DecodeRawTransactionHexRISD model module.
 * @module model/DecodeRawTransactionHexRISD
 * @version 1.5.0
 */
class DecodeRawTransactionHexRISD {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISD</code>.
     * Dash
     * @alias module:model/DecodeRawTransactionHexRISD
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents transaction version number.
     * @param vin {Array.<module:model/DecodeRawTransactionHexRISDVin>} Represents the transaction inputs.
     * @param vout {Array.<module:model/DecodeRawTransactionHexRISDVout>} Represents the transaction outputs.
     */
    constructor(locktime, transactionHash, vSize, version, vin, vout) { 
        
        DecodeRawTransactionHexRISD.initialize(this, locktime, transactionHash, vSize, version, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, transactionHash, vSize, version, vin, vout) { 
        obj['locktime'] = locktime;
        obj['transactionHash'] = transactionHash;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISD} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISD} The populated <code>DecodeRawTransactionHexRISD</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISD();

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [DecodeRawTransactionHexRISDVin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [DecodeRawTransactionHexRISDVout]);
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISD.prototype['locktime'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISD.prototype['transactionHash'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRISD.prototype['vSize'] = undefined;

/**
 * Represents transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISD.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISDVin>} vin
 */
DecodeRawTransactionHexRISD.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISDVout>} vout
 */
DecodeRawTransactionHexRISD.prototype['vout'] = undefined;

/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRISD.prototype['weight'] = undefined;






export default DecodeRawTransactionHexRISD;

