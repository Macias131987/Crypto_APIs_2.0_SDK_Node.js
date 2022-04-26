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
 * The CreateCoinsTransactionRequestFromAddressRIRecipients model module.
 * @module model/CreateCoinsTransactionRequestFromAddressRIRecipients
 * @version 1.5.0
 */
class CreateCoinsTransactionRequestFromAddressRIRecipients {
    /**
     * Constructs a new <code>CreateCoinsTransactionRequestFromAddressRIRecipients</code>.
     * @alias module:model/CreateCoinsTransactionRequestFromAddressRIRecipients
     * @param address {String} Defines the destination address.
     * @param amount {String} Defines the amount sent to the destination address.
     */
    constructor(address, amount) { 
        
        CreateCoinsTransactionRequestFromAddressRIRecipients.initialize(this, address, amount);
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
     * Constructs a <code>CreateCoinsTransactionRequestFromAddressRIRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromAddressRIRecipients} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromAddressRIRecipients} The populated <code>CreateCoinsTransactionRequestFromAddressRIRecipients</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCoinsTransactionRequestFromAddressRIRecipients();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('addressTag')) {
                obj['addressTag'] = ApiClient.convertToType(data['addressTag'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('classicAddress')) {
                obj['classicAddress'] = ApiClient.convertToType(data['classicAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the destination address.
 * @member {String} address
 */
CreateCoinsTransactionRequestFromAddressRIRecipients.prototype['address'] = undefined;

/**
 * Defines a specific Tag that is an additional XRP address feature. It helps identify a transaction recipient beyond a wallet address. The tag that was encoded into the x-Address along with the Source Classic Address.
 * @member {Number} addressTag
 */
CreateCoinsTransactionRequestFromAddressRIRecipients.prototype['addressTag'] = undefined;

/**
 * Defines the amount sent to the destination address.
 * @member {String} amount
 */
CreateCoinsTransactionRequestFromAddressRIRecipients.prototype['amount'] = undefined;

/**
 * Represents the public address, which is a compressed and shortened form of a public key. The classic address is shown when the source address is an x-Address.
 * @member {String} classicAddress
 */
CreateCoinsTransactionRequestFromAddressRIRecipients.prototype['classicAddress'] = undefined;






export default CreateCoinsTransactionRequestFromAddressRIRecipients;

