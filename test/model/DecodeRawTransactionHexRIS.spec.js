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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Cryptoapis);
  }
}(this, function(expect, Cryptoapis) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Cryptoapis.DecodeRawTransactionHexRIS();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DecodeRawTransactionHexRIS', function() {
    it('should create an instance of DecodeRawTransactionHexRIS', function() {
      // uncomment below and update the code to test DecodeRawTransactionHexRIS
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be.a(Cryptoapis.DecodeRawTransactionHexRIS);
    });

    it('should have the property locktime (base name: "locktime")', function() {
      // uncomment below and update the code to test the property locktime
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property transactionHash (base name: "transactionHash")', function() {
      // uncomment below and update the code to test the property transactionHash
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property vSize (base name: "vSize")', function() {
      // uncomment below and update the code to test the property vSize
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property vin (base name: "vin")', function() {
      // uncomment below and update the code to test the property vin
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property vout (base name: "vout")', function() {
      // uncomment below and update the code to test the property vout
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property approximateFee (base name: "approximateFee")', function() {
      // uncomment below and update the code to test the property approximateFee
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property approximateMinimumRequiredFee (base name: "approximateMinimumRequiredFee")', function() {
      // uncomment below and update the code to test the property approximateMinimumRequiredFee
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property gasLimit (base name: "gasLimit")', function() {
      // uncomment below and update the code to test the property gasLimit
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property gasPaidForData (base name: "gasPaidForData")', function() {
      // uncomment below and update the code to test the property gasPaidForData
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property gasPrice (base name: "gasPrice")', function() {
      // uncomment below and update the code to test the property gasPrice
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property inputData (base name: "inputData")', function() {
      // uncomment below and update the code to test the property inputData
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property maxFeePerGas (base name: "maxFeePerGas")', function() {
      // uncomment below and update the code to test the property maxFeePerGas
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property maxFeePriorityPerGas (base name: "maxFeePriorityPerGas")', function() {
      // uncomment below and update the code to test the property maxFeePriorityPerGas
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property r (base name: "r")', function() {
      // uncomment below and update the code to test the property r
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property recipient (base name: "recipient")', function() {
      // uncomment below and update the code to test the property recipient
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property s (base name: "s")', function() {
      // uncomment below and update the code to test the property s
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property v (base name: "v")', function() {
      // uncomment below and update the code to test the property v
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property expiryHeight (base name: "expiryHeight")', function() {
      // uncomment below and update the code to test the property expiryHeight
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property overwintered (base name: "overwintered")', function() {
      // uncomment below and update the code to test the property overwintered
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property saplinged (base name: "saplinged")', function() {
      // uncomment below and update the code to test the property saplinged
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property valueBalance (base name: "valueBalance")', function() {
      // uncomment below and update the code to test the property valueBalance
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

    it('should have the property versionGroupId (base name: "versionGroupId")', function() {
      // uncomment below and update the code to test the property versionGroupId
      //var instance = new Cryptoapis.DecodeRawTransactionHexRIS();
      //expect(instance).to.be();
    });

  });

}));
