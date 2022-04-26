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
import GetTransactionRequestDetailsR from '../model/GetTransactionRequestDetailsR';
import GetWalletAssetDetailsR from '../model/GetWalletAssetDetailsR';
import GetWalletTransactionDetailsByTransactionIDR from '../model/GetWalletTransactionDetailsByTransactionIDR';
import InlineResponse40035 from '../model/InlineResponse40035';
import InlineResponse40036 from '../model/InlineResponse40036';
import InlineResponse40038 from '../model/InlineResponse40038';
import InlineResponse40039 from '../model/InlineResponse40039';
import InlineResponse40044 from '../model/InlineResponse40044';
import InlineResponse40048 from '../model/InlineResponse40048';
import InlineResponse40049 from '../model/InlineResponse40049';
import InlineResponse4007 from '../model/InlineResponse4007';
import InlineResponse40135 from '../model/InlineResponse40135';
import InlineResponse40136 from '../model/InlineResponse40136';
import InlineResponse40138 from '../model/InlineResponse40138';
import InlineResponse40139 from '../model/InlineResponse40139';
import InlineResponse40144 from '../model/InlineResponse40144';
import InlineResponse40148 from '../model/InlineResponse40148';
import InlineResponse40149 from '../model/InlineResponse40149';
import InlineResponse4017 from '../model/InlineResponse4017';
import InlineResponse402 from '../model/InlineResponse402';
import InlineResponse40335 from '../model/InlineResponse40335';
import InlineResponse40336 from '../model/InlineResponse40336';
import InlineResponse40338 from '../model/InlineResponse40338';
import InlineResponse40339 from '../model/InlineResponse40339';
import InlineResponse40344 from '../model/InlineResponse40344';
import InlineResponse40348 from '../model/InlineResponse40348';
import InlineResponse40349 from '../model/InlineResponse40349';
import InlineResponse4037 from '../model/InlineResponse4037';
import InlineResponse4041 from '../model/InlineResponse4041';
import InlineResponse409 from '../model/InlineResponse409';
import InlineResponse415 from '../model/InlineResponse415';
import InlineResponse422 from '../model/InlineResponse422';
import InlineResponse429 from '../model/InlineResponse429';
import InlineResponse500 from '../model/InlineResponse500';
import ListAllAssetsByWalletIDR from '../model/ListAllAssetsByWalletIDR';
import ListAllAssetsFromAllWalletsR from '../model/ListAllAssetsFromAllWalletsR';
import ListDepositAddressesR from '../model/ListDepositAddressesR';
import ListSupportedTokensR from '../model/ListSupportedTokensR';
import ListWalletTransactionsR from '../model/ListWalletTransactionsR';

/**
* Informative service.
* @module api/InformativeApi
* @version 1.5.0
*/
export default class InformativeApi {

