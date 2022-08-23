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
import ListInternalTransactionDetailsByTransactionHashRI from './ListInternalTransactionDetailsByTransactionHashRI';

/**
 * The ListInternalTransactionDetailsByTransactionHashRData model module.
 * @module model/ListInternalTransactionDetailsByTransactionHashRData
 * @version 1.7.3
 */
class ListInternalTransactionDetailsByTransactionHashRData {
    /**
     * Constructs a new <code>ListInternalTransactionDetailsByTransactionHashRData</code>.
     * @alias module:model/ListInternalTransactionDetailsByTransactionHashRData
     * @param limit {Number} Defines how many items should be returned in the response per page basis.
     * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
     * @param total {Number} Defines the total number of items returned in the response.
     * @param items {Array.<module:model/ListInternalTransactionDetailsByTransactionHashRI>} 
     */
    constructor(limit, offset, total, items) { 
        
        ListInternalTransactionDetailsByTransactionHashRData.initialize(this, limit, offset, total, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit, offset, total, items) { 
        obj['limit'] = limit;
        obj['offset'] = offset;
        obj['total'] = total;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>ListInternalTransactionDetailsByTransactionHashRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListInternalTransactionDetailsByTransactionHashRData} obj Optional instance to populate.
     * @return {module:model/ListInternalTransactionDetailsByTransactionHashRData} The populated <code>ListInternalTransactionDetailsByTransactionHashRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListInternalTransactionDetailsByTransactionHashRData();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ListInternalTransactionDetailsByTransactionHashRI]);
            }
        }
        return obj;
    }


}

/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */
ListInternalTransactionDetailsByTransactionHashRData.prototype['limit'] = undefined;

/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */
ListInternalTransactionDetailsByTransactionHashRData.prototype['offset'] = undefined;

/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */
ListInternalTransactionDetailsByTransactionHashRData.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/ListInternalTransactionDetailsByTransactionHashRI>} items
 */
ListInternalTransactionDetailsByTransactionHashRData.prototype['items'] = undefined;






export default ListInternalTransactionDetailsByTransactionHashRData;

