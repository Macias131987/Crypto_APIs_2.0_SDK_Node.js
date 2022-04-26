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


import ApiClient from "../ApiClient";
import GenerateDepositAddressR from '../model/GenerateDepositAddressR';
import GenerateDepositAddressRB from '../model/GenerateDepositAddressRB';
import InlineResponse4008 from '../model/InlineResponse4008';
import InlineResponse4018 from '../model/InlineResponse4018';
import InlineResponse402 from '../model/InlineResponse402';
import InlineResponse4038 from '../model/InlineResponse4038';
import InlineResponse4041 from '../model/InlineResponse4041';
import InlineResponse409 from '../model/InlineResponse409';
import InlineResponse415 from '../model/InlineResponse415';
import InlineResponse422 from '../model/InlineResponse422';
import InlineResponse429 from '../model/InlineResponse429';
import InlineResponse500 from '../model/InlineResponse500';

/**
* Generating service.
* @module api/GeneratingApi
* @version 1.5.0
*/
export default class GeneratingApi {

    /**
    * Constructs a new GeneratingApi. 
    * @alias module:api/GeneratingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Generate Deposit Address
     * Through this endpoint customers can generate a new Receiving/Deposit Addresses into their Wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/GenerateDepositAddressRB} opts.generateDepositAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenerateDepositAddressR} and HTTP response
     */
    generateDepositAddressWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      let postBody = opts['generateDepositAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling generateDepositAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling generateDepositAddress");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling generateDepositAddress");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'walletId': walletId
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GenerateDepositAddressR;
      return this.apiClient.callApi(
        '/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Generate Deposit Address
     * Through this endpoint customers can generate a new Receiving/Deposit Addresses into their Wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/GenerateDepositAddressRB} opts.generateDepositAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenerateDepositAddressR}
     */
    generateDepositAddress(blockchain, network, walletId, opts) {
      return this.generateDepositAddressWithHttpInfo(blockchain, network, walletId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
