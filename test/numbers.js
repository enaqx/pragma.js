/**
 * Number Test
 */
'use strict';


var assert = require('assert');
require('../pragma');


describe('Numbers', function() {

  describe('#isEven()', function() {
    it('should return true then number is even', function() {
      // assert.equal((2).isEven());
    });
  });


  /* Built-in */
  describe('#isFinite()', function() {
    it('should return true on finite number in argument', function() {
      assert(!isFinite(-Infinity));
      assert(isFinite(-2e64));
      assert(isFinite(-9999.9999));
      assert(isFinite(-9999));
      assert(isFinite(-2));
      assert(isFinite(-1));
      assert(isFinite(-0));
      assert(!isFinite(NaN));
      assert(isFinite(0));
      assert(isFinite(1));
      assert(isFinite(2));
      assert(isFinite(9999));
      assert(isFinite(9999.9999));
      assert(isFinite(2e64));
      assert(!isFinite(Infinity));
    });
  });


  describe('#isFiniteNumber()', function() {
    it('should return true on finite number', function() {
      assert(!(-Infinity).isFiniteNumber());
      assert((-2e64).isFiniteNumber());
      assert((-9999.9999).isFiniteNumber());
      assert((-9999).isFiniteNumber());
      assert((-2).isFiniteNumber());
      assert((-1).isFiniteNumber());
      assert((-0).isFiniteNumber());
      assert(!(NaN).isFiniteNumber());
      assert((0).isFiniteNumber());
      assert((1).isFiniteNumber());
      assert((2).isFiniteNumber());
      assert((9999).isFiniteNumber());
      assert((9999.9999).isFiniteNumber());
      assert((2e64).isFiniteNumber());
      assert(!(Infinity).isFiniteNumber());
    });
  });


  describe('#toZero()', function() {
    it('should convert every number to zero', function() {
      assert.equal((-Infinity).toZero(), 0);
      assert.equal((-2e64).toZero(), 0);
      assert.equal((-9999.9999).toZero(), 0);
      assert.equal((-9999).toZero(), 0);
      assert.equal((-2).toZero(), 0);
      assert.equal((-1).toZero(), 0);
      assert.equal((-0).toZero(), 0);
      assert.equal((NaN).toZero(), 0);
      assert.equal((0).toZero(), 0);
      assert.equal((1).toZero(), 0);
      assert.equal((2).toZero(), 0);
      assert.equal((9999).toZero(), 0);
      assert.equal((9999.9999).toZero(), 0);
      assert.equal((2e64).toZero(), 0);
      assert.equal((Infinity).toZero(), 0);
    });
  });


  describe('#toOne()', function() {
    it('should convert every number to one', function() {
      assert.equal((-Infinity).toOne(), 1);
      assert.equal((-9999.9999).toOne(), 1);
      assert.equal((-9999).toOne(), 1);
      assert.equal((-2).toOne(), 1);
      assert.equal((-1).toOne(), 1);
      assert.equal((0).toOne(), 1);
      assert.equal((NaN).toOne(), 1);
      assert.equal((-0).toOne(), 1);
      assert.equal((1).toOne(), 1);
      assert.equal((2).toOne(), 1);
      assert.equal((9999).toOne(), 1);
      assert.equal((9999.9999).toOne(), 1);
      assert.equal((Infinity).toOne(), 1);
    });
  });

});