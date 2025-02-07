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
import GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner from './GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner';
import GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner from './GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner';
import GetTransactionDetailsByTransactionIDRIBSZVoutInner from './GetTransactionDetailsByTransactionIDRIBSZVoutInner';
import ListConfirmedTransactionsByAddressRIBSB from './ListConfirmedTransactionsByAddressRIBSB';
import ListConfirmedTransactionsByAddressRIBSBC from './ListConfirmedTransactionsByAddressRIBSBC';
import ListConfirmedTransactionsByAddressRIBSBSC from './ListConfirmedTransactionsByAddressRIBSBSC';
import ListConfirmedTransactionsByAddressRIBSBSCGasPrice from './ListConfirmedTransactionsByAddressRIBSBSCGasPrice';
import ListConfirmedTransactionsByAddressRIBSD from './ListConfirmedTransactionsByAddressRIBSD';
import ListConfirmedTransactionsByAddressRIBSD2 from './ListConfirmedTransactionsByAddressRIBSD2';
import ListConfirmedTransactionsByAddressRIBSE from './ListConfirmedTransactionsByAddressRIBSE';
import ListConfirmedTransactionsByAddressRIBSEC from './ListConfirmedTransactionsByAddressRIBSEC';
import ListConfirmedTransactionsByAddressRIBSL from './ListConfirmedTransactionsByAddressRIBSL';
import ListConfirmedTransactionsByAddressRIBSZ from './ListConfirmedTransactionsByAddressRIBSZ';
import ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner from './ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner';
import ListConfirmedTransactionsByAddressRIBSZVinInner from './ListConfirmedTransactionsByAddressRIBSZVinInner';

/**
 * The ListConfirmedTransactionsByAddressRIBS model module.
 * @module model/ListConfirmedTransactionsByAddressRIBS
 * @version 1.7.3
 */
