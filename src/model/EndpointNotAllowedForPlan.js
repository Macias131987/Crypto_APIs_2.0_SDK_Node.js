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
import BannedIpAddressDetails from './BannedIpAddressDetails';

/**
 * The EndpointNotAllowedForPlan model module.
 * @module model/EndpointNotAllowedForPlan
 * @version 1.4.0
 */
class EndpointNotAllowedForPlan {
    /**
     * Constructs a new <code>EndpointNotAllowedForPlan</code>.
     * endpoint_not_allowed_for_plan
     * @alias module:model/EndpointNotAllowedForPlan
     * @param code {String} Specifies an error code, e.g. error 404.
     * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
     */
    constructor(code, message) { 
        
        EndpointNotAllowedForPlan.initialize(this, code, message);
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
     * Constructs a <code>EndpointNotAllowedForPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointNotAllowedForPlan} obj Optional instance to populate.
     * @return {module:model/EndpointNotAllowedForPlan} The populated <code>EndpointNotAllowedForPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EndpointNotAllowedForPlan();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [BannedIpAddressDetails]);
            }
        }
        return obj;
    }


}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
EndpointNotAllowedForPlan.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
EndpointNotAllowedForPlan.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */
EndpointNotAllowedForPlan.prototype['details'] = undefined;






export default EndpointNotAllowedForPlan;

