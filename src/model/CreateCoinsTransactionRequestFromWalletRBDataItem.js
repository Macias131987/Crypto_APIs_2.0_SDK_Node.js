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
import CreateCoinsTransactionRequestFromWalletRBDataItemRecipients from './CreateCoinsTransactionRequestFromWalletRBDataItemRecipients';

/**
 * The CreateCoinsTransactionRequestFromWalletRBDataItem model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRBDataItem
 * @version 1.2.1
 */
class CreateCoinsTransactionRequestFromWalletRBDataItem {
    /**
     * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code>.
     * @alias module:model/CreateCoinsTransactionRequestFromWalletRBDataItem
     * @param feePriority {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
     * @param recipients {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipients>} Defines the destination of the transaction, whether it is incoming or outgoing.
     */
    constructor(feePriority, recipients) { 
        
        CreateCoinsTransactionRequestFromWalletRBDataItem.initialize(this, feePriority, recipients);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feePriority, recipients) { 
        obj['feePriority'] = feePriority;
        obj['recipients'] = recipients;
    }

    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem} The populated <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCoinsTransactionRequestFromWalletRBDataItem();

            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('feePriority')) {
                obj['feePriority'] = ApiClient.convertToType(data['feePriority'], 'String');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [CreateCoinsTransactionRequestFromWalletRBDataItemRecipients]);
            }
        }
        return obj;
    }


}

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
 * @member {String} callbackSecretKey
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Verified URL for sending callbacks
 * @member {String} callbackUrl
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} feePriority
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['feePriority'] = undefined;

/**
 * Defines the destination of the transaction, whether it is incoming or outgoing.
 * @member {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipients>} recipients
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['recipients'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateCoinsTransactionRequestFromWalletRBDataItem['FeePriorityEnum'] = {

    /**
     * value: "slow"
     * @const
     */
    "slow": "slow",

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "fast"
     * @const
     */
    "fast": "fast"
};



export default CreateCoinsTransactionRequestFromWalletRBDataItem;