    /**
    * Constructs a new InformativeApi. 
    * @alias module:api/InformativeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Transaction Request Details
     * Through this endpoint customers can obtain details on transaction request.    {note}This regards **transaction requests**, which is not to be confused with **transactions**. Transaction requests may not be approved due to any reason, hence a transaction may not occur.{/note}
     * @param {String} transactionRequestId Represents the unique ID of the transaction request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTransactionRequestDetailsR} and HTTP response
     */
    getTransactionRequestDetailsWithHttpInfo(transactionRequestId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'transactionRequestId' is set
      if (transactionRequestId === undefined || transactionRequestId === null) {
        throw new Error("Missing the required parameter 'transactionRequestId' when calling getTransactionRequestDetails");
      }

      let pathParams = {
        'transactionRequestId': transactionRequestId
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
      let returnType = GetTransactionRequestDetailsR;
      return this.apiClient.callApi(
        '/wallet-as-a-service/transactionRequests/{transactionRequestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Transaction Request Details
     * Through this endpoint customers can obtain details on transaction request.    {note}This regards **transaction requests**, which is not to be confused with **transactions**. Transaction requests may not be approved due to any reason, hence a transaction may not occur.{/note}
     * @param {String} transactionRequestId Represents the unique ID of the transaction request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTransactionRequestDetailsR}
     */
    getTransactionRequestDetails(transactionRequestId, opts) {
      return this.getTransactionRequestDetailsWithHttpInfo(transactionRequestId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Wallet Asset Details
     * Through this endpoint customers can obtain details on all assets (coins, fungible tokens, non-fungible tokens) for the entire Wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetWalletAssetDetailsR} and HTTP response
     */
    getWalletAssetDetailsWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getWalletAssetDetails");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getWalletAssetDetails");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling getWalletAssetDetails");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetWalletAssetDetailsR;
      return this.apiClient.callApi(
        '/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Wallet Asset Details
     * Through this endpoint customers can obtain details on all assets (coins, fungible tokens, non-fungible tokens) for the entire Wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetWalletAssetDetailsR}
     */
    getWalletAssetDetails(blockchain, network, walletId, opts) {
      return this.getWalletAssetDetailsWithHttpInfo(blockchain, network, walletId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Wallet Transaction Details By Transaction ID
     * Through this endpoint users can obtain Wallet transaction information by providing a `transactionId`. Customers can receive information only for a transaction that has been made from their own wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetWalletTransactionDetailsByTransactionIDR} and HTTP response
     */
    getWalletTransactionDetailsByTransactionIDWithHttpInfo(blockchain, network, transactionId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getWalletTransactionDetailsByTransactionID");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getWalletTransactionDetailsByTransactionID");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getWalletTransactionDetailsByTransactionID");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'transactionId': transactionId
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
      let returnType = GetWalletTransactionDetailsByTransactionIDR;
      return this.apiClient.callApi(
        '/wallet-as-a-service/wallets/{blockchain}/{network}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Wallet Transaction Details By Transaction ID
     * Through this endpoint users can obtain Wallet transaction information by providing a `transactionId`. Customers can receive information only for a transaction that has been made from their own wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetWalletTransactionDetailsByTransactionIDR}
     */
    getWalletTransactionDetailsByTransactionID(blockchain, network, transactionId, opts) {
      return this.getWalletTransactionDetailsByTransactionIDWithHttpInfo(blockchain, network, transactionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List All Assets By Wallet ID
     * Through this endpoint customers can obtain information about available assets in one of their wallets, regardless of the blockchain protocol or network, by providing walletId.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAllAssetsByWalletIDR} and HTTP response
     */
    listAllAssetsByWalletIDWithHttpInfo(walletId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling listAllAssetsByWalletID");
      }

      let pathParams = {
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListAllAssetsByWalletIDR;
      return this.apiClient.callApi(
        '/wallet-as-a-service/wallets/{walletId}/assets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List All Assets By Wallet ID
     * Through this endpoint customers can obtain information about available assets in one of their wallets, regardless of the blockchain protocol or network, by providing walletId.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAllAssetsByWalletIDR}
     */
    listAllAssetsByWalletID(walletId, opts) {
      return this.listAllAssetsByWalletIDWithHttpInfo(walletId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List All Assets From All Wallets
     * Through this endpoint customers can obtain information about available assets in all of their wallets, regardless of the blockchain protocol or network.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAllAssetsFromAllWalletsR} and HTTP response
     */
    listAllAssetsFromAllWalletsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let returnType = ListAllAssetsFromAllWalletsR;
      return this.apiClient.callApi(
        '/wallet-as-a-service/wallets/all-assets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List All Assets From All Wallets
     * Through this endpoint customers can obtain information about available assets in all of their wallets, regardless of the blockchain protocol or network.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAllAssetsFromAllWalletsR}
     */
    listAllAssetsFromAllWallets(opts) {
      return this.listAllAssetsFromAllWalletsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Deposit Addresses
     * Through this endpoint customers can pull a list of Deposit/Receiving Addresses they have already generated.    {note}Please note that listing data from the same type will apply pagination on the results.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDepositAddressesR} and HTTP response
     */
    listDepositAddressesWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listDepositAddresses");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listDepositAddresses");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling listDepositAddresses");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListDepositAddressesR;
      return this.apiClient.callApi(
        '/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Deposit Addresses
     * Through this endpoint customers can pull a list of Deposit/Receiving Addresses they have already generated.    {note}Please note that listing data from the same type will apply pagination on the results.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDepositAddressesR}
     */
    listDepositAddresses(blockchain, network, walletId, opts) {
      return this.listDepositAddressesWithHttpInfo(blockchain, network, walletId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Supported Tokens
     * Through this endpoint customers can obtain information on multiple tokens at once.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSupportedTokensR} and HTTP response
     */
    listSupportedTokensWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listSupportedTokens");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listSupportedTokens");
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
      let returnType = ListSupportedTokensR;
      return this.apiClient.callApi(
        '/wallet-as-a-service/info/{blockchain}/{network}/supported-tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Supported Tokens
     * Through this endpoint customers can obtain information on multiple tokens at once.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupportedTokensR}
     */
    listSupportedTokens(blockchain, network, opts) {
      return this.listSupportedTokensWithHttpInfo(blockchain, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Wallet Transactions
     * Through this endpoint customers can list Transactions from and to their Wallet. The data returned will include `transactionId`, `direction` of the transaction - incoming or outgoing, `amount` and more.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWalletTransactionsR} and HTTP response
     */
    listWalletTransactionsWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listWalletTransactions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listWalletTransactions");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling listWalletTransactions");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'walletId': walletId
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
      let returnType = ListWalletTransactionsR;
      return this.apiClient.callApi(
        '/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Wallet Transactions
     * Through this endpoint customers can list Transactions from and to their Wallet. The data returned will include `transactionId`, `direction` of the transaction - incoming or outgoing, `amount` and more.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWalletTransactionsR}
     */
    listWalletTransactions(blockchain, network, walletId, opts) {
      return this.listWalletTransactionsWithHttpInfo(blockchain, network, walletId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
