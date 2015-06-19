/**
 * String test
 */
'use strict';


require('../pragma');
var assert = require('assert');


describe('Strings', function() {

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