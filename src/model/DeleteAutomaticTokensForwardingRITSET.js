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
 * The DeleteAutomaticTokensForwardingRITSET model module.
 * @module model/DeleteAutomaticTokensForwardingRITSET
 * @version 1.2.1
 */
class DeleteAutomaticTokensForwardingRITSET {
    /**
     * Constructs a new <code>DeleteAutomaticTokensForwardingRITSET</code>.
     * Ethereum Token
     * @alias module:model/DeleteAutomaticTokensForwardingRITSET
     * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
     */
    constructor(contractAddress) { 
        
        DeleteAutomaticTokensForwardingRITSET.initialize(this, contractAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractAddress) { 
        obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>DeleteAutomaticTokensForwardingRITSET</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAutomaticTokensForwardingRITSET} obj Optional instance to populate.
     * @return {module:model/DeleteAutomaticTokensForwardingRITSET} The populated <code>DeleteAutomaticTokensForwardingRITSET</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAutomaticTokensForwardingRITSET();

            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
DeleteAutomaticTokensForwardingRITSET.prototype['contractAddress'] = undefined;






export default DeleteAutomaticTokensForwardingRITSET;

