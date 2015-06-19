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
      assert.equal(Number.isFinite(-Infinity), false);
      assert.equal(Number.isFinite(-9999e9999), false);
      assert.equal(Number.isFinite(-9999.9999), true);
      assert.equal(Number.isFinite(-9999), true);
      assert.equal(Number.isFinite(-2), true);
      assert.equal(Number.isFinite(-1), true);
      assert.equal(Number.isFinite(-0), true);
      assert.equal(Number.isFinite(NaN), false);
      assert.equal(Number.isFinite(0), true);
      assert.equal(Number.isFinite(1), true);
      assert.equal(Number.isFinite(2), true);
      assert.equal(Number.isFinite(9999), true);
      assert.equal(Number.isFinite(9999.9999), true);
      assert.equal(Number.isFinite(9999e9999), false);
      assert.equal(Number.isFinite(Infinity), false);
    });
  });


  describe('#isFiniteNumber()', function() {
    it('should return true on finite number', function() {
      assert.equal((-Infinity).isFiniteNumber(), false);
      assert.equal((-9999e9999).isFiniteNumber(), false);
      assert.equal((-9999.9999).isFiniteNumber(), true);
      assert.equal((-9999).isFiniteNumber(), true);
      assert.equal((-2).isFiniteNumber(), true);
      assert.equal((-1).isFiniteNumber(), true);
      assert.equal((-0).isFiniteNumber(), true);
      assert.equal((NaN).isFiniteNumber(), false);
      assert.equal((0).isFiniteNumber(), true);
      assert.equal((1).isFiniteNumber(), true);
      assert.equal((2).isFiniteNumber(), true);
      assert.equal((9999).isFiniteNumber(), true);
      assert.equal((9999.9999).isFiniteNumber(), true);
      assert.equal((9999e9999).isFiniteNumber(), false);
      assert.equal((Infinity).isFiniteNumber(), false);
    });
  });


  describe('#isNotFiniteNumber()', function() {
    it('should return true on not finite number', function() {
      assert.equal((-Infinity).isNotFiniteNumber(), true);
      assert.equal((-9999e9999).isNotFiniteNumber(), true);
      assert.equal((-9999.9999).isNotFiniteNumber(), false);
      assert.equal((-9999).isNotFiniteNumber(), false);
      assert.equal((-2).isNotFiniteNumber(), false);
      assert.equal((-1).isNotFiniteNumber(), false);
      assert.equal((-0).isNotFiniteNumber(), false);
      assert.equal((NaN).isNotFiniteNumber(), true);
      assert.equal((0).isNotFiniteNumber(), false);
      assert.equal((1).isNotFiniteNumber(), false);
      assert.equal((2).isNotFiniteNumber(), false);
      assert.equal((9999).isNotFiniteNumber(), false);
      assert.equal((9999.9999).isNotFiniteNumber(), false);
      assert.equal((9999e9999).isNotFiniteNumber(), true);
      assert.equal((Infinity).isNotFiniteNumber(), true);
    });
  });

  /* Built-in */
  describe('#isInteger()', function() {
    it('should return true on integer number in argument', function() {
      assert.equal(Number.isInteger(-Infinity), false);
      assert.equal(Number.isInteger(-9999e9999), false);
      assert.equal(Number.isInteger(-9999.9999), false);
      assert.equal(Number.isInteger(-9999), true);
      assert.equal(Number.isInteger(-2), true);
      assert.equal(Number.isInteger(-1), true);
      assert.equal(Number.isInteger(-0), true);
      assert.equal(Number.isInteger(NaN), false);
      assert.equal(Number.isInteger(0), true);
      assert.equal(Number.isInteger(1), true);
      assert.equal(Number.isInteger(2), true);
      assert.equal(Number.isInteger(9999), true);
      assert.equal(Number.isInteger(9999.9999), false);
      assert.equal(Number.isInteger(9999e9999), false);
      assert.equal(Number.isInteger(Infinity), false);
    });
  });


  describe('#isIntegerNumber()', function() {
    it('should return true on integer number', function() {
      assert.equal((-Infinity).isIntegerNumber(), false);
      assert.equal((-9999e9999).isIntegerNumber(), false);
      assert.equal((-9999.9999).isIntegerNumber(), false);
      assert.equal((-9999).isIntegerNumber(), true);
      assert.equal((-2).isIntegerNumber(), true);
      assert.equal((-1).isIntegerNumber(), true);
      assert.equal((-0).isIntegerNumber(), true);
      assert.equal((NaN).isIntegerNumber(), false);
      assert.equal((0).isIntegerNumber(), true);
      assert.equal((1).isIntegerNumber(), true);
      assert.equal((2).isIntegerNumber(), true);
      assert.equal((9999).isIntegerNumber(), true);
      assert.equal((9999.9999).isIntegerNumber(), false);
      assert.equal((9999e9999).isIntegerNumber(), false);
      assert.equal((Infinity).isIntegerNumber(), false);
    });
  });


  /* Built-in */
  describe('#isNaN()', function() {
    it('should return true on NaN in argument', function() {
      assert.equal(Number.isNaN(-Infinity), false);
      assert.equal(Number.isNaN(-9999e9999), false);
      assert.equal(Number.isNaN(-9999.9999), false);
      assert.equal(Number.isNaN(-9999), false);
      assert.equal(Number.isNaN(-2), false);
      assert.equal(Number.isNaN(-1), false);
      assert.equal(Number.isNaN(-0), false);
      assert.equal(Number.isNaN(-0 / 0), true);
      assert.equal(Number.isNaN(NaN), true);
      assert.equal(Number.isNaN(0 / 0), true);
      assert.equal(Number.isNaN(0), false);
      assert.equal(Number.isNaN(1), false);
      assert.equal(Number.isNaN(2), false);
      assert.equal(Number.isNaN(9999), false);
      assert.equal(Number.isNaN(9999.9999), false);
      assert.equal(Number.isNaN(9999e9999), false);
      assert.equal(Number.isNaN(Infinity), false);
    });
  });


  /* Built-in */
  describe('#isNotNumber()', function() {
    it('should return true on NaN', function() {
      assert.equal((-Infinity).isNotNumber(), false);
      assert.equal((-9999e9999).isNotNumber(), false);
      assert.equal((-9999.9999).isNotNumber(), false);
      assert.equal((-9999).isNotNumber(), false);
      assert.equal((-2).isNotNumber(), false);
      assert.equal((-1).isNotNumber(), false);
      assert.equal((-0).isNotNumber(), false);
      assert.equal((-0 / 0).isNotNumber(), true);
      assert.equal((NaN).isNotNumber(), true);
      assert.equal((0 / 0).isNotNumber(), true);
      assert.equal((0).isNotNumber(), false);
      assert.equal((1).isNotNumber(), false);
      assert.equal((2).isNotNumber(), false);
      assert.equal((9999).isNotNumber(), false);
      assert.equal((9999.9999).isNotNumber(), false);
      assert.equal((9999e9999).isNotNumber(), false);
      assert.equal((Infinity).isNotNumber(), false);
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