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
import TransactionRequestFailDataItem from './TransactionRequestFailDataItem';

/**
 * The TransactionRequestFailData model module.
 * @module model/TransactionRequestFailData
 * @version 1.4.0
 */
class TransactionRequestFailData {
    /**
     * Constructs a new <code>TransactionRequestFailData</code>.
     * Specifies all data, as attributes, included into the callback notification, which depends on the &#x60;event&#x60;.
     * @alias module:model/TransactionRequestFailData
     * @param product {String} Represents the Crypto APIs 2.0 product which sends the callback.
     * @param event {String} Defines the specific event, for which a callback subscription is set.
     * @param item {module:model/TransactionRequestFailDataItem} 
     */
    constructor(product, event, item) { 
        
        TransactionRequestFailData.initialize(this, product, event, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, product, event, item) { 
        obj['product'] = product;
        obj['event'] = event;
        obj['item'] = item;
    }

    /**
     * Constructs a <code>TransactionRequestFailData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestFailData} obj Optional instance to populate.
     * @return {module:model/TransactionRequestFailData} The populated <code>TransactionRequestFailData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRequestFailData();

            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = TransactionRequestFailDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * Represents the Crypto APIs 2.0 product which sends the callback.
 * @member {String} product
 */
TransactionRequestFailData.prototype['product'] = undefined;

/**
 * Defines the specific event, for which a callback subscription is set.
 * @member {String} event
 */
TransactionRequestFailData.prototype['event'] = undefined;

/**
 * @member {module:model/TransactionRequestFailDataItem} item
 */
TransactionRequestFailData.prototype['item'] = undefined;






export default TransactionRequestFailData;

