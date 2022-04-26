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
import ListInternalTransactionsByAddressRI from './ListInternalTransactionsByAddressRI';

/**
 * The ListInternalTransactionsByAddressRData model module.
 * @module model/ListInternalTransactionsByAddressRData
 * @version 1.5.0
 */
class ListInternalTransactionsByAddressRData {
    /**
     * Constructs a new <code>ListInternalTransactionsByAddressRData</code>.
     * @alias module:model/ListInternalTransactionsByAddressRData
     * @param limit {Number} Defines how many items should be returned in the response per page basis.
     * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
     * @param total {Number} Defines the total number of items returned in the response.
     * @param items {Array.<module:model/ListInternalTransactionsByAddressRI>} 
     */
    constructor(limit, offset, total, items) { 
        
        ListInternalTransactionsByAddressRData.initialize(this, limit, offset, total, items);
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
     * Constructs a <code>ListInternalTransactionsByAddressRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListInternalTransactionsByAddressRData} obj Optional instance to populate.
     * @return {module:model/ListInternalTransactionsByAddressRData} The populated <code>ListInternalTransactionsByAddressRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListInternalTransactionsByAddressRData();

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
                obj['items'] = ApiClient.convertToType(data['items'], [ListInternalTransactionsByAddressRI]);
            }
        }
        return obj;
    }


}

/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */
ListInternalTransactionsByAddressRData.prototype['limit'] = undefined;

/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */
ListInternalTransactionsByAddressRData.prototype['offset'] = undefined;

/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */
ListInternalTransactionsByAddressRData.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/ListInternalTransactionsByAddressRI>} items
 */
ListInternalTransactionsByAddressRData.prototype['items'] = undefined;






export default ListInternalTransactionsByAddressRData;

