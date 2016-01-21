/**
 * Number test
 */

import { assert } from 'chai';
import { pragmaNumbers } from '../pragma';

describe('Numbers', () => {

  describe('#abs()', () => {
    it('should return the absolute value of a number', () => {
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


  describe('#ceil()', () => {
    it('should return the smallest integer greater than or equal', () => {
      assert.equal((-Infinity).ceil(), -Infinity);
      assert.equal((-9999e9999).ceil(), -Infinity);
      assert.equal((-9999.9999).ceil(), -9999);
      assert.equal((-9999).ceil(), -9999);
      assert.equal((-2.0001).ceil(), -2);
      assert.equal((-2).ceil(), -2);
      assert.equal((-1).ceil(), -1);
      assert.equal((-.95).ceil(), -0);
      assert.equal((-0).ceil(), -0);
      assert.deepEqual((NaN).ceil().toString(), NaN.ceil().toString());
      assert.equal((0).ceil(), 0);
      assert.equal((.95).ceil(), 1);
      assert.equal((1).ceil(), 1);
      assert.equal((2).ceil(), 2);
      assert.equal((2.0001).ceil(), 3);
      assert.equal((9999).ceil(), 9999);
      assert.equal((9999.9999).ceil(), 10000);
      assert.equal((9999e9999).ceil(), Infinity);
      assert.equal((Infinity).ceil(), Infinity);
    })
  });


  describe('#floor()', () => {
    it('should return the largest integer less than or equal', () => {
      assert.equal((-Infinity).floor(), -Infinity);
      assert.equal((-9999e9999).floor(), -Infinity);
      assert.equal((-9999.9999).floor(), -10000);
      assert.equal((-9999).floor(), -9999);
      assert.equal((-2.0001).floor(), -3);
      assert.equal((-2).floor(), -2);
      assert.equal((-1).floor(), -1);
      assert.equal((-.95).floor(), -1);
      assert.equal((-0).floor(), -0);
      assert.deepEqual((NaN).floor().toString(), NaN.floor().toString());
      assert.equal((0).floor(), 0);
      assert.equal((.95).floor(), 0);
      assert.equal((1).floor(), 1);
      assert.equal((2).floor(), 2);
      assert.equal((2.0001).floor(), 2);
      assert.equal((9999).floor(), 9999);
      assert.equal((9999.9999).floor(), 9999);
      assert.equal((9999e9999).floor(), Infinity);
      assert.equal((Infinity).floor(), Infinity);
    })
  });


  describe('#round()', () => {
    it('should return given number rounded to the nearest integer', () => {
      assert.equal((-Infinity).round(), -Infinity);
      assert.equal((-9999e9999).round(), -Infinity);
      assert.equal((-9999.9999).round(), -10000);
      assert.equal((-9999).round(), -9999);
      assert.equal((-2.0001).round(), -2);
      assert.equal((-2).round(), -2);
      assert.equal((-1).round(), -1);
      assert.equal((-.95).round(), -1);
      assert.equal((-0).round(), -0);
      assert.deepEqual((NaN).round().toString(), NaN.round().toString());
      assert.equal((0).round(), 0);
      assert.equal((.95).round(), 1);
      assert.equal((1).round(), 1);
      assert.equal((2).round(), 2);
      assert.equal((2.0001).round(), 2);
      assert.equal((9999).round(), 9999);
      assert.equal((9999.9999).round(), 10000);
      assert.equal((9999e9999).round(), Infinity);
      assert.equal((Infinity).round(), Infinity);
    })
  });


  describe('#negate()', () => {
    it('should return negate of number', () => {
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


  describe('#countFromTo()', () => {
    it('should return array from given number to argument value', () => {
      assert.equal((-Infinity).countFrom(), undefined);
      assert.equal((-9999e9999).countFrom(), undefined);
      assert.equal((-9999.9999).countFrom(), undefined);
      assert.deepEqual((-8).countFrom(-2), [-2, -3, -4, -5, -6, -7, -8]);
      assert.deepEqual((-4).countFrom(-2), [-2, -3, -4]);
      assert.deepEqual((-2).countFrom(), [0, -1, -2]);
      assert.deepEqual((-1).countFrom(), [0, -1]);
      assert.deepEqual((-0).countFrom(), [0]);
      assert.equal((NaN).countFrom(), undefined);
      assert.deepEqual((0).countFrom(), [0]);
      assert.deepEqual((1).countFrom(), [0, 1]);
      assert.deepEqual((2).countFrom(), [0, 1, 2]);
      assert.deepEqual((4).countFrom(2), [2, 3, 4]);
      assert.deepEqual((4).countFrom(-2), [-2, -1, 0, 1, 2, 3, 4]);
      assert.deepEqual((8).countFrom(), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
      assert.equal((9999.9999).countFrom(), undefined);
      assert.equal((9999e9999).countFrom(), undefined);
      assert.equal((Infinity).countFrom(), undefined);

    });
  });


  describe('#isEven()', () => {
    it('should return true then number is even', () => {
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


  describe('#isOdd()', () => {
    it('should return true then number is odd', () => {
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
  describe('#isFinite()', () => {
    it('should return true on finite number in argument', () => {
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


  describe('#isFiniteNumber()', () => {
    it('should return true on finite number', () => {
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


  describe('#isNotFiniteNumber()', () => {
    it('should return true on not finite number', () => {
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
  describe('#isInteger()', () => {
    it('should return true on integer number in argument', () => {
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


  describe('#isIntegerNumber()', () => {
    it('should return true on integer number', () => {
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


  describe('#isNotIntegerNumber()', () => {
    it('should return false on integer number', () => {
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
  describe('#isNaN()', () => {
    it('should return true on NaN in argument', () => {
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
  describe('#isNotNumber()', () => {
    it('should return true on NaN', () => {
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


  describe('#isPrime()', () => {
    it('should return true on prime number', () => {
      assert.equal((-Infinity).isPrime(), undefined);
      assert.equal((-9999e9999).isPrime(), undefined);
      assert.equal((-9999.9999).isPrime(), undefined);
      assert.equal((-104729).isPrime(), undefined);
      assert.equal((-237).isPrime(), undefined);
      assert.equal((-137).isPrime(), undefined);
      assert.equal((-2).isPrime(), undefined);
      assert.equal((-1).isPrime(), undefined);
      assert.equal((-0).isPrime(), undefined);
      assert.equal((NaN).isPrime(), undefined);
      assert.equal((0).isPrime(), undefined);
      assert.equal((1).isPrime(), false);
      assert.equal((2).isPrime(), true);
      assert.equal((137).isPrime(), true);
      assert.equal((237).isPrime(), false);
      assert.equal((104729).isPrime(), true);
      assert.equal((9999.9999).isPrime(), undefined);
      assert.equal((9999e9999).isPrime(), undefined);
      assert.equal((Infinity).isPrime(), undefined);
    });
  });


  describe('#isPositive()', () => {
    it('should return true on positive number', () => {
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


  describe('#isNegative()', () => {
    it('should return true on negative number', () => {
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


  describe('#parity()', () => {
    it('should return 0 on even and 1 on odd number', () => {
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


  describe('#parityOfNumber()', () => {
    it('should return parity of number as string', () => {
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


  describe('#toZero()', () => {
    it('should convert every number to zero', () => {
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


  describe('#toOne()', () => {
    it('should convert every number to one', () => {
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


  describe('#isZero()', () => {
    it('should convert every number to zero', () => {
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


  describe('#isOne()', () => {
    it('should convert every number to one', () => {
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


  /* Built-in */
  describe('#parseFloat()', () => {
    it('should parse a string and return a floating point number', () => {
      assert.equal(parseFloat('3.14'), 3.14);
      assert.equal(parseFloat('314e-2'), 3.14);
      assert.equal(parseFloat('0.0314E+2'), 3.14);
      assert.equal(parseFloat('3.14more non-digit characters'), 3.14);
      assert.equal(parseFloat('FF2').toString(), NaN.toString());
    });
  });


  /* Built-in */
  describe('#parseInt()', () => {
    it('should parse a string and return an integer', () => {
      assert.equal(parseInt('0xF', 16), 15);
      assert.equal(parseInt('F', 16), 15);
      assert.equal(parseInt('17', 8), 15);
      assert.equal(parseInt('015', 10), 15);
      assert.equal(parseInt('Hello', 8).toString(), NaN.toString());
      assert.equal(parseInt('546', 2).toString(), NaN.toString());
      assert.equal(parseInt('-F', 16), -15);
      assert.equal(parseInt('-0F', 16), -15);
      assert.equal(parseInt('-0XF', 16), -15);
      assert.equal(parseInt(-15.1, 10), -15);
    });
  });


  describe('#toDigitsArray()', () => {
    it('should return arrays of digits of the given number', () => {
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
  describe('#toString()', () => {
    it('should returns a string representing the number', () => {
      assert.deepEqual((-Infinity).toString(), '-Infinity');
      assert.deepEqual((-9999e9999).toString(), '-Infinity');
      assert.deepEqual((-9999.9999).toString(), '-9999.9999');
      assert.deepEqual((-9999).toString(), '-9999');
      assert.deepEqual((-254).toString(16), '-fe');
      assert.deepEqual((-10).toString(2), '-1010');
      assert.deepEqual((-2).toString(), '-2');
      assert.deepEqual((-1).toString(), '-1');
      assert.deepEqual((0).toString(), '0');
      assert.deepEqual((NaN).toString(), 'NaN');
      assert.deepEqual((-0).toString(), '0');
      assert.deepEqual((1).toString(), '1');
      assert.deepEqual((2).toString(), '2');
      assert.deepEqual((10).toString(2), '1010');
      assert.deepEqual((254).toString(16), 'fe');
      assert.deepEqual((9999).toString(), '9999');
      assert.deepEqual((9999.9999).toString(), '9999.9999');
      assert.deepEqual((9999e9999).toString(), 'Infinity');
      assert.deepEqual((Infinity).toString(), 'Infinity');
    });
  });

});
