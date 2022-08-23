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
import ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner from './ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner';

/**
 * The GetBlockchainEventSubscriptionDetailsByReferenceIDRI model module.
 * @module model/GetBlockchainEventSubscriptionDetailsByReferenceIDRI
 * @version 1.7.3
 */
class GetBlockchainEventSubscriptionDetailsByReferenceIDRI {
    /**
     * Constructs a new <code>GetBlockchainEventSubscriptionDetailsByReferenceIDRI</code>.
     * @alias module:model/GetBlockchainEventSubscriptionDetailsByReferenceIDRI
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
     * @param createdTimestamp {Number} Defines the specific time/date when the subscription was created in Unix Timestamp.
     * @param eventType {String} Defines the type of the specific event available for the customer to subscribe to for callback notification.
     * @param isActive {Boolean} Defines whether the subscription is active or not. Set as boolean.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
     */
    constructor(blockchain, callbackUrl, createdTimestamp, eventType, isActive, network, referenceId) { 
        
        GetBlockchainEventSubscriptionDetailsByReferenceIDRI.initialize(this, blockchain, callbackUrl, createdTimestamp, eventType, isActive, network, referenceId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, callbackUrl, createdTimestamp, eventType, isActive, network, referenceId) { 
        obj['blockchain'] = blockchain;
        obj['callbackUrl'] = callbackUrl;
        obj['createdTimestamp'] = createdTimestamp;
        obj['eventType'] = eventType;
        obj['isActive'] = isActive;
        obj['network'] = network;
        obj['referenceId'] = referenceId;
    }

    /**
     * Constructs a <code>GetBlockchainEventSubscriptionDetailsByReferenceIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockchainEventSubscriptionDetailsByReferenceIDRI} obj Optional instance to populate.
     * @return {module:model/GetBlockchainEventSubscriptionDetailsByReferenceIDRI} The populated <code>GetBlockchainEventSubscriptionDetailsByReferenceIDRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockchainEventSubscriptionDetailsByReferenceIDRI();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('confirmationsCount')) {
                obj['confirmationsCount'] = ApiClient.convertToType(data['confirmationsCount'], 'Number');
            }
            if (data.hasOwnProperty('createdTimestamp')) {
                obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('deactivationReasons')) {
                obj['deactivationReasons'] = ApiClient.convertToType(data['deactivationReasons'], [ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner]);
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the address of the transaction.
 * @member {String} address
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['address'] = undefined;

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['blockchain'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['confirmationsCount'] = undefined;

/**
 * Defines the specific time/date when the subscription was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['createdTimestamp'] = undefined;

/**
 * Represents the deactivation reason details, available when a blockchain event subscription has status isActive - false.
 * @member {Array.<module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner>} deactivationReasons
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['deactivationReasons'] = undefined;

/**
 * Defines the type of the specific event available for the customer to subscribe to for callback notification.
 * @member {String} eventType
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['eventType'] = undefined;

/**
 * Defines whether the subscription is active or not. Set as boolean.
 * @member {Boolean} isActive
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['isActive'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['network'] = undefined;

/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['referenceId'] = undefined;

/**
 * Represents the unique identification string that defines the transaction.
 * @member {String} transactionId
 */
GetBlockchainEventSubscriptionDetailsByReferenceIDRI.prototype['transactionId'] = undefined;






export default GetBlockchainEventSubscriptionDetailsByReferenceIDRI;

