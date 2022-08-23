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
import CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner from './CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner';

/**
 * The CreateCoinsTransactionRequestFromWalletRBDataItem model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRBDataItem
 * @version 1.7.3
 */
class CreateCoinsTransactionRequestFromWalletRBDataItem {
    /**
     * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code>.
     * @alias module:model/CreateCoinsTransactionRequestFromWalletRBDataItem
     * @param feePriority {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
     * @param recipients {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner>} Defines the destination of the transaction, whether it is incoming or outgoing.
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
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('prepareStrategy')) {
                obj['prepareStrategy'] = ApiClient.convertToType(data['prepareStrategy'], 'String');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner]);
            }
        }
        return obj;
    }


}

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} feePriority
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['note'] = undefined;

/**
 * Refers to a model of a UTXO spending strategy, where customers can choose how to spend their transaction outputs from multiple Bitcoin addresses. Two options available - \"minimize-dust\" (select lower amounts from multiple addresses) or \"optimize-size\" (select higher amounts from less addresses).
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.PrepareStrategyEnum} prepareStrategy
 * @default 'minimize-dust'
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['prepareStrategy'] = 'minimize-dust';

/**
 * Defines the destination of the transaction, whether it is incoming or outgoing.
 * @member {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner>} recipients
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


/**
 * Allowed values for the <code>prepareStrategy</code> property.
 * @enum {String}
 * @readonly
 */
CreateCoinsTransactionRequestFromWalletRBDataItem['PrepareStrategyEnum'] = {

    /**
     * value: "minimize-dust"
     * @const
     */
    "minimize-dust": "minimize-dust",

    /**
     * value: "optimize-size"
     * @const
     */
    "optimize-size": "optimize-size"
};



export default CreateCoinsTransactionRequestFromWalletRBDataItem;

