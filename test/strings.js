/**
 * String test
 */
'use strict';


require('../pragma');
var assert = require('assert');


describe('Strings', function() {

  describe('#toNumber()', function() {
    it('should convert given string to a number', function() {
      assert.equal(('-Infinity').toNumber(), -Infinity);
      assert.equal(('-9999e9999').toNumber(), -Infinity);
      assert.equal(('-9999.9999').toNumber(), -9999.9999);
      assert.equal(('-9999').toNumber(), -9999);
      assert.equal(('-2').toNumber(), -2);
      assert.equal(('-1').toNumber(), -1);
      assert.equal(('-0').toNumber(), 0);
      assert.deepEqual(('NaN').toNumber().toString(), NaN.toString());
      assert.equal(('0').toNumber(), 0);
      assert.equal(('1').toNumber(), 1);
      assert.equal(('2').toNumber(), 2);
      assert.equal(('9999').toNumber(), 9999);
      assert.equal(('9999.9999').toNumber(), 9999.9999);
      assert.equal(('9999e9999').toNumber(), Infinity);
      assert.equal(('Infinity').toNumber(), Infinity);
    });
  });

  describe('#toNumeronym()', function() {
    it('should return numeronym of string', function() {
      assert.deepEqual(''.toNumeronym(), '');
      assert.deepEqual('hi'.toNumeronym(), 'hi');
      assert.deepEqual('internationalization'.toNumeronym(), 'i18n');
      assert.deepEqual('globalization'.toNumeronym(), 'g11n');
      assert.deepEqual('accessibility'.toNumeronym(), 'a11y');
    });
  });

});