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
 * The GetAssetDetailsByAssetSymbolRISC model module.
 * @module model/GetAssetDetailsByAssetSymbolRISC
 * @version 1.7.3
 */
class GetAssetDetailsByAssetSymbolRISC {
    /**
     * Constructs a new <code>GetAssetDetailsByAssetSymbolRISC</code>.
     * Crypto Type Data
     * @alias module:model/GetAssetDetailsByAssetSymbolRISC
     * @param _1hourPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 hour ago.
     * @param _1weekPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 week ago.
     * @param _24hoursPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 24 hours ago.
     * @param _24hoursTradingVolume {String} Represents the trading volume of the asset for the time frame of 24 hours.
     * @param assetType {module:model/GetAssetDetailsByAssetSymbolRISC.AssetTypeEnum} Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
     * @param circulatingSupply {String} Represents the amount of the asset that is circulating on the market and in public hands.
     * @param marketCapInUSD {String} Defines the total market value of the asset's circulating supply in USD.
     * @param maxSupply {String} Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
     */
    constructor(_1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply) { 
        
        GetAssetDetailsByAssetSymbolRISC.initialize(this, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply) { 
        obj['1HourPriceChangeInPercentage'] = _1hourPriceChangeInPercentage;
        obj['1WeekPriceChangeInPercentage'] = _1weekPriceChangeInPercentage;
        obj['24HoursPriceChangeInPercentage'] = _24hoursPriceChangeInPercentage;
        obj['24HoursTradingVolume'] = _24hoursTradingVolume;
        obj['assetType'] = assetType;
        obj['circulatingSupply'] = circulatingSupply;
        obj['marketCapInUSD'] = marketCapInUSD;
        obj['maxSupply'] = maxSupply;
    }

    /**
     * Constructs a <code>GetAssetDetailsByAssetSymbolRISC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetSymbolRISC} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetSymbolRISC} The populated <code>GetAssetDetailsByAssetSymbolRISC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAssetDetailsByAssetSymbolRISC();

            if (data.hasOwnProperty('1HourPriceChangeInPercentage')) {
                obj['1HourPriceChangeInPercentage'] = ApiClient.convertToType(data['1HourPriceChangeInPercentage'], 'String');
            }
            if (data.hasOwnProperty('1WeekPriceChangeInPercentage')) {
                obj['1WeekPriceChangeInPercentage'] = ApiClient.convertToType(data['1WeekPriceChangeInPercentage'], 'String');
            }
            if (data.hasOwnProperty('24HoursPriceChangeInPercentage')) {
                obj['24HoursPriceChangeInPercentage'] = ApiClient.convertToType(data['24HoursPriceChangeInPercentage'], 'String');
            }
            if (data.hasOwnProperty('24HoursTradingVolume')) {
                obj['24HoursTradingVolume'] = ApiClient.convertToType(data['24HoursTradingVolume'], 'String');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
            if (data.hasOwnProperty('circulatingSupply')) {
                obj['circulatingSupply'] = ApiClient.convertToType(data['circulatingSupply'], 'String');
            }
            if (data.hasOwnProperty('marketCapInUSD')) {
                obj['marketCapInUSD'] = ApiClient.convertToType(data['marketCapInUSD'], 'String');
            }
            if (data.hasOwnProperty('maxSupply')) {
                obj['maxSupply'] = ApiClient.convertToType(data['maxSupply'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the percentage of the asset's current price against the its price from 1 hour ago.
 * @member {String} 1HourPriceChangeInPercentage
 */
GetAssetDetailsByAssetSymbolRISC.prototype['1HourPriceChangeInPercentage'] = undefined;

/**
 * Represents the percentage of the asset's current price against the its price from 1 week ago.
 * @member {String} 1WeekPriceChangeInPercentage
 */
GetAssetDetailsByAssetSymbolRISC.prototype['1WeekPriceChangeInPercentage'] = undefined;

/**
 * Represents the percentage of the asset's current price against the its price from 24 hours ago.
 * @member {String} 24HoursPriceChangeInPercentage
 */
GetAssetDetailsByAssetSymbolRISC.prototype['24HoursPriceChangeInPercentage'] = undefined;

/**
 * Represents the trading volume of the asset for the time frame of 24 hours.
 * @member {String} 24HoursTradingVolume
 */
GetAssetDetailsByAssetSymbolRISC.prototype['24HoursTradingVolume'] = undefined;

/**
 * Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
 * @member {module:model/GetAssetDetailsByAssetSymbolRISC.AssetTypeEnum} assetType
 */
GetAssetDetailsByAssetSymbolRISC.prototype['assetType'] = undefined;

/**
 * Represents the amount of the asset that is circulating on the market and in public hands.
 * @member {String} circulatingSupply
 */
GetAssetDetailsByAssetSymbolRISC.prototype['circulatingSupply'] = undefined;

/**
 * Defines the total market value of the asset's circulating supply in USD.
 * @member {String} marketCapInUSD
 */
GetAssetDetailsByAssetSymbolRISC.prototype['marketCapInUSD'] = undefined;

/**
 * Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
 * @member {String} maxSupply
 */
GetAssetDetailsByAssetSymbolRISC.prototype['maxSupply'] = undefined;





/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
GetAssetDetailsByAssetSymbolRISC['AssetTypeEnum'] = {

    /**
     * value: "coin"
     * @const
     */
    "coin": "coin",

    /**
     * value: "token"
     * @const
     */
    "token": "token"
};



export default GetAssetDetailsByAssetSymbolRISC;

