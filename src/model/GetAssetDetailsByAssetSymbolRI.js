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
import GetAssetDetailsByAssetIDRIAssetLogo from './GetAssetDetailsByAssetIDRIAssetLogo';
import GetAssetDetailsByAssetIDRILatestRate from './GetAssetDetailsByAssetIDRILatestRate';
import GetAssetDetailsByAssetSymbolRIS from './GetAssetDetailsByAssetSymbolRIS';

/**
 * The GetAssetDetailsByAssetSymbolRI model module.
 * @module model/GetAssetDetailsByAssetSymbolRI
 * @version 1.7.3
 */
class GetAssetDetailsByAssetSymbolRI {
    /**
     * Constructs a new <code>GetAssetDetailsByAssetSymbolRI</code>.
     * @alias module:model/GetAssetDetailsByAssetSymbolRI
     * @param assetId {String} Defines the unique ID of the specific asset.
     * @param assetLogo {module:model/GetAssetDetailsByAssetIDRIAssetLogo} 
     * @param assetName {String} Specifies the name of the asset in question.
     * @param assetOriginalSymbol {String} Specifies the asset's original symbol as introduced by its founders.
     * @param assetSymbol {String} Specifies the asset's unique symbol in the Crypto APIs listings.
     * @param assetType {module:model/GetAssetDetailsByAssetSymbolRI.AssetTypeEnum} Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
     * @param latestRate {module:model/GetAssetDetailsByAssetIDRILatestRate} 
     * @param specificData {module:model/GetAssetDetailsByAssetSymbolRIS} 
     */
    constructor(assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) { 
        
        GetAssetDetailsByAssetSymbolRI.initialize(this, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) { 
        obj['assetId'] = assetId;
        obj['assetLogo'] = assetLogo;
        obj['assetName'] = assetName;
        obj['assetOriginalSymbol'] = assetOriginalSymbol;
        obj['assetSymbol'] = assetSymbol;
        obj['assetType'] = assetType;
        obj['latestRate'] = latestRate;
        obj['specificData'] = specificData;
    }

    /**
     * Constructs a <code>GetAssetDetailsByAssetSymbolRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetSymbolRI} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetSymbolRI} The populated <code>GetAssetDetailsByAssetSymbolRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAssetDetailsByAssetSymbolRI();

            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'String');
            }
            if (data.hasOwnProperty('assetLogo')) {
                obj['assetLogo'] = GetAssetDetailsByAssetIDRIAssetLogo.constructFromObject(data['assetLogo']);
            }
            if (data.hasOwnProperty('assetName')) {
                obj['assetName'] = ApiClient.convertToType(data['assetName'], 'String');
            }
            if (data.hasOwnProperty('assetOriginalSymbol')) {
                obj['assetOriginalSymbol'] = ApiClient.convertToType(data['assetOriginalSymbol'], 'String');
            }
            if (data.hasOwnProperty('assetSymbol')) {
                obj['assetSymbol'] = ApiClient.convertToType(data['assetSymbol'], 'String');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
            if (data.hasOwnProperty('latestRate')) {
                obj['latestRate'] = GetAssetDetailsByAssetIDRILatestRate.constructFromObject(data['latestRate']);
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('specificData')) {
                obj['specificData'] = GetAssetDetailsByAssetSymbolRIS.constructFromObject(data['specificData']);
            }
        }
        return obj;
    }


}

/**
 * Defines the unique ID of the specific asset.
 * @member {String} assetId
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetId'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetIDRIAssetLogo} assetLogo
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetLogo'] = undefined;

/**
 * Specifies the name of the asset in question.
 * @member {String} assetName
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetName'] = undefined;

/**
 * Specifies the asset's original symbol as introduced by its founders.
 * @member {String} assetOriginalSymbol
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetOriginalSymbol'] = undefined;

/**
 * Specifies the asset's unique symbol in the Crypto APIs listings.
 * @member {String} assetSymbol
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetSymbol'] = undefined;

/**
 * Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
 * @member {module:model/GetAssetDetailsByAssetSymbolRI.AssetTypeEnum} assetType
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetType'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetIDRILatestRate} latestRate
 */
GetAssetDetailsByAssetSymbolRI.prototype['latestRate'] = undefined;

/**
 * Represents the asset`s unique slug string in Crypto APIs listings.
 * @member {String} slug
 */
GetAssetDetailsByAssetSymbolRI.prototype['slug'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetSymbolRIS} specificData
 */
GetAssetDetailsByAssetSymbolRI.prototype['specificData'] = undefined;





/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
GetAssetDetailsByAssetSymbolRI['AssetTypeEnum'] = {

    /**
     * value: "fiat"
     * @const
     */
    "fiat": "fiat",

    /**
     * value: "crypto"
     * @const
     */
    "crypto": "crypto"
};



export default GetAssetDetailsByAssetSymbolRI;

