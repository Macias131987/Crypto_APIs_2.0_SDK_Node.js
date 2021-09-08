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
 * The GetWalletAssetDetailsRIConfirmedBalance model module.
 * @module model/GetWalletAssetDetailsRIConfirmedBalance
 * @version 1.2.1
 */
class GetWalletAssetDetailsRIConfirmedBalance {
    /**
     * Constructs a new <code>GetWalletAssetDetailsRIConfirmedBalance</code>.
     * @alias module:model/GetWalletAssetDetailsRIConfirmedBalance
     * @param amount {String} 
     * @param unit {String} 
     */
    constructor(amount, unit) { 
        
        GetWalletAssetDetailsRIConfirmedBalance.initialize(this, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, unit) { 
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetWalletAssetDetailsRIConfirmedBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletAssetDetailsRIConfirmedBalance} obj Optional instance to populate.
     * @return {module:model/GetWalletAssetDetailsRIConfirmedBalance} The populated <code>GetWalletAssetDetailsRIConfirmedBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletAssetDetailsRIConfirmedBalance();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} amount
 */
GetWalletAssetDetailsRIConfirmedBalance.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
GetWalletAssetDetailsRIConfirmedBalance.prototype['unit'] = undefined;






export default GetWalletAssetDetailsRIConfirmedBalance;

