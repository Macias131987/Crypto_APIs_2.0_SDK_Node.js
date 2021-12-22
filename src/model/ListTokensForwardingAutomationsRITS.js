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
import ListTokensForwardingAutomationsRITSBOT from './ListTokensForwardingAutomationsRITSBOT';
import ListTokensForwardingAutomationsRITSET from './ListTokensForwardingAutomationsRITSET';

/**
 * The ListTokensForwardingAutomationsRITS model module.
 * @module model/ListTokensForwardingAutomationsRITS
 * @version 1.4.0
 */
class ListTokensForwardingAutomationsRITS {
    /**
     * Constructs a new <code>ListTokensForwardingAutomationsRITS</code>.
     * @alias module:model/ListTokensForwardingAutomationsRITS
     * @implements module:model/ListTokensForwardingAutomationsRITSBOT
     * @implements module:model/ListTokensForwardingAutomationsRITSET
     * @param propertyId {Number} Defines the Property ID of the Omni Layer token.
     * @param contractAddress {String} Defines the token contract address.
     */
    constructor(propertyId, contractAddress) { 
        ListTokensForwardingAutomationsRITSBOT.initialize(this, propertyId);ListTokensForwardingAutomationsRITSET.initialize(this, contractAddress);
        ListTokensForwardingAutomationsRITS.initialize(this, propertyId, contractAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, propertyId, contractAddress) { 
        obj['propertyId'] = propertyId;
        obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>ListTokensForwardingAutomationsRITS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensForwardingAutomationsRITS} obj Optional instance to populate.
     * @return {module:model/ListTokensForwardingAutomationsRITS} The populated <code>ListTokensForwardingAutomationsRITS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTokensForwardingAutomationsRITS();
            ListTokensForwardingAutomationsRITSBOT.constructFromObject(data, obj);
            ListTokensForwardingAutomationsRITSET.constructFromObject(data, obj);

            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'Number');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the Property ID of the Omni Layer token.
 * @member {Number} propertyId
 */
ListTokensForwardingAutomationsRITS.prototype['propertyId'] = undefined;

/**
 * Defines the token contract address.
 * @member {String} contractAddress
 */
ListTokensForwardingAutomationsRITS.prototype['contractAddress'] = undefined;


// Implement ListTokensForwardingAutomationsRITSBOT interface:
/**
 * Defines the Property ID of the Omni Layer token.
 * @member {Number} propertyId
 */
ListTokensForwardingAutomationsRITSBOT.prototype['propertyId'] = undefined;
// Implement ListTokensForwardingAutomationsRITSET interface:
/**
 * Defines the token contract address.
 * @member {String} contractAddress
 */
ListTokensForwardingAutomationsRITSET.prototype['contractAddress'] = undefined;




export default ListTokensForwardingAutomationsRITS;

