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
import NewConfirmedTokenTransactionsForSpecificAmountRI from './NewConfirmedTokenTransactionsForSpecificAmountRI';

/**
 * The NewConfirmedTokenTransactionsForSpecificAmountRData model module.
 * @module model/NewConfirmedTokenTransactionsForSpecificAmountRData
 * @version 1.7.3
 */
class NewConfirmedTokenTransactionsForSpecificAmountRData {
    /**
     * Constructs a new <code>NewConfirmedTokenTransactionsForSpecificAmountRData</code>.
     * @alias module:model/NewConfirmedTokenTransactionsForSpecificAmountRData
     * @param item {module:model/NewConfirmedTokenTransactionsForSpecificAmountRI} 
     */
    constructor(item) { 
        
        NewConfirmedTokenTransactionsForSpecificAmountRData.initialize(this, item);
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
     * Constructs a <code>NewConfirmedTokenTransactionsForSpecificAmountRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokenTransactionsForSpecificAmountRData} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokenTransactionsForSpecificAmountRData} The populated <code>NewConfirmedTokenTransactionsForSpecificAmountRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedTokenTransactionsForSpecificAmountRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = NewConfirmedTokenTransactionsForSpecificAmountRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewConfirmedTokenTransactionsForSpecificAmountRI} item
 */
NewConfirmedTokenTransactionsForSpecificAmountRData.prototype['item'] = undefined;






export default NewConfirmedTokenTransactionsForSpecificAmountRData;

