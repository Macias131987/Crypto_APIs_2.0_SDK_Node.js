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
import DecodeRawTransactionHexRISBVinInnerScriptSig from './DecodeRawTransactionHexRISBVinInnerScriptSig';

/**
 * The DecodeRawTransactionHexRISB2VinInner model module.
 * @module model/DecodeRawTransactionHexRISB2VinInner
 * @version 1.7.3
 */
class DecodeRawTransactionHexRISB2VinInner {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISB2VinInner</code>.
     * @alias module:model/DecodeRawTransactionHexRISB2VinInner
     * @param scriptSig {module:model/DecodeRawTransactionHexRISBVinInnerScriptSig} 
     */
    constructor(scriptSig) { 
        
        DecodeRawTransactionHexRISB2VinInner.initialize(this, scriptSig);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, scriptSig) { 
        obj['scriptSig'] = scriptSig;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISB2VinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISB2VinInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISB2VinInner} The populated <code>DecodeRawTransactionHexRISB2VinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISB2VinInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('inputHash')) {
                obj['inputHash'] = ApiClient.convertToType(data['inputHash'], 'String');
            }
            if (data.hasOwnProperty('outputIndex')) {
                obj['outputIndex'] = ApiClient.convertToType(data['outputIndex'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = DecodeRawTransactionHexRISBVinInnerScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
            }
            if (data.hasOwnProperty('txinwitness')) {
                obj['txinwitness'] = ApiClient.convertToType(data['txinwitness'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Represents the address which send/receive the amount.
 * @member {String} address
 */
DecodeRawTransactionHexRISB2VinInner.prototype['address'] = undefined;

/**
 * Represents the transaction inputs' indentifier.
 * @member {String} inputHash
 */
DecodeRawTransactionHexRISB2VinInner.prototype['inputHash'] = undefined;

/**
 * Defines the output index of a transaction.
 * @member {String} outputIndex
 */
DecodeRawTransactionHexRISB2VinInner.prototype['outputIndex'] = undefined;

/**
 * @member {module:model/DecodeRawTransactionHexRISBVinInnerScriptSig} scriptSig
 */
DecodeRawTransactionHexRISB2VinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
DecodeRawTransactionHexRISB2VinInner.prototype['sequence'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
DecodeRawTransactionHexRISB2VinInner.prototype['txinwitness'] = undefined;






export default DecodeRawTransactionHexRISB2VinInner;

