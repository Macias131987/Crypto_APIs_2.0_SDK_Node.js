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
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee
 * @version 1.7.3
 */
class PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee {
    /**
     * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee</code>.
     * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee
     */
    constructor() { 
        
        PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee();

            if (data.hasOwnProperty('exactAmount')) {
                obj['exactAmount'] = ApiClient.convertToType(data['exactAmount'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the exact amount value
 * @member {String} exactAmount
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.prototype['exactAmount'] = undefined;

/**
 * Represents the fee priority
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.PriorityEnum} priority
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.prototype['priority'] = undefined;





/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee['PriorityEnum'] = {

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



export default PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee;

