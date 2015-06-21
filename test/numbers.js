/**
 * Number test
 */
'use strict';


var assert = require('assert');
require('../pragma');


describe('Numbers', function() {

  describe('#abs()', function() {
    it('should return the absolute value of a number', function() {
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


  describe('#negate()', function() {
    it('should return negate of number', function() {
      assert.equal((-Infinity).negate(), Infinity);
      assert.equal((-9999e9999).negate(), Infinity);
      assert.equal((-9999.9999).negate(), 9999.9999);
      assert.equal((-9999).negate(), 9999);
      assert.equal((-2).negate(), 2);
      assert.equal((-1).negate(), 1);
      assert.equal((-0).negate(), 0);
      assert.deepEqual((NaN).negate().toString(), NaN.toString());
      assert.equal((0).negate(), -0);
      assert.equal((1).negate(), -1);
      assert.equal((2).negate(), -2);
      assert.equal((9999).negate(), -9999);
      assert.equal((9999.9999).negate(), -9999.9999);
      assert.equal((9999e9999).negate(), -Infinity);
      assert.equal((Infinity).negate(), -Infinity);
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


  describe('#isNotIntegerNumber()', function() {
    it('should return false on integer number', function() {
      assert.equal((-Infinity).isNotIntegerNumber(), true);
      assert.equal((-9999e9999).isNotIntegerNumber(), true);
      assert.equal((-9999.9999).isNotIntegerNumber(), true);
      assert.equal((-9999).isNotIntegerNumber(), false);
      assert.equal((-2).isNotIntegerNumber(), false);
      assert.equal((-1).isNotIntegerNumber(), false);
      assert.equal((-0).isNotIntegerNumber(), false);
      assert.equal((NaN).isNotIntegerNumber(), true);
      assert.equal((0).isNotIntegerNumber(), false);
      assert.equal((1).isNotIntegerNumber(), false);
      assert.equal((2).isNotIntegerNumber(), false);
      assert.equal((9999).isNotIntegerNumber(), false);
      assert.equal((9999.9999).isNotIntegerNumber(), true);
      assert.equal((9999e9999).isNotIntegerNumber(), true);
      assert.equal((Infinity).isNotIntegerNumber(), true);
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


  describe('#isPrime()', function() {
    it('should return true on prime number', function() {
      assert.equal((-Infinity).isPrime(), undefined);
      assert.equal((-9999e9999).isPrime(), undefined);
      assert.equal((-9999.9999).isPrime(), undefined);
      assert.equal((2).isPrime(), true);
      assert.equal((137).isPrime(), true);
      assert.equal((237).isPrime(), false);
      assert.equal((9999.9999).isPrime(), undefined);
      assert.equal((9999e9999).isPrime(), undefined);
      assert.equal((Infinity).isPrime(), undefined);
    });
  });


  describe('#isPositive()', function() {
    it('should return true on positive number', function() {
      assert.equal((-Infinity).isPositive(), false);
      assert.equal((-9999e9999).isPositive(), false);
      assert.equal((-9999.9999).isPositive(), false);
      assert.equal((-9999).isPositive(), false);
      assert.equal((-2).isPositive(), false);
      assert.equal((-1).isPositive(), false);
      assert.equal((-0).isPositive(), undefined);
      assert.equal((-0 / 0).isPositive(), undefined);
      assert.equal((NaN).isPositive(), undefined);
      assert.equal((0 / 0).isPositive(), undefined);
      assert.equal((0).isPositive(), undefined);
      assert.equal((1).isPositive(), true);
      assert.equal((2).isPositive(), true);
      assert.equal((9999).isPositive(), true);
      assert.equal((9999.9999).isPositive(), true);
      assert.equal((9999e9999).isPositive(), true);
      assert.equal((Infinity).isPositive(), true);
    });
  });


  describe('#isNegative()', function() {
    it('should return true on negative number', function() {
      assert.equal((-Infinity).isNegative(), true);
      assert.equal((-9999e9999).isNegative(), true);
      assert.equal((-9999.9999).isNegative(), true);
      assert.equal((-9999).isNegative(), true);
      assert.equal((-2).isNegative(), true);
      assert.equal((-1).isNegative(), true);
      assert.equal((-0).isNegative(), undefined);
      assert.equal((-0 / 0).isNegative(), undefined);
      assert.equal((NaN).isNegative(), undefined);
      assert.equal((0 / 0).isNegative(), undefined);
      assert.equal((0).isNegative(), undefined);
      assert.equal((1).isNegative(), false);
      assert.equal((2).isNegative(), false);
      assert.equal((9999).isNegative(), false);
      assert.equal((9999.9999).isNegative(), false);
      assert.equal((9999e9999).isNegative(), false);
      assert.equal((Infinity).isNegative(), false);
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
      assert.equal((-0).toOne(), 1);
      assert.equal((NaN).toOne(), 1);
      assert.equal((0).toOne(), 1);
      assert.equal((1).toOne(), 1);
      assert.equal((2).toOne(), 1);
      assert.equal((9999).toOne(), 1);
      assert.equal((9999.9999).toOne(), 1);
      assert.equal((9999e9999).toOne(), 1);
      assert.equal((Infinity).toOne(), 1);
    });
  });


  describe('#isZero()', function() {
    it('should convert every number to zero', function() {
      assert.equal((-Infinity).isZero(), false);
      assert.equal((-9999e9999).isZero(), false);
      assert.equal((-9999.9999).isZero(), false);
      assert.equal((-9999).isZero(), false);
      assert.equal((-2).isZero(), false);
      assert.equal((-1).isZero(), false);
      assert.equal((-0).isZero(), true);
      assert.equal((NaN).isZero(), false);
      assert.equal((0).isZero(), true);
      assert.equal((1).isZero(), false);
      assert.equal((2).isZero(), false);
      assert.equal((9999).isZero(), false);
      assert.equal((9999.9999).isZero(), false);
      assert.equal((9999e9999).isZero(), false);
      assert.equal((Infinity).isZero(), false);
    });
  });


  describe('#isOne()', function() {
    it('should convert every number to one', function() {
      assert.equal((-Infinity).toOne(), 1);
      assert.equal((-9999e9999).toOne(), 1);
      assert.equal((-9999.9999).toOne(), 1);
      assert.equal((-9999).toOne(), 1);
      assert.equal((-2).toOne(), 1);
      assert.equal((-1).toOne(), 1);
      assert.equal((-0).toOne(), 1);
      assert.equal((NaN).toOne(), 1);
      assert.equal((0).toOne(), 1);
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
      assert.deepEqual((-0).toDigitsArray(), [0]);
      assert.equal((NaN).toDigitsArray(), undefined);
      assert.deepEqual((0).toDigitsArray(), [0]);
      assert.deepEqual((1).toDigitsArray(), [1]);
      assert.deepEqual((2).toDigitsArray(), [2]);
      assert.deepEqual((9999).toDigitsArray(), [9, 9, 9, 9]);
      assert.deepEqual((9999.9999).toDigitsArray(), [9, 9, 9, 9, 9, 9, 9, 9]);
      assert.equal((9999e9999).toDigitsArray(), undefined);
      assert.equal((Infinity).toDigitsArray(), undefined);
    });
  });


  /* Built-in */
  describe('#toString()', function() {
    it('should returns a string representing the number', function() {
      assert.deepEqual((-Infinity).toString(), '-Infinity');
      assert.deepEqual((-9999e9999).toString(), -Infinity);
      assert.deepEqual((-9999.9999).toString(), '-9999.9999');
      assert.deepEqual((-9999).toString(), '-9999');
      assert.deepEqual((-2).toString(), '-2');
      assert.deepEqual((-1).toString(), '-1');
      assert.deepEqual((0).toString(), '0');
      assert.deepEqual((NaN).toString(), 'NaN');
      assert.deepEqual((-0).toString(), '0');
      assert.deepEqual((1).toString(), '1');
      assert.deepEqual((2).toString(), '2');
      assert.deepEqual((9999).toString(), '9999');
      assert.deepEqual((9999.9999).toString(), '9999.9999');
      assert.deepEqual((9999e9999).toString(), 'Infinity');
      assert.deepEqual((Infinity).toString(), 'Infinity');
    });
  });

});