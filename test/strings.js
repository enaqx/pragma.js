/**
 * String test
 */

import { assert } from 'chai';
import { pragmaStrings } from '../pragma';

describe('Strings', () => {

  describe('#eval()', () => {
    it('should evaluate code of this string', () => {
      assert.equal('1 + 1'.eval(), 2);
      assert.deepEqual('new String("1 + 1")'.eval().valueOf(), '1 + 1');
      assert.equal('var x = 5; var z; if (x == 5) z = 42;'.eval(), 42);
    });
  });


  describe('#encodeURI()', () => {
    it('should encode URI according to RFC3986', () => {
      assert.deepEqual('my test.asp?name=ståle&car=saab'
            .encodeURI(), 'my%20test.asp?name=st%C3%A5le&car=saab');
    });
  });


  describe('#encodeURIComponent()', () => {
    it('should encode URI component according to RFC3986', () => {
      assert.deepEqual('http://w3schools.com/my test.asp?name=ståle&car=saab'
            .encodeURIComponent(), 'http%3A%2F%2Fw3schools.com%2Fmy%20test.a'
                        + 'sp%3Fname%3Dst%C3%A5le%26car%3Dsaab');
    });
  });


  describe('#decodeURI()', () => {
    it('should decode URI according to RFC3986', () => {
      assert.deepEqual('my%20test.asp?name=st%C3%A5le&car=saab'
        .decodeURI(), 'my test.asp?name=ståle&car=saab');
    });
  });


  describe('#decodeURIComponent()', () => {
    it('should decode URI component according to RFC3986', () => {
      assert.deepEqual('JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B'
            .decodeURIComponent(), 'JavaScript_шеллы');
    });
  });


  describe('#encodeURIComponent()', () => {
    it('should encode URI component according to RFC3986', () => {
      assert.deepEqual('http://w3schools.com/my test.asp?name=ståle&car=saab'
        .encodeURIComponent(), 'http%3A%2F%2Fw3schools.com%2Fmy%20test.a'
        + 'sp%3Fname%3Dst%C3%A5le%26car%3Dsaab');
    });
  });


  /* Built-in */
  describe('#length', () => {
    it('is the length of array', () => {
      assert.equal('Hello World!'.length, 12);
      assert.equal('123'.length, 3);
      assert.equal('abcd'.length, 4);
    });
  });

  describe('#getLength()', () => {
    it('should return the length of array', () => {
      assert.equal('Hello World!'.getLength(), 12);
      assert.equal('123'.getLength(), 3);
      assert.equal('abcd'.getLength(), 4);
    });
  });


  describe('#toNumber()', () => {
    it('should convert given string to a number', () => {
      assert.equal(('-Infinity').toNumber(), -Infinity);
      assert.equal(('-9999e9999').toNumber(), -Infinity);
      assert.equal(('-9999.9999').toNumber(), -9999.9999);
      assert.equal(('-9999').toNumber(), -9999);
      assert.equal(('-2').toNumber(), -2);
      assert.equal(('-1').toNumber(), -1);
      assert.equal(('-0').toNumber(), 0);
      assert.deepEqual(('NaN').toNumber().toString(), NaN.toString());
      assert.equal(('0').toNumber(), 0);
      assert.equal(('1').toNumber(), 1);
      assert.equal(('2').toNumber(), 2);
      assert.equal(('9999').toNumber(), 9999);
      assert.equal(('9999.9999').toNumber(), 9999.9999);
      assert.equal(('9999e9999').toNumber(), Infinity);
      assert.equal(('Infinity').toNumber(), Infinity);
    });
  });


  describe('#toNumeronym()', () => {
    it('should return numeronym of string', () => {
      assert.deepEqual(''.toNumeronym(), '');
      assert.deepEqual('hi'.toNumeronym(), 'hi');
      assert.deepEqual('internationalization'.toNumeronym(), 'i18n');
      assert.deepEqual('globalization'.toNumeronym(), 'g11n');
      assert.deepEqual('accessibility'.toNumeronym(), 'a11y');
    });
  });

});