class ListConfirmedTransactionsByAddressRIBS {
    /**
     * Constructs a new <code>ListConfirmedTransactionsByAddressRIBS</code>.
     * @alias module:model/ListConfirmedTransactionsByAddressRIBS
     * @implements module:model/ListConfirmedTransactionsByAddressRIBSB
     * @implements module:model/ListConfirmedTransactionsByAddressRIBSBC
     * @implements module:model/ListConfirmedTransactionsByAddressRIBSL
     * @implements module:model/ListConfirmedTransactionsByAddressRIBSD
     * @implements module:model/ListConfirmedTransactionsByAddressRIBSD2
     * @implements module:model/ListConfirmedTransactionsByAddressRIBSEC
     * @implements module:model/ListConfirmedTransactionsByAddressRIBSE
     * @implements module:model/ListConfirmedTransactionsByAddressRIBSBSC
     * @implements module:model/ListConfirmedTransactionsByAddressRIBSZ
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Defines the version of the transaction.
     * @param vin {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} Object Array representation of transaction inputs
     * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} Object Array representation of transaction outputs
     * @param contract {String} Represents the specific transaction contract.
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} 
     * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} String representation of the transaction status
     * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
     * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
     * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
     * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
     * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
     * @param vJoinSplit {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
     * @param vShieldedOutput {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
     * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
     * @param valueBalance {String} Defines the transaction value balance.
     * @param versionGroupId {String} Represents the transaction version group ID.
     */
    constructor(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) { 
        ListConfirmedTransactionsByAddressRIBSB.initialize(this, locktime, size, vSize, version, vin, vout);ListConfirmedTransactionsByAddressRIBSBC.initialize(this, locktime, size, version, vin);ListConfirmedTransactionsByAddressRIBSL.initialize(this, locktime, size, vSize, version, vin, vout);ListConfirmedTransactionsByAddressRIBSD.initialize(this, locktime, size, version, vin, vout);ListConfirmedTransactionsByAddressRIBSD2.initialize(this, locktime, size, version, vin, vout);ListConfirmedTransactionsByAddressRIBSEC.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);ListConfirmedTransactionsByAddressRIBSE.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);ListConfirmedTransactionsByAddressRIBSBSC.initialize(this, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);ListConfirmedTransactionsByAddressRIBSZ.initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
        ListConfirmedTransactionsByAddressRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
        obj['contract'] = contract;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
        obj['bindingSig'] = bindingSig;
        obj['expiryHeight'] = expiryHeight;
        obj['joinSplitPubKey'] = joinSplitPubKey;
        obj['joinSplitSig'] = joinSplitSig;
        obj['overwintered'] = overwintered;
        obj['vJoinSplit'] = vJoinSplit;
        obj['vShieldedOutput'] = vShieldedOutput;
        obj['vShieldedSpend'] = vShieldedSpend;
        obj['valueBalance'] = valueBalance;
        obj['versionGroupId'] = versionGroupId;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBS} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBS} The populated <code>ListConfirmedTransactionsByAddressRIBS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListConfirmedTransactionsByAddressRIBS();
            ListConfirmedTransactionsByAddressRIBSB.constructFromObject(data, obj);
            ListConfirmedTransactionsByAddressRIBSBC.constructFromObject(data, obj);
            ListConfirmedTransactionsByAddressRIBSL.constructFromObject(data, obj);
            ListConfirmedTransactionsByAddressRIBSD.constructFromObject(data, obj);
            ListConfirmedTransactionsByAddressRIBSD2.constructFromObject(data, obj);
            ListConfirmedTransactionsByAddressRIBSEC.constructFromObject(data, obj);
            ListConfirmedTransactionsByAddressRIBSE.constructFromObject(data, obj);
            ListConfirmedTransactionsByAddressRIBSBSC.constructFromObject(data, obj);
            ListConfirmedTransactionsByAddressRIBSZ.constructFromObject(data, obj);

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListConfirmedTransactionsByAddressRIBSZVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [GetTransactionDetailsByTransactionIDRIBSZVoutInner]);
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ListConfirmedTransactionsByAddressRIBSBSCGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
            if (data.hasOwnProperty('bindingSig')) {
                obj['bindingSig'] = ApiClient.convertToType(data['bindingSig'], 'String');
            }
            if (data.hasOwnProperty('expiryHeight')) {
                obj['expiryHeight'] = ApiClient.convertToType(data['expiryHeight'], 'Number');
            }
            if (data.hasOwnProperty('joinSplitPubKey')) {
                obj['joinSplitPubKey'] = ApiClient.convertToType(data['joinSplitPubKey'], 'String');
            }
            if (data.hasOwnProperty('joinSplitSig')) {
                obj['joinSplitSig'] = ApiClient.convertToType(data['joinSplitSig'], 'String');
            }
            if (data.hasOwnProperty('overwintered')) {
                obj['overwintered'] = ApiClient.convertToType(data['overwintered'], 'Boolean');
            }
            if (data.hasOwnProperty('vJoinSplit')) {
                obj['vJoinSplit'] = ApiClient.convertToType(data['vJoinSplit'], [ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner]);
            }
            if (data.hasOwnProperty('vShieldedOutput')) {
                obj['vShieldedOutput'] = ApiClient.convertToType(data['vShieldedOutput'], [GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner]);
            }
            if (data.hasOwnProperty('vShieldedSpend')) {
                obj['vShieldedSpend'] = ApiClient.convertToType(data['vShieldedSpend'], [GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner]);
            }
            if (data.hasOwnProperty('valueBalance')) {
                obj['valueBalance'] = ApiClient.convertToType(data['valueBalance'], 'String');
            }
            if (data.hasOwnProperty('versionGroupId')) {
                obj['versionGroupId'] = ApiClient.convertToType(data['versionGroupId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressRIBS.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListConfirmedTransactionsByAddressRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListConfirmedTransactionsByAddressRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListConfirmedTransactionsByAddressRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListConfirmedTransactionsByAddressRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListConfirmedTransactionsByAddressRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListConfirmedTransactionsByAddressRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListConfirmedTransactionsByAddressRIBS.prototype['versionGroupId'] = undefined;


// Implement ListConfirmedTransactionsByAddressRIBSB interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressRIBSB.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBSB.prototype['size'] = undefined;
/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */
ListConfirmedTransactionsByAddressRIBSB.prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBSB.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBSB.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBSB.prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSBC interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBCVinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBSBC.prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSL interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressRIBSL.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBSL.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListConfirmedTransactionsByAddressRIBSL.prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBSL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSLVinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBSL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBSL.prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSD interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressRIBSD.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBSD.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBSD.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSDVinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBSD.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBSD.prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSD2 interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressRIBSD2.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBSD2.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBSD2.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSD2VinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBSD2.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSD2VoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBSD2.prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSEC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSECGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['transactionStatus'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSE interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBSE.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressRIBSE.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSEGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressRIBSE.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressRIBSE.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBSE.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressRIBSE.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBSE.prototype['transactionStatus'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSBSC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['transactionStatus'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['joinSplitSig'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['valueBalance'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBSZ.prototype['vout'] = undefined;




export default ListConfirmedTransactionsByAddressRIBS;

