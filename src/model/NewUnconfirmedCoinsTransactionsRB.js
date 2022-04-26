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
import NewUnconfirmedCoinsTransactionsRBData from './NewUnconfirmedCoinsTransactionsRBData';

/**
 * The NewUnconfirmedCoinsTransactionsRB model module.
 * @module model/NewUnconfirmedCoinsTransactionsRB
 * @version 1.5.0
 */
class NewUnconfirmedCoinsTransactionsRB {
    /**
     * Constructs a new <code>NewUnconfirmedCoinsTransactionsRB</code>.
     * @alias module:model/NewUnconfirmedCoinsTransactionsRB
     * @param data {module:model/NewUnconfirmedCoinsTransactionsRBData} 
     */
    constructor(data) { 
        
        NewUnconfirmedCoinsTransactionsRB.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>NewUnconfirmedCoinsTransactionsRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUnconfirmedCoinsTransactionsRB} obj Optional instance to populate.
     * @return {module:model/NewUnconfirmedCoinsTransactionsRB} The populated <code>NewUnconfirmedCoinsTransactionsRB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewUnconfirmedCoinsTransactionsRB();

            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = NewUnconfirmedCoinsTransactionsRBData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
NewUnconfirmedCoinsTransactionsRB.prototype['context'] = undefined;

/**
 * @member {module:model/NewUnconfirmedCoinsTransactionsRBData} data
 */
NewUnconfirmedCoinsTransactionsRB.prototype['data'] = undefined;






export default NewUnconfirmedCoinsTransactionsRB;

