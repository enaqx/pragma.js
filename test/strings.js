/**
 * String test
 */
'use strict';


require('../pragma');
var assert = require('assert');


describe('Strings', function() {

  /* Built-in */
  describe('#length', function() {
    it('is the length of array', function() {
      assert.equal('Hello World!'.length, 12);
      assert.equal('123'.length, 3);
      assert.equal('abcd'.length, 4);
    });
  });

  describe('#getLength()', function() {
    it('is the length of array', function() {
      assert.equal('Hello World!'.getLength(), 12);
      assert.equal('123'.getLength(), 3);
      assert.equal('abcd'.getLength(), 4);
    });
  });


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