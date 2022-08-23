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
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue
 * @version 1.7.3
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue
     * @param amount {String} Defines the amount of the value.
     * @param unit {String} Defines the unit of the value.
     */
    constructor(amount, unit) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue.initialize(this, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, unit) { 
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the amount of the value.
 * @member {String} amount
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue.prototype['amount'] = undefined;

/**
 * Defines the unit of the value.
 * @member {String} unit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue.prototype['unit'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue;

