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
 * The GetBlockDetailsByBlockHashFromCallbackRIBST model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRIBST
 * @version 1.7.3
 */
class GetBlockDetailsByBlockHashFromCallbackRIBST {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHashFromCallbackRIBST</code>.
     * Tron
     * @alias module:model/GetBlockDetailsByBlockHashFromCallbackRIBST
     * @param bandwidthUsed {String} Represents the bandwidth used for the transaction.
     * @param burnedTrx {String} Represents the block burned TRX.
     * @param energyUsed {String} Representats the used energy for the transaction.
     * @param size {Number} Represents the total size of the block in Bytes.
     */
    constructor(bandwidthUsed, burnedTrx, energyUsed, size) { 
        
        GetBlockDetailsByBlockHashFromCallbackRIBST.initialize(this, bandwidthUsed, burnedTrx, energyUsed, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bandwidthUsed, burnedTrx, energyUsed, size) { 
        obj['bandwidthUsed'] = bandwidthUsed;
        obj['burnedTrx'] = burnedTrx;
        obj['energyUsed'] = energyUsed;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashFromCallbackRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashFromCallbackRIBST} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashFromCallbackRIBST} The populated <code>GetBlockDetailsByBlockHashFromCallbackRIBST</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHashFromCallbackRIBST();

            if (data.hasOwnProperty('bandwidthUsed')) {
                obj['bandwidthUsed'] = ApiClient.convertToType(data['bandwidthUsed'], 'String');
            }
            if (data.hasOwnProperty('burnedTrx')) {
                obj['burnedTrx'] = ApiClient.convertToType(data['burnedTrx'], 'String');
            }
            if (data.hasOwnProperty('energyUsed')) {
                obj['energyUsed'] = ApiClient.convertToType(data['energyUsed'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the bandwidth used for the transaction.
 * @member {String} bandwidthUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBST.prototype['bandwidthUsed'] = undefined;

/**
 * Represents the block burned TRX.
 * @member {String} burnedTrx
 */
GetBlockDetailsByBlockHashFromCallbackRIBST.prototype['burnedTrx'] = undefined;

/**
 * Representats the used energy for the transaction.
 * @member {String} energyUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBST.prototype['energyUsed'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBST.prototype['size'] = undefined;






export default GetBlockDetailsByBlockHashFromCallbackRIBST;

