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
import NewUnconfirmedCoinsTransactionsRI from './NewUnconfirmedCoinsTransactionsRI';

/**
 * The NewUnconfirmedCoinsTransactionsRData model module.
 * @module model/NewUnconfirmedCoinsTransactionsRData
 * @version 1.2.1
 */
class NewUnconfirmedCoinsTransactionsRData {
    /**
     * Constructs a new <code>NewUnconfirmedCoinsTransactionsRData</code>.
     * @alias module:model/NewUnconfirmedCoinsTransactionsRData
     * @param item {module:model/NewUnconfirmedCoinsTransactionsRI} 
     */
    constructor(item) { 
        
        NewUnconfirmedCoinsTransactionsRData.initialize(this, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, item) { 
        obj['item'] = item;
    }

    /**
     * Constructs a <code>NewUnconfirmedCoinsTransactionsRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUnconfirmedCoinsTransactionsRData} obj Optional instance to populate.
     * @return {module:model/NewUnconfirmedCoinsTransactionsRData} The populated <code>NewUnconfirmedCoinsTransactionsRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewUnconfirmedCoinsTransactionsRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = NewUnconfirmedCoinsTransactionsRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewUnconfirmedCoinsTransactionsRI} item
 */
NewUnconfirmedCoinsTransactionsRData.prototype['item'] = undefined;






export default NewUnconfirmedCoinsTransactionsRData;

