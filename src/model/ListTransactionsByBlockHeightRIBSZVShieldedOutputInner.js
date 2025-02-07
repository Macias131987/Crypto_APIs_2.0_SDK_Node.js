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
 * The ListTransactionsByBlockHeightRIBSZVShieldedOutputInner model module.
 * @module model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner
 * @version 1.7.3
 */
class ListTransactionsByBlockHeightRIBSZVShieldedOutputInner {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSZVShieldedOutputInner</code>.
     * @alias module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner
     * @param cmu {String} Represents the 𝑢-coordinate of the note commitment for the output note.
     * @param cv {String} Defines a value commitment to the value of the input note.
     * @param encCipherText {String} Represents a ciphertext component for the encrypted output note.
     * @param ephemeralKey {String} Represents an encoding of an ephemeral Jubjub public key.
     * @param outCipherText {String} Represents a ciphertext component that allows the holder of the outgoing cipher key to recover the diversified transmission key pkd and ephemeral private key esk, hence the entire note plaintext.
     * @param proof {String} Represents the proof
     */
    constructor(cmu, cv, encCipherText, ephemeralKey, outCipherText, proof) { 
        
        ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.initialize(this, cmu, cv, encCipherText, ephemeralKey, outCipherText, proof);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cmu, cv, encCipherText, ephemeralKey, outCipherText, proof) { 
        obj['cmu'] = cmu;
        obj['cv'] = cv;
        obj['encCipherText'] = encCipherText;
        obj['ephemeralKey'] = ephemeralKey;
        obj['outCipherText'] = outCipherText;
        obj['proof'] = proof;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSZVShieldedOutputInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner} The populated <code>ListTransactionsByBlockHeightRIBSZVShieldedOutputInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSZVShieldedOutputInner();

            if (data.hasOwnProperty('cmu')) {
                obj['cmu'] = ApiClient.convertToType(data['cmu'], 'String');
            }
            if (data.hasOwnProperty('cv')) {
                obj['cv'] = ApiClient.convertToType(data['cv'], 'String');
            }
            if (data.hasOwnProperty('encCipherText')) {
                obj['encCipherText'] = ApiClient.convertToType(data['encCipherText'], 'String');
            }
            if (data.hasOwnProperty('ephemeralKey')) {
                obj['ephemeralKey'] = ApiClient.convertToType(data['ephemeralKey'], 'String');
            }
            if (data.hasOwnProperty('outCipherText')) {
                obj['outCipherText'] = ApiClient.convertToType(data['outCipherText'], 'String');
            }
            if (data.hasOwnProperty('proof')) {
                obj['proof'] = ApiClient.convertToType(data['proof'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the 𝑢-coordinate of the note commitment for the output note.
 * @member {String} cmu
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['cmu'] = undefined;

/**
 * Defines a value commitment to the value of the input note.
 * @member {String} cv
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['cv'] = undefined;

/**
 * Represents a ciphertext component for the encrypted output note.
 * @member {String} encCipherText
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['encCipherText'] = undefined;

/**
 * Represents an encoding of an ephemeral Jubjub public key.
 * @member {String} ephemeralKey
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['ephemeralKey'] = undefined;

/**
 * Represents a ciphertext component that allows the holder of the outgoing cipher key to recover the diversified transmission key pkd and ephemeral private key esk, hence the entire note plaintext.
 * @member {String} outCipherText
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['outCipherText'] = undefined;

/**
 * Represents the proof
 * @member {String} proof
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['proof'] = undefined;






export default ListTransactionsByBlockHeightRIBSZVShieldedOutputInner;

