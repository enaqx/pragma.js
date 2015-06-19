/**
 * Number test
 */
'use strict';


var assert = require('assert');
require('../pragma');


describe('Numbers', function() {

  describe('#abs()', function() {
    it('should return the absolute value of a number,n', function() {
      assert.equal((-Infinity).abs(), Infinity);
      assert.equal((-9999e9999).abs(), Infinity);
      assert.equal((-9999.9999).abs(), 9999.9999);
      assert.equal((-9999).abs(), 9999);
      assert.equal((-2).abs(), 2);
      assert.equal((-1).abs(), 1);
      assert.equal((-0).abs(), 0);
      assert.deepEqual((NaN).abs().toString(), NaN.toString());
      assert.equal((0).abs(), 0);
      assert.equal((1).abs(), 1);
      assert.equal((2).abs(), 2);
      assert.equal((9999).abs(), 9999);
      assert.equal((9999.9999).abs(), 9999.9999);
      assert.equal((9999e9999).abs(), Infinity);
      assert.equal((Infinity).abs(), Infinity);
    });
  });

  describe('#isEven()', function() {
    it('should return true then number is even', function() {
      assert.equal((-Infinity).isEven(), undefined);
      assert.equal((-9999e9999).isEven(), undefined);
      assert.equal((-9999.9999).isEven(), undefined);
      assert.equal((-9999).isEven(), false);
      assert.equal((-2).isEven(), true);
      assert.equal((-1).isEven(), false);
      assert.equal((-0).isEven(), true);
      assert.equal((NaN).isEven(), undefined);
      assert.equal((0).isEven(), true);
      assert.equal((1).isEven(), false);
      assert.equal((2).isEven(), true);
      assert.equal((9999).isEven(), false);
      assert.equal((9999.9999).isEven(), undefined);
      assert.equal((9999e9999).isEven(), undefined);
      assert.equal((Infinity).isEven(), undefined);
    });
  });


  describe('#isOdd()', function() {
    it('should return true then number is odd', function() {
      assert.equal((-Infinity).isOdd(), undefined);
      assert.equal((-9999e9999).isOdd(), undefined);
      assert.equal((-9999.9999).isOdd(), undefined);
      assert.equal((-9999).isOdd(), true);
      assert.equal((-2).isOdd(), false);
      assert.equal((-1).isOdd(), true);
      assert.equal((-0).isOdd(), false);
      assert.equal((NaN).isOdd(), undefined);
      assert.equal((0).isOdd(), false);
      assert.equal((1).isOdd(), true);
      assert.equal((2).isOdd(), false);
      assert.equal((9999).isOdd(), true);
      assert.equal((9999.9999).isOdd(), undefined);
      assert.equal((9999e9999).isOdd(), undefined);
      assert.equal((Infinity).isOdd(), undefined);
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


  /* Built-in */
  describe('#isNaN()', function() {
    it('should return true on NaN in argument', function() {
      assert(!Number.isNaN(-Infinity));
      assert(!Number.isNaN(-9999e9999));
      assert(!Number.isNaN(-9999.9999));
      assert(!Number.isNaN(-9999));
      assert(!Number.isNaN(-2));
      assert(!Number.isNaN(-1));
      assert(!Number.isNaN(-0));
      assert(Number.isNaN(-0 / 0));
      assert(Number.isNaN(NaN));
      assert(Number.isNaN(0 / 0));
      assert(!Number.isNaN(0));
      assert(!Number.isNaN(1));
      assert(!Number.isNaN(2));
      assert(!Number.isNaN(9999));
      assert(!Number.isNaN(9999.9999));
      assert(!Number.isNaN(9999e9999));
      assert(!Number.isNaN(Infinity));
    });
  });


  /* Built-in */
  describe('#isNotNumber()', function() {
    it('should return true on NaN', function() {
      assert(!(-Infinity).isNotNumber());
      assert(!(-9999e9999).isNotNumber());
      assert(!(-9999.9999).isNotNumber());
      assert(!(-9999).isNotNumber());
      assert(!(-2).isNotNumber());
      assert(!(-1).isNotNumber());
      assert(!(-0).isNotNumber());
      assert((-0 / 0).isNotNumber());
      assert((NaN).isNotNumber());
      assert((0 / 0).isNotNumber());
      assert(!(0).isNotNumber());
      assert(!(1).isNotNumber());
      assert(!(2).isNotNumber());
      assert(!(9999).isNotNumber());
      assert(!(9999.9999).isNotNumber());
      assert(!(9999e9999).isNotNumber());
      assert(!(Infinity).isNotNumber());
    });
  });


  describe('#parity()', function() {
    it('should return 0 on even and 1 on odd number', function() {
      assert.equal((-Infinity).parity(), undefined);
      assert.equal((-9999e9999).parity(), undefined);
      assert.equal((-9999.9999).parity(), undefined);
      assert.equal((-9999).parity(), 1);
      assert.equal((-2).parity(), 0);
      assert.equal((-1).parity(), 1);
      assert.equal((-0).parity(), 0);
      assert.equal((NaN).parity(), undefined);
      assert.equal((0).parity(), 0);
      assert.equal((1).parity(), 1);
      assert.equal((2).parity(), 0);
      assert.equal((9999).parity(), 1);
      assert.equal((9999.9999).parity(), undefined);
      assert.equal((9999e9999).parity(), undefined);
      assert.equal((Infinity).parity(), undefined);
    });
  });


  describe('#parityOfNumber()', function() {
    it('should return parity of number as string', function() {
      assert.equal((-Infinity).parityOfNumber(), undefined);
      assert.equal((-9999e9999).parityOfNumber(), undefined);
      assert.equal((-9999.9999).parityOfNumber(), undefined);
      assert.equal((-9999).parityOfNumber(), 'odd');
      assert.equal((-2).parityOfNumber(), 'even');
      assert.equal((-1).parityOfNumber(), 'odd');
      assert.equal((-0).parityOfNumber(), 'even');
      assert.equal((NaN).parityOfNumber(), undefined);
      assert.equal((0).parityOfNumber(), 'even');
      assert.equal((1).parityOfNumber(), 'odd');
      assert.equal((2).parityOfNumber(), 'even');
      assert.equal((9999).parityOfNumber(), 'odd');
      assert.equal((9999.9999).parityOfNumber(), undefined);
      assert.equal((9999e9999).parityOfNumber(), undefined);
      assert.equal((Infinity).parityOfNumber(), undefined);
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


  describe('#toDigitsArray()', function() {
    it('should return arrays of digits of the given number', function() {
      assert.equal((-Infinity).toDigitsArray(), undefined);
      assert.deepEqual((-9999e9999).toDigitsArray(), undefined);
      assert.deepEqual((-9999.9999).toDigitsArray(), [9, 9, 9, 9, 9, 9, 9, 9]);
      assert.deepEqual((-9999).toDigitsArray(), [9, 9, 9, 9]);
      assert.deepEqual((-2).toDigitsArray(), [2]);
      assert.deepEqual((-1).toDigitsArray(), [1]);
      assert.deepEqual((0).toDigitsArray(), [0]);
      assert.equal((NaN).toDigitsArray(), undefined);
      assert.deepEqual((-0).toDigitsArray(), [0]);
      assert.deepEqual((1).toDigitsArray(), [1]);
      assert.deepEqual((2).toDigitsArray(), [2]);
      assert.deepEqual((9999).toDigitsArray(), [9, 9, 9, 9]);
      assert.deepEqual((9999.9999).toDigitsArray(), [9, 9, 9, 9, 9, 9, 9, 9]);
      assert.equal((9999e9999).toDigitsArray(), undefined);
      assert.equal((Infinity).toDigitsArray(), undefined);
    });
  });

});