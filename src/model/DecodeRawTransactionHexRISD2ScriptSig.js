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
 * The DecodeRawTransactionHexRISD2ScriptSig model module.
 * @module model/DecodeRawTransactionHexRISD2ScriptSig
 * @version 1.5.0
 */
class DecodeRawTransactionHexRISD2ScriptSig {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISD2ScriptSig</code>.
     * Specifies the required signatures.
     * @alias module:model/DecodeRawTransactionHexRISD2ScriptSig
     */
    constructor() { 
        
        DecodeRawTransactionHexRISD2ScriptSig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISD2ScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISD2ScriptSig} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISD2ScriptSig} The populated <code>DecodeRawTransactionHexRISD2ScriptSig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISD2ScriptSig();

            if (data.hasOwnProperty('asm')) {
                obj['asm'] = ApiClient.convertToType(data['asm'], 'String');
            }
            if (data.hasOwnProperty('hex')) {
                obj['hex'] = ApiClient.convertToType(data['hex'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
 * @member {String} asm
 */
DecodeRawTransactionHexRISD2ScriptSig.prototype['asm'] = undefined;

/**
 * Represents the hex of the public key of the address.
 * @member {String} hex
 */
DecodeRawTransactionHexRISD2ScriptSig.prototype['hex'] = undefined;

/**
 * Represents the script type of the reference transaction identifier.
 * @member {String} type
 */
DecodeRawTransactionHexRISD2ScriptSig.prototype['type'] = undefined;






export default DecodeRawTransactionHexRISD2ScriptSig;

