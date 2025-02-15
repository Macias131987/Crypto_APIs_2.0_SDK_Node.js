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
import ListInternalTransactionDetailsByTransactionHashE400 from './ListInternalTransactionDetailsByTransactionHashE400';

/**
 * The ListInternalTransactionDetailsByTransactionHash400Response model module.
 * @module model/ListInternalTransactionDetailsByTransactionHash400Response
 * @version 1.7.3
 */
class ListInternalTransactionDetailsByTransactionHash400Response {
    /**
     * Constructs a new <code>ListInternalTransactionDetailsByTransactionHash400Response</code>.
     * @alias module:model/ListInternalTransactionDetailsByTransactionHash400Response
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
     * @param error {module:model/ListInternalTransactionDetailsByTransactionHashE400} 
     */
    constructor(apiVersion, requestId, error) { 
        
        ListInternalTransactionDetailsByTransactionHash400Response.initialize(this, apiVersion, requestId, error);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiVersion, requestId, error) { 
        obj['apiVersion'] = apiVersion;
        obj['requestId'] = requestId;
        obj['error'] = error;
    }

    /**
     * Constructs a <code>ListInternalTransactionDetailsByTransactionHash400Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListInternalTransactionDetailsByTransactionHash400Response} obj Optional instance to populate.
     * @return {module:model/ListInternalTransactionDetailsByTransactionHash400Response} The populated <code>ListInternalTransactionDetailsByTransactionHash400Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListInternalTransactionDetailsByTransactionHash400Response();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ListInternalTransactionDetailsByTransactionHashE400.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
ListInternalTransactionDetailsByTransactionHash400Response.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
ListInternalTransactionDetailsByTransactionHash400Response.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
ListInternalTransactionDetailsByTransactionHash400Response.prototype['context'] = undefined;

/**
 * @member {module:model/ListInternalTransactionDetailsByTransactionHashE400} error
 */
ListInternalTransactionDetailsByTransactionHash400Response.prototype['error'] = undefined;






export default ListInternalTransactionDetailsByTransactionHash400Response;

