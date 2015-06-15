require('../pragma');
var assert = require('assert');

describe('Numbers', function() {

  describe('#toZero()', function() {
    it('should convert every number to zero', function() {
      assert.equal((-9999.9999).toZero(), 0);
      assert.equal((-9999).toZero(), 0);
      assert.equal((-2).toZero(), 0);
      assert.equal((-1).toZero(), 0);
      assert.equal((0).toZero(), 0);
      assert.equal((1).toZero(), 0);
      assert.equal((2).toZero(), 0);
      assert.equal((9999).toZero(), 0);
      assert.equal((9999.9999).toZero(), 0);
    });
  });

  describe('#toOne()', function() {
    it('should convert every number to one', function() {
      assert.equal((-9999.9999).toOne(), 1);
      assert.equal((-9999).toOne(), 1);
      assert.equal((-2).toOne(), 1);
      assert.equal((-1).toOne(), 1);
      assert.equal((0).toOne(), 1);
      assert.equal((1).toOne(), 1);
      assert.equal((2).toOne(), 1);
      assert.equal((9999).toOne(), 1);
      assert.equal((9999.9999).toOne(), 1);
    });
  });

});