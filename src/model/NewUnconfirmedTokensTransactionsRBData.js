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
import NewUnconfirmedTokensTransactionsRBDataItem from './NewUnconfirmedTokensTransactionsRBDataItem';

/**
 * The NewUnconfirmedTokensTransactionsRBData model module.
 * @module model/NewUnconfirmedTokensTransactionsRBData
 * @version 1.2.1
 */
class NewUnconfirmedTokensTransactionsRBData {
    /**
     * Constructs a new <code>NewUnconfirmedTokensTransactionsRBData</code>.
     * @alias module:model/NewUnconfirmedTokensTransactionsRBData
     * @param item {module:model/NewUnconfirmedTokensTransactionsRBDataItem} 
     */
    constructor(item) { 
        
        NewUnconfirmedTokensTransactionsRBData.initialize(this, item);
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
     * Constructs a <code>NewUnconfirmedTokensTransactionsRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUnconfirmedTokensTransactionsRBData} obj Optional instance to populate.
     * @return {module:model/NewUnconfirmedTokensTransactionsRBData} The populated <code>NewUnconfirmedTokensTransactionsRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewUnconfirmedTokensTransactionsRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = NewUnconfirmedTokensTransactionsRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewUnconfirmedTokensTransactionsRBDataItem} item
 */
NewUnconfirmedTokensTransactionsRBData.prototype['item'] = undefined;






export default NewUnconfirmedTokensTransactionsRBData;

