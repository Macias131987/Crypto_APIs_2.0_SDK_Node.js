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
    instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
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

  describe('GetAssetDetailsByAssetIDRIS', function() {
    it('should create an instance of GetAssetDetailsByAssetIDRIS', function() {
      // uncomment below and update the code to test GetAssetDetailsByAssetIDRIS
      //var instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
      //expect(instance).to.be.a(Cryptoapis.GetAssetDetailsByAssetIDRIS);
    });

    it('should have the property _1hourPriceChangeInPercentage (base name: "1HourPriceChangeInPercentage")', function() {
      // uncomment below and update the code to test the property _1hourPriceChangeInPercentage
      //var instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
      //expect(instance).to.be();
    });

    it('should have the property _1weekPriceChangeInPercentage (base name: "1WeekPriceChangeInPercentage")', function() {
      // uncomment below and update the code to test the property _1weekPriceChangeInPercentage
      //var instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
      //expect(instance).to.be();
    });

    it('should have the property _24hoursPriceChangeInPercentage (base name: "24HoursPriceChangeInPercentage")', function() {
      // uncomment below and update the code to test the property _24hoursPriceChangeInPercentage
      //var instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
      //expect(instance).to.be();
    });

    it('should have the property _24hoursTradingVolume (base name: "24HoursTradingVolume")', function() {
      // uncomment below and update the code to test the property _24hoursTradingVolume
      //var instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
      //expect(instance).to.be();
    });

    it('should have the property assetType (base name: "assetType")', function() {
      // uncomment below and update the code to test the property assetType
      //var instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
      //expect(instance).to.be();
    });

    it('should have the property circulatingSupply (base name: "circulatingSupply")', function() {
      // uncomment below and update the code to test the property circulatingSupply
      //var instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
      //expect(instance).to.be();
    });

    it('should have the property marketCapInUSD (base name: "marketCapInUSD")', function() {
      // uncomment below and update the code to test the property marketCapInUSD
      //var instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
      //expect(instance).to.be();
    });

    it('should have the property maxSupply (base name: "maxSupply")', function() {
      // uncomment below and update the code to test the property maxSupply
      //var instance = new Cryptoapis.GetAssetDetailsByAssetIDRIS();
      //expect(instance).to.be();
    });

  });

}));
