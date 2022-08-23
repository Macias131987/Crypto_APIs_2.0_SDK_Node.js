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
import GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance from './GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance';
import GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner from './GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner';
import GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner from './GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner';

/**
 * The GetHDWalletXPubYPubZPubAssetsRI model module.
 * @module model/GetHDWalletXPubYPubZPubAssetsRI
 * @version 1.7.3
 */
class GetHDWalletXPubYPubZPubAssetsRI {
    /**
     * Constructs a new <code>GetHDWalletXPubYPubZPubAssetsRI</code>.
     * @alias module:model/GetHDWalletXPubYPubZPubAssetsRI
     * @param confirmedBalance {module:model/GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance} 
     */
    constructor(confirmedBalance) { 
        
        GetHDWalletXPubYPubZPubAssetsRI.initialize(this, confirmedBalance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, confirmedBalance) { 
        obj['confirmedBalance'] = confirmedBalance;
    }

    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubAssetsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubAssetsRI} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubAssetsRI} The populated <code>GetHDWalletXPubYPubZPubAssetsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetHDWalletXPubYPubZPubAssetsRI();

            if (data.hasOwnProperty('fungibleTokens')) {
                obj['fungibleTokens'] = ApiClient.convertToType(data['fungibleTokens'], [GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner]);
            }
            if (data.hasOwnProperty('nonFungibleTokens')) {
                obj['nonFungibleTokens'] = ApiClient.convertToType(data['nonFungibleTokens'], [GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner]);
            }
            if (data.hasOwnProperty('confirmedBalance')) {
                obj['confirmedBalance'] = GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance.constructFromObject(data['confirmedBalance']);
            }
        }
        return obj;
    }


}

/**
 * Represents fungible tokens'es detailed information
 * @member {Array.<module:model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner>} fungibleTokens
 */
GetHDWalletXPubYPubZPubAssetsRI.prototype['fungibleTokens'] = undefined;

/**
 * Represents non-fungible tokens'es detailed information.
 * @member {Array.<module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner>} nonFungibleTokens
 */
GetHDWalletXPubYPubZPubAssetsRI.prototype['nonFungibleTokens'] = undefined;

/**
 * @member {module:model/GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance} confirmedBalance
 */
GetHDWalletXPubYPubZPubAssetsRI.prototype['confirmedBalance'] = undefined;






export default GetHDWalletXPubYPubZPubAssetsRI;

