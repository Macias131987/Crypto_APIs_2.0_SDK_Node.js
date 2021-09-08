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
import GetTransactionDetailsByTransactionIDRIBSDScriptPubKey from './GetTransactionDetailsByTransactionIDRIBSDScriptPubKey';

/**
 * The GetTransactionDetailsByTransactionIDRIBSDVout model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSDVout
 * @version 1.2.1
 */
class GetTransactionDetailsByTransactionIDRIBSDVout {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSDVout</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDRIBSDVout
     * @param isSpent {Boolean} Defines whether the output is spent or not.
     * @param scriptPubKey {module:model/GetTransactionDetailsByTransactionIDRIBSDScriptPubKey} 
     * @param value {String} Represents the sent/received amount.
     */
    constructor(isSpent, scriptPubKey, value) { 
        
        GetTransactionDetailsByTransactionIDRIBSDVout.initialize(this, isSpent, scriptPubKey, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isSpent, scriptPubKey, value) { 
        obj['isSpent'] = isSpent;
        obj['scriptPubKey'] = scriptPubKey;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSDVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSDVout} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSDVout} The populated <code>GetTransactionDetailsByTransactionIDRIBSDVout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDRIBSDVout();

            if (data.hasOwnProperty('isSpent')) {
                obj['isSpent'] = ApiClient.convertToType(data['isSpent'], 'Boolean');
            }
            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = GetTransactionDetailsByTransactionIDRIBSDScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */
GetTransactionDetailsByTransactionIDRIBSDVout.prototype['isSpent'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSDScriptPubKey} scriptPubKey
 */
GetTransactionDetailsByTransactionIDRIBSDVout.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
GetTransactionDetailsByTransactionIDRIBSDVout.prototype['value'] = undefined;






export default GetTransactionDetailsByTransactionIDRIBSDVout;

