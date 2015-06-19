/**
 * Boolean test
 */
'use strict';


require('../pragma');
var assert = require('assert');


describe('Booleans', function() {

  /* Built-in */
  describe('#toString()', function() {
    it('should return string according to boolean value', function() {
      assert.deepEqual((true).toString(), 'true');
      assert.deepEqual((false).toString(), 'false');
    });
  });

  describe('#toNumber()', function() {
    it('should return number according to boolean value', function() {
      assert.deepEqual((true).toNumber(), 1);
      assert.deepEqual((false).toNumber(), 0);
    });
  });

  describe('#toWord()', function() {
    it('should return "yes" or "no" depending on boolean value', function() {
      assert.deepEqual((true).toWord(), 'yes');
      assert.deepEqual((false).toWord(), 'no');
    });
  });

});