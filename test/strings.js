require('../pragma');
var assert = require('assert');

describe('Strings', function() {

  describe('#numeronym()', function() {
    it('should return numeronym of string', function() {
      assert.deepEqual(''.numeronym(), '');
      assert.deepEqual('hi'.numeronym(), 'hi');
      assert.deepEqual('internationalization'.numeronym(), 'i18n');
      assert.deepEqual('globalization'.numeronym(), 'g11n');
      assert.deepEqual('accessibility'.numeronym(), 'a11y');
    });
  });

});