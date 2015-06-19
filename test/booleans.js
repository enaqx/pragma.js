/**
 * Boolean test
 */
'use strict';


require('../pragma');
var assert = require('assert');


describe('Booleans', function() {

  describe('#toWord', function() {
    it('should return "yes" or "no" depending on boolean value', function() {
      assert.deepEqual((true).toWord(), 'yes');
      assert.deepEqual((false).toWord(), 'no');
    });
  });

});