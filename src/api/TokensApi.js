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


import ApiClient from "../ApiClient";
import GetAddressDetails402Response from '../model/GetAddressDetails402Response';
import GetAddressDetails409Response from '../model/GetAddressDetails409Response';
import GetAddressDetails415Response from '../model/GetAddressDetails415Response';
import GetAddressDetails422Response from '../model/GetAddressDetails422Response';
import GetAddressDetails429Response from '../model/GetAddressDetails429Response';
import GetAddressDetails500Response from '../model/GetAddressDetails500Response';
import GetTokenDetailsByContractAddress400Response from '../model/GetTokenDetailsByContractAddress400Response';
import GetTokenDetailsByContractAddress401Response from '../model/GetTokenDetailsByContractAddress401Response';
import GetTokenDetailsByContractAddress403Response from '../model/GetTokenDetailsByContractAddress403Response';
import GetTokenDetailsByContractAddressR from '../model/GetTokenDetailsByContractAddressR';
import ListConfirmedTokensTransfersByAddress400Response from '../model/ListConfirmedTokensTransfersByAddress400Response';
import ListConfirmedTokensTransfersByAddress401Response from '../model/ListConfirmedTokensTransfersByAddress401Response';
import ListConfirmedTokensTransfersByAddress403Response from '../model/ListConfirmedTokensTransfersByAddress403Response';
import ListConfirmedTokensTransfersByAddressR from '../model/ListConfirmedTokensTransfersByAddressR';
import ListTokensByAddress400Response from '../model/ListTokensByAddress400Response';
import ListTokensByAddress401Response from '../model/ListTokensByAddress401Response';
import ListTokensByAddress403Response from '../model/ListTokensByAddress403Response';
import ListTokensByAddressR from '../model/ListTokensByAddressR';
import ListTokensTransfersByTransactionHash400Response from '../model/ListTokensTransfersByTransactionHash400Response';
import ListTokensTransfersByTransactionHash401Response from '../model/ListTokensTransfersByTransactionHash401Response';
import ListTokensTransfersByTransactionHash403Response from '../model/ListTokensTransfersByTransactionHash403Response';
import ListTokensTransfersByTransactionHashR from '../model/ListTokensTransfersByTransactionHashR';
import ListUnconfirmedTokensTransfersByAddress400Response from '../model/ListUnconfirmedTokensTransfersByAddress400Response';
import ListUnconfirmedTokensTransfersByAddress401Response from '../model/ListUnconfirmedTokensTransfersByAddress401Response';
import ListUnconfirmedTokensTransfersByAddress403Response from '../model/ListUnconfirmedTokensTransfersByAddress403Response';
import ListUnconfirmedTokensTransfersByAddressR from '../model/ListUnconfirmedTokensTransfersByAddressR';

/**
* Tokens service.
* @module api/TokensApi
* @version 1.7.3
*/
export default class TokensApi {

    /**
    * Constructs a new TokensApi. 
    * @alias module:api/TokensApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Token Details by Contract Address
     * Though this endpoint customers can obtain information about token details. This can be done by providing the `contact address` parameter.    {note}This address is **not** the same as the smart contract creator address.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} contractAddress Defines the specific address of the contract.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTokenDetailsByContractAddressR} and HTTP response
     */
    getTokenDetailsByContractAddressWithHttpInfo(blockchain, network, contractAddress, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getTokenDetailsByContractAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getTokenDetailsByContractAddress");
      }
      // verify the required parameter 'contractAddress' is set
      if (contractAddress === undefined || contractAddress === null) {
        throw new Error("Missing the required parameter 'contractAddress' when calling getTokenDetailsByContractAddress");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'contractAddress': contractAddress
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
      let returnType = GetTokenDetailsByContractAddressR;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/addresses/{contractAddress}/contract', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Token Details by Contract Address
     * Though this endpoint customers can obtain information about token details. This can be done by providing the `contact address` parameter.    {note}This address is **not** the same as the smart contract creator address.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} contractAddress Defines the specific address of the contract.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTokenDetailsByContractAddressR}
     */
    getTokenDetailsByContractAddress(blockchain, network, contractAddress, opts) {
      return this.getTokenDetailsByContractAddressWithHttpInfo(blockchain, network, contractAddress, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Confirmed Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with **confirmed** token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **confirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListConfirmedTokensTransfersByAddressR} and HTTP response
     */
    listConfirmedTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listConfirmedTokensTransfersByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listConfirmedTokensTransfersByAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listConfirmedTokensTransfersByAddress");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
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
      let returnType = ListConfirmedTokensTransfersByAddressR;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens-transfers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Confirmed Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with **confirmed** token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **confirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListConfirmedTokensTransfersByAddressR}
     */
    listConfirmedTokensTransfersByAddress(blockchain, network, address, opts) {
      return this.listConfirmedTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tokens By Address
     * Through this endpoint customers can obtain token data by providing an attribute - `address`.  The information that can be returned can include the contract address, the token symbol, type and balance.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensByAddressR} and HTTP response
     */
    listTokensByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensByAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listTokensByAddress");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
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
      let returnType = ListTokensByAddressR;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tokens By Address
     * Through this endpoint customers can obtain token data by providing an attribute - `address`.  The information that can be returned can include the contract address, the token symbol, type and balance.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensByAddressR}
     */
    listTokensByAddress(blockchain, network, address, opts) {
      return this.listTokensByAddressWithHttpInfo(blockchain, network, address, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tokens Transfers By Transaction Hash
     * Through this endpoint customers can obtain a list with token transfers by the `transactionHash` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionHash Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensTransfersByTransactionHashR} and HTTP response
     */
    listTokensTransfersByTransactionHashWithHttpInfo(blockchain, network, transactionHash, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensTransfersByTransactionHash");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensTransfersByTransactionHash");
      }
      // verify the required parameter 'transactionHash' is set
      if (transactionHash === undefined || transactionHash === null) {
        throw new Error("Missing the required parameter 'transactionHash' when calling listTokensTransfersByTransactionHash");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'transactionHash': transactionHash
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
      let returnType = ListTokensTransfersByTransactionHashR;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/transactions/{transactionHash}/tokens-transfers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tokens Transfers By Transaction Hash
     * Through this endpoint customers can obtain a list with token transfers by the `transactionHash` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionHash Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensTransfersByTransactionHashR}
     */
    listTokensTransfersByTransactionHash(blockchain, network, transactionHash, opts) {
      return this.listTokensTransfersByTransactionHashWithHttpInfo(blockchain, network, transactionHash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Unconfirmed Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with **unconfirmed** token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **unconfirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUnconfirmedTokensTransfersByAddressR} and HTTP response
     */
    listUnconfirmedTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listUnconfirmedTokensTransfersByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listUnconfirmedTokensTransfersByAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listUnconfirmedTokensTransfersByAddress");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
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
      let returnType = ListUnconfirmedTokensTransfersByAddressR;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens-transfers-unconfirmed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Unconfirmed Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with **unconfirmed** token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **unconfirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUnconfirmedTokensTransfersByAddressR}
     */
    listUnconfirmedTokensTransfersByAddress(blockchain, network, address, opts) {
      return this.listUnconfirmedTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
