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

/**
 * The TransactionRequestRejectionDataItem model module.
 * @module model/TransactionRequestRejectionDataItem
 * @version 1.7.3
 */
class TransactionRequestRejectionDataItem {
    /**
     * Constructs a new <code>TransactionRequestRejectionDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/TransactionRequestRejectionDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param requiredApprovals {Number} The required number of approvals needed to approve the transaction.
     * @param requiredRejections {Number} The required number of rejections needed to reject the transaction.
     * @param currentApprovals {Number} The current number of approvals given for the transaction.
     * @param currentRejections {Number} The current number of rejections given for the transaction.
     */
    constructor(blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections) { 
        
        TransactionRequestRejectionDataItem.initialize(this, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['requiredApprovals'] = requiredApprovals;
        obj['requiredRejections'] = requiredRejections;
        obj['currentApprovals'] = currentApprovals;
        obj['currentRejections'] = currentRejections;
    }

    /**
     * Constructs a <code>TransactionRequestRejectionDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestRejectionDataItem} obj Optional instance to populate.
     * @return {module:model/TransactionRequestRejectionDataItem} The populated <code>TransactionRequestRejectionDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRequestRejectionDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('requiredApprovals')) {
                obj['requiredApprovals'] = ApiClient.convertToType(data['requiredApprovals'], 'Number');
            }
            if (data.hasOwnProperty('requiredRejections')) {
                obj['requiredRejections'] = ApiClient.convertToType(data['requiredRejections'], 'Number');
            }
            if (data.hasOwnProperty('currentApprovals')) {
                obj['currentApprovals'] = ApiClient.convertToType(data['currentApprovals'], 'Number');
            }
            if (data.hasOwnProperty('currentRejections')) {
                obj['currentRejections'] = ApiClient.convertToType(data['currentRejections'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
TransactionRequestRejectionDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
TransactionRequestRejectionDataItem.prototype['network'] = undefined;

/**
 * The required number of approvals needed to approve the transaction.
 * @member {Number} requiredApprovals
 */
TransactionRequestRejectionDataItem.prototype['requiredApprovals'] = undefined;

/**
 * The required number of rejections needed to reject the transaction.
 * @member {Number} requiredRejections
 */
TransactionRequestRejectionDataItem.prototype['requiredRejections'] = undefined;

/**
 * The current number of approvals given for the transaction.
 * @member {Number} currentApprovals
 */
TransactionRequestRejectionDataItem.prototype['currentApprovals'] = undefined;

/**
 * The current number of rejections given for the transaction.
 * @member {Number} currentRejections
 */
TransactionRequestRejectionDataItem.prototype['currentRejections'] = undefined;






export default TransactionRequestRejectionDataItem;

