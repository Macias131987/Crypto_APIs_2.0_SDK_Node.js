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
    instance = new Cryptoapis.FeaturesApi();
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

  describe('FeaturesApi', function() {
    describe('broadcastLocallySignedTransaction', function() {
      it('should call broadcastLocallySignedTransaction successfully', function(done) {
        //uncomment below and update the code to test broadcastLocallySignedTransaction
        //instance.broadcastLocallySignedTransaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('decodeRawTransactionHex', function() {
      it('should call decodeRawTransactionHex successfully', function(done) {
        //uncomment below and update the code to test decodeRawTransactionHex
        //instance.decodeRawTransactionHex(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('decodeXAddress', function() {
      it('should call decodeXAddress successfully', function(done) {
        //uncomment below and update the code to test decodeXAddress
        //instance.decodeXAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses', function() {
      it('should call deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses successfully', function(done) {
        //uncomment below and update the code to test deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses
        //instance.deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('encodeXAddress', function() {
      it('should call encodeXAddress successfully', function(done) {
        //uncomment below and update the code to test encodeXAddress
        //instance.encodeXAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('estimateGasLimit', function() {
      it('should call estimateGasLimit successfully', function(done) {
        //uncomment below and update the code to test estimateGasLimit
        //instance.estimateGasLimit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('estimateTokenGasLimit', function() {
      it('should call estimateTokenGasLimit successfully', function(done) {
        //uncomment below and update the code to test estimateTokenGasLimit
        //instance.estimateTokenGasLimit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEIP1559FeeRecommendations', function() {
      it('should call getEIP1559FeeRecommendations successfully', function(done) {
        //uncomment below and update the code to test getEIP1559FeeRecommendations
        //instance.getEIP1559FeeRecommendations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateAddress', function() {
      it('should call validateAddress successfully', function(done) {
        //uncomment below and update the code to test validateAddress
        //instance.validateAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
