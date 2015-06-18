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
      assert(!Number.isFinite(-Infinity));
      assert(!Number.isFinite(-9999e9999));
      assert(Number.isFinite(-9999.9999));
      assert(Number.isFinite(-9999));
      assert(Number.isFinite(-2));
      assert(Number.isFinite(-1));
      assert(Number.isFinite(-0));
      assert(!Number.isFinite(NaN));
      assert(Number.isFinite(0));
      assert(Number.isFinite(1));
      assert(Number.isFinite(2));
      assert(Number.isFinite(9999));
      assert(Number.isFinite(9999.9999));
      assert(!Number.isFinite(9999e9999));
      assert(!Number.isFinite(Infinity));
    });
  });


  describe('#isFiniteNumber()', function() {
    it('should return true on finite number', function() {
      assert(!(-Infinity).isFiniteNumber());
      assert(!(-9999e9999).isFiniteNumber());
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
      assert(!(9999e9999).isFiniteNumber());
      assert(!(Infinity).isFiniteNumber());
    });
  });


    /* Built-in */
    describe('#isInteger()', function() {
      it('should return true on integer number in argument', function() {
        assert(!Number.isInteger(-Infinity));
        assert(!Number.isInteger(-9999e9999));
        assert(!Number.isInteger(-9999.9999));
        assert(Number.isInteger(-9999));
        assert(Number.isInteger(-2));
        assert(Number.isInteger(-1));
        assert(Number.isInteger(-0));
        assert(!Number.isInteger(NaN));
        assert(Number.isInteger(0));
        assert(Number.isInteger(1));
        assert(Number.isInteger(2));
        assert(Number.isInteger(9999));
        assert(!Number.isInteger(9999.9999));
        assert(!Number.isInteger(9999e9999));
        assert(!Number.isInteger(Infinity));
      });
    });


    describe('#isIntegerNumber()', function() {
      it('should return true on integer number', function() {
        assert(!(-Infinity).isIntegerNumber());
        assert(!(-9999e9999).isIntegerNumber());
        assert(!(-9999.9999).isIntegerNumber());
        assert((-9999).isIntegerNumber());
        assert((-2).isIntegerNumber());
        assert((-1).isIntegerNumber());
        assert((-0).isIntegerNumber());
        assert(!(NaN).isIntegerNumber());
        assert((0).isIntegerNumber());
        assert((1).isIntegerNumber());
        assert((2).isIntegerNumber());
        assert((9999).isIntegerNumber());
        assert(!(9999.9999).isIntegerNumber());
        assert(!(9999e9999).isIntegerNumber());
        assert(!(Infinity).isIntegerNumber());
      });
    });


  describe('#toZero()', function() {
    it('should convert every number to zero', function() {
      assert.equal((-Infinity).toZero(), 0);
      assert.equal((-9999e9999).toZero(), 0);
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
      assert.equal((9999e9999).toZero(), 0);
      assert.equal((Infinity).toZero(), 0);
    });
  });


  describe('#toOne()', function() {
    it('should convert every number to one', function() {
      assert.equal((-Infinity).toOne(), 1);
      assert.equal((-9999e9999).toOne(), 1);
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
      assert.equal((9999e9999).toOne(), 1);
      assert.equal((Infinity).toOne(), 1);
    });
  });

});