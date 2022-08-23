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
 * The ListHDWalletXPubYPubZPubTransactionsRISendersInner model module.
 * @module model/ListHDWalletXPubYPubZPubTransactionsRISendersInner
 * @version 1.7.3
 */
class ListHDWalletXPubYPubZPubTransactionsRISendersInner {
    /**
     * Constructs a new <code>ListHDWalletXPubYPubZPubTransactionsRISendersInner</code>.
     * @alias module:model/ListHDWalletXPubYPubZPubTransactionsRISendersInner
     * @param address {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
     * @param amount {String} Represents the amount sent by this address.
     * @param isMember {Boolean} Defines whether an address is a child address derived from the HD wallet (xPub, yPub, zPub) as boolean.
     */
    constructor(address, amount, isMember) { 
        
        ListHDWalletXPubYPubZPubTransactionsRISendersInner.initialize(this, address, amount, isMember);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount, isMember) { 
        obj['address'] = address;
        obj['amount'] = amount;
        obj['isMember'] = isMember;
    }

    /**
     * Constructs a <code>ListHDWalletXPubYPubZPubTransactionsRISendersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletXPubYPubZPubTransactionsRISendersInner} obj Optional instance to populate.
     * @return {module:model/ListHDWalletXPubYPubZPubTransactionsRISendersInner} The populated <code>ListHDWalletXPubYPubZPubTransactionsRISendersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListHDWalletXPubYPubZPubTransactionsRISendersInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('isMember')) {
                obj['isMember'] = ApiClient.convertToType(data['isMember'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} address
 */
ListHDWalletXPubYPubZPubTransactionsRISendersInner.prototype['address'] = undefined;

/**
 * Represents the amount sent by this address.
 * @member {String} amount
 */
ListHDWalletXPubYPubZPubTransactionsRISendersInner.prototype['amount'] = undefined;

/**
 * Defines whether an address is a child address derived from the HD wallet (xPub, yPub, zPub) as boolean.
 * @member {Boolean} isMember
 */
ListHDWalletXPubYPubZPubTransactionsRISendersInner.prototype['isMember'] = undefined;






export default ListHDWalletXPubYPubZPubTransactionsRISendersInner;

