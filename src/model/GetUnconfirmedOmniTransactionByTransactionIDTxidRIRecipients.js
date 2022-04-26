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

/**
 * The GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients model module.
 * @module model/GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients
 * @version 1.5.0
 */
class GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients {
    /**
     * Constructs a new <code>GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients</code>.
     * @alias module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients
     * @param address {String} Represents the hash of the address that receives the funds.
     * @param amount {String} Defines the amount of the received funds as a string.
     */
    constructor(address, amount) { 
        
        GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients.initialize(this, address, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount) { 
        obj['address'] = address;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients} obj Optional instance to populate.
     * @return {module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients} The populated <code>GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the hash of the address that receives the funds.
 * @member {String} address
 */
GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients.prototype['address'] = undefined;

/**
 * Defines the amount of the received funds as a string.
 * @member {String} amount
 */
GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients.prototype['amount'] = undefined;






export default GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients;

