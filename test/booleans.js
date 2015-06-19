/**
 * Boolean test
 */
'use strict';


require('../pragma');
var assert = require('assert');


describe('Booleans', function() {

  /* Built-in */
  describe('#toString', function() {
    it('should return string according boolean value', function() {
      assert.deepEqual((true).toString(), 'true');
      assert.deepEqual((false).toString(), 'false');
    });
  });


  describe('#toWord', function() {
    it('should return "yes" or "no" depending on boolean value', function() {
      assert.deepEqual((true).toWord(), 'yes');
      assert.deepEqual((false).toWord(), 'no');
    });
  });

});