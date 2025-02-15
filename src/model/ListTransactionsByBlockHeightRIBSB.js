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
import ListTransactionsByBlockHashRIBSBVinInner from './ListTransactionsByBlockHashRIBSBVinInner';
import ListTransactionsByBlockHeightRIBSBVoutInner from './ListTransactionsByBlockHeightRIBSBVoutInner';

/**
 * The ListTransactionsByBlockHeightRIBSB model module.
 * @module model/ListTransactionsByBlockHeightRIBSB
 * @version 1.7.3
 */
class ListTransactionsByBlockHeightRIBSB {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSB</code>.
     * Bitcoin
     * @alias module:model/ListTransactionsByBlockHeightRIBSB
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents the transaction version number.
     * @param vin {Array.<module:model/ListTransactionsByBlockHashRIBSBVinInner>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByBlockHeightRIBSBVoutInner>} Represents the transaction outputs.
     */
    constructor(locktime, size, vSize, version, vin, vout) { 
        
        ListTransactionsByBlockHeightRIBSB.initialize(this, locktime, size, vSize, version, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSB} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSB} The populated <code>ListTransactionsByBlockHeightRIBSB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSB();

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHashRIBSBVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHeightRIBSBVoutInner]);
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSB.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSB.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByBlockHeightRIBSB.prototype['vSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSB.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSB.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSBVoutInner>} vout
 */
ListTransactionsByBlockHeightRIBSB.prototype['vout'] = undefined;






export default ListTransactionsByBlockHeightRIBSB;

