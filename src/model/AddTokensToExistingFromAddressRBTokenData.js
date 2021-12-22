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
import AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken from './AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken';
import AddTokensToExistingFromAddressRBTokenDataEthereumToken from './AddTokensToExistingFromAddressRBTokenDataEthereumToken';

/**
 * The AddTokensToExistingFromAddressRBTokenData model module.
 * @module model/AddTokensToExistingFromAddressRBTokenData
 * @version 1.4.0
 */
class AddTokensToExistingFromAddressRBTokenData {
    /**
     * Constructs a new <code>AddTokensToExistingFromAddressRBTokenData</code>.
     * @alias module:model/AddTokensToExistingFromAddressRBTokenData
     * @implements module:model/AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken
     * @implements module:model/AddTokensToExistingFromAddressRBTokenDataEthereumToken
     * @param propertyId {Number} Represents the specific `propertyId` of the token data that will be forwarded.
     * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
     */
    constructor(propertyId, contractAddress) { 
        AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken.initialize(this, propertyId);AddTokensToExistingFromAddressRBTokenDataEthereumToken.initialize(this, contractAddress);
        AddTokensToExistingFromAddressRBTokenData.initialize(this, propertyId, contractAddress);
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
     * Constructs a <code>AddTokensToExistingFromAddressRBTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRBTokenData} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRBTokenData} The populated <code>AddTokensToExistingFromAddressRBTokenData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddTokensToExistingFromAddressRBTokenData();
            AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken.constructFromObject(data, obj);
            AddTokensToExistingFromAddressRBTokenDataEthereumToken.constructFromObject(data, obj);

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
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */
AddTokensToExistingFromAddressRBTokenData.prototype['propertyId'] = undefined;

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
AddTokensToExistingFromAddressRBTokenData.prototype['contractAddress'] = undefined;


// Implement AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken interface:
/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */
AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken.prototype['propertyId'] = undefined;
// Implement AddTokensToExistingFromAddressRBTokenDataEthereumToken interface:
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
AddTokensToExistingFromAddressRBTokenDataEthereumToken.prototype['contractAddress'] = undefined;




export default AddTokensToExistingFromAddressRBTokenData;

