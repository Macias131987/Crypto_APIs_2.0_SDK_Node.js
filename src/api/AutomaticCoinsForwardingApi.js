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
import CreateAutomaticCoinsForwardingR from '../model/CreateAutomaticCoinsForwardingR';
import CreateAutomaticCoinsForwardingRB from '../model/CreateAutomaticCoinsForwardingRB';
import DeleteAutomaticCoinsForwardingR from '../model/DeleteAutomaticCoinsForwardingR';
import InlineResponse40089 from '../model/InlineResponse40089';
import InlineResponse40090 from '../model/InlineResponse40090';
import InlineResponse40091 from '../model/InlineResponse40091';
import InlineResponse40189 from '../model/InlineResponse40189';
import InlineResponse40190 from '../model/InlineResponse40190';
import InlineResponse40191 from '../model/InlineResponse40191';
import InlineResponse402 from '../model/InlineResponse402';
import InlineResponse40389 from '../model/InlineResponse40389';
import InlineResponse40390 from '../model/InlineResponse40390';
import InlineResponse40391 from '../model/InlineResponse40391';
import InlineResponse4041 from '../model/InlineResponse4041';
import InlineResponse409 from '../model/InlineResponse409';
import InlineResponse40916 from '../model/InlineResponse40916';
import InlineResponse415 from '../model/InlineResponse415';
import InlineResponse422 from '../model/InlineResponse422';
import InlineResponse429 from '../model/InlineResponse429';
import InlineResponse500 from '../model/InlineResponse500';
import ListCoinsForwardingAutomationsR from '../model/ListCoinsForwardingAutomationsR';

/**
* AutomaticCoinsForwarding service.
* @module api/AutomaticCoinsForwardingApi
* @version 1.5.0
*/
export default class AutomaticCoinsForwardingApi {

    /**
    * Constructs a new AutomaticCoinsForwardingApi. 
    * @alias module:api/AutomaticCoinsForwardingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Automatic Coins Forwarding
     * Through this endpoint customers can set up an automatic forwarding function specifically for coins (**not** tokens). They can have a `toAddress` which is essentially the main address and the destination for the automatic coins forwarding.     There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the coins once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    The response of this endpoint contains an attribute `fromAddress` which can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new `fromAddress` each time.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateAutomaticCoinsForwardingRB} opts.createAutomaticCoinsForwardingRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateAutomaticCoinsForwardingR} and HTTP response
     */
    createAutomaticCoinsForwardingWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      let postBody = opts['createAutomaticCoinsForwardingRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createAutomaticCoinsForwarding");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createAutomaticCoinsForwarding");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network
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
      let returnType = CreateAutomaticCoinsForwardingR;
      return this.apiClient.callApi(
        '/blockchain-automations/{blockchain}/{network}/coins-forwarding/automations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Automatic Coins Forwarding
     * Through this endpoint customers can set up an automatic forwarding function specifically for coins (**not** tokens). They can have a `toAddress` which is essentially the main address and the destination for the automatic coins forwarding.     There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the coins once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    The response of this endpoint contains an attribute `fromAddress` which can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new `fromAddress` each time.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateAutomaticCoinsForwardingRB} opts.createAutomaticCoinsForwardingRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateAutomaticCoinsForwardingR}
     */
    createAutomaticCoinsForwarding(blockchain, network, opts) {
      return this.createAutomaticCoinsForwardingWithHttpInfo(blockchain, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Automatic Coins Forwarding
     * Through this endpoint customers can delete a forwarding function they have set for **coins** (**not** tokens).    By setting a `fromAddress` and a `toAddress`, and specifying the amount, coins can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteAutomaticCoinsForwardingR} and HTTP response
     */
    deleteAutomaticCoinsForwardingWithHttpInfo(blockchain, network, referenceId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deleteAutomaticCoinsForwarding");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling deleteAutomaticCoinsForwarding");
      }
      // verify the required parameter 'referenceId' is set
      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling deleteAutomaticCoinsForwarding");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'referenceId': referenceId
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteAutomaticCoinsForwardingR;
      return this.apiClient.callApi(
        '/blockchain-automations/{blockchain}/{network}/coins-forwarding/automations/{referenceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Automatic Coins Forwarding
     * Through this endpoint customers can delete a forwarding function they have set for **coins** (**not** tokens).    By setting a `fromAddress` and a `toAddress`, and specifying the amount, coins can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteAutomaticCoinsForwardingR}
     */
    deleteAutomaticCoinsForwarding(blockchain, network, referenceId, opts) {
      return this.deleteAutomaticCoinsForwardingWithHttpInfo(blockchain, network, referenceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Coins Forwarding Automations
     * Through this endpoint customers can list all of their **coins** forwarding automations (**not** tokens).    Customers can set up automatic forwarding functions for coins by setting a `fromAddress` and a `toAddress`, and specifying the amount that can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}The subscription will work for all transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCoinsForwardingAutomationsR} and HTTP response
     */
    listCoinsForwardingAutomationsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listCoinsForwardingAutomations");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listCoinsForwardingAutomations");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      let queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListCoinsForwardingAutomationsR;
      return this.apiClient.callApi(
        '/blockchain-automations/{blockchain}/{network}/coins-forwarding/automations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Coins Forwarding Automations
     * Through this endpoint customers can list all of their **coins** forwarding automations (**not** tokens).    Customers can set up automatic forwarding functions for coins by setting a `fromAddress` and a `toAddress`, and specifying the amount that can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}The subscription will work for all transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCoinsForwardingAutomationsR}
     */
    listCoinsForwardingAutomations(blockchain, network, opts) {
      return this.listCoinsForwardingAutomationsWithHttpInfo(blockchain, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
