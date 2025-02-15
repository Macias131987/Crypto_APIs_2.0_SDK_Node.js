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
import BannedIpAddressDetailsInner from './BannedIpAddressDetailsInner';
import InvalidApiKey from './InvalidApiKey';
import MissingApiKey from './MissingApiKey';

/**
 * The NewConfirmedInternalTransactionsForSpecificAmountE401 model module.
 * @module model/NewConfirmedInternalTransactionsForSpecificAmountE401
 * @version 1.7.3
 */
class NewConfirmedInternalTransactionsForSpecificAmountE401 {
    /**
     * Constructs a new <code>NewConfirmedInternalTransactionsForSpecificAmountE401</code>.
     * @alias module:model/NewConfirmedInternalTransactionsForSpecificAmountE401
     * @implements module:model/MissingApiKey
     * @implements module:model/InvalidApiKey
     * @param code {String} Specifies an error code, e.g. error 404.
     * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
     */
    constructor(code, message) { 
        MissingApiKey.initialize(this, code, message);InvalidApiKey.initialize(this, code, message);
        NewConfirmedInternalTransactionsForSpecificAmountE401.initialize(this, code, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, message) { 
        obj['code'] = code;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>NewConfirmedInternalTransactionsForSpecificAmountE401</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsForSpecificAmountE401} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsForSpecificAmountE401} The populated <code>NewConfirmedInternalTransactionsForSpecificAmountE401</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedInternalTransactionsForSpecificAmountE401();
            MissingApiKey.constructFromObject(data, obj);
            InvalidApiKey.constructFromObject(data, obj);

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [BannedIpAddressDetailsInner]);
            }
        }
        return obj;
    }


}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
NewConfirmedInternalTransactionsForSpecificAmountE401.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
NewConfirmedInternalTransactionsForSpecificAmountE401.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
NewConfirmedInternalTransactionsForSpecificAmountE401.prototype['details'] = undefined;


// Implement MissingApiKey interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
MissingApiKey.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
MissingApiKey.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
MissingApiKey.prototype['details'] = undefined;
// Implement InvalidApiKey interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
InvalidApiKey.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
InvalidApiKey.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
InvalidApiKey.prototype['details'] = undefined;




export default NewConfirmedInternalTransactionsForSpecificAmountE401;

