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
import GetLatestMinedXRPRippleBlockRITotalCoins from './GetLatestMinedXRPRippleBlockRITotalCoins';
import GetLatestMinedXRPRippleBlockRITotalFees from './GetLatestMinedXRPRippleBlockRITotalFees';

/**
 * The GetBlockDetailsByBlockHeightFromCallbackRIBSX model module.
 * @module model/GetBlockDetailsByBlockHeightFromCallbackRIBSX
 * @version 1.4.0
 */
class GetBlockDetailsByBlockHeightFromCallbackRIBSX {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHeightFromCallbackRIBSX</code>.
     * XRP
     * @alias module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX
     * @param totalCoins {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} 
     * @param totalFees {module:model/GetLatestMinedXRPRippleBlockRITotalFees} 
     */
    constructor(totalCoins, totalFees) { 
        
        GetBlockDetailsByBlockHeightFromCallbackRIBSX.initialize(this, totalCoins, totalFees);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCoins, totalFees) { 
        obj['totalCoins'] = totalCoins;
        obj['totalFees'] = totalFees;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightFromCallbackRIBSX</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX} The populated <code>GetBlockDetailsByBlockHeightFromCallbackRIBSX</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHeightFromCallbackRIBSX();

            if (data.hasOwnProperty('totalCoins')) {
                obj['totalCoins'] = GetLatestMinedXRPRippleBlockRITotalCoins.constructFromObject(data['totalCoins']);
            }
            if (data.hasOwnProperty('totalFees')) {
                obj['totalFees'] = GetLatestMinedXRPRippleBlockRITotalFees.constructFromObject(data['totalFees']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSX.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSX.prototype['totalFees'] = undefined;






export default GetBlockDetailsByBlockHeightFromCallbackRIBSX;

