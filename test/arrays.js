/**
 * Array test
 */
'use strict';

require('../pragma');
var assert = require('assert');

describe('Arrays', function() {

  function firstArrayTest() {
    assert.equal([].first(), undefined);
    assert.equal([1, 2, 3].first(), 1);
    assert.equal([2, 3, 4].first(), 2);
    assert.equal(['a', 'b', 'c'].first(), 'a');
    assert.equal(['b', 'c', 'd'].first(), 'b');
    assert.deepEqual([1, 2, 3].first(0), []);
    assert.deepEqual([1, 2, 3].first(1), [1]);
    assert.deepEqual([1, 2, 3].first(2), [1, 2]);
    assert.deepEqual(['a', 'b', 'c'].first(1), ['a']);
    assert.deepEqual(['a', 'b', 'c'].first(2), ['a', 'b']);
  }
  describe('#first()', function() {
    it('should return the first element of array', function() {
      firstArrayTest();
    });
  });
  describe('#head()', function() {
    it('should return the first element of array', function() {
      firstArrayTest();
    });
  });
  describe('#take()', function() {
    it('should return the first element of array', function() {
      firstArrayTest();
    });
  });

  function initialArrayTest() {
    assert.equal([].initial(), undefined);
    assert.deepEqual([1, 2, 3].initial(), [1, 2]);
    assert.deepEqual([2, 3, 4].initial(), [2, 3]);
    assert.deepEqual(['a', 'b', 'c'].initial(), ['a', 'b']);
    assert.deepEqual(['b', 'c', 'd'].initial(), ['b', 'c']);
    assert.deepEqual([1, 2, 3].initial(0), [1, 2, 3]);
    assert.deepEqual([1, 2, 3].initial(1), [1, 2]);
    assert.deepEqual([1, 2, 3].initial(2), [1]);
    assert.deepEqual(['a', 'b', 'c'].initial(1), ['a', 'b']);
    assert.deepEqual(['a', 'b', 'c'].initial(2), ['a']);
  }
  describe('#initial()', function() {
    it('should return everything but the first entry of the array', function() {
      initialArrayTest();
    });
  });

  function lastArrayTest() {
    assert.equal([].last(), undefined);
    assert.equal([1, 2, 3].last(), 3);
    assert.equal([2, 3, 4].last(), 4);
    assert.equal(['a', 'b', 'c'].last(), 'c');
    assert.equal(['b', 'c', 'd'].last(), 'd');
    assert.deepEqual([1, 2, 3].last(0), []);
    assert.deepEqual([1, 2, 3].last(1), [3]);
    assert.deepEqual([1, 2, 3].last(2), [2, 3]);
    assert.deepEqual(['a', 'b', 'c'].last(1), ['c']);
    assert.deepEqual(['a', 'b', 'c'].last(2), ['b', 'c']);
  }
  describe('#last()', function() {
    it('should return the last element of array', function() {
      lastArrayTest();
    });
  });


  function restArrayTest() {
    assert.equal([].rest(), undefined);
    assert.deepEqual([1, 2, 3].rest(), [2, 3]);
    assert.deepEqual([2, 3, 4].rest(), [3, 4]);
    assert.deepEqual(['a', 'b', 'c'].rest(), ['b', 'c']);
    assert.deepEqual(['b', 'c', 'd'].rest(), ['c', 'd']);
    assert.deepEqual([1, 2, 3].rest(0), [1, 2, 3]);
    assert.deepEqual([1, 2, 3].rest(1), [2, 3]);
    assert.deepEqual([1, 2, 3].rest(2), [3]);
    assert.deepEqual(['a', 'b', 'c'].rest(1), ['b', 'c']);
    assert.deepEqual(['a', 'b', 'c'].rest(2), ['c']);
  }
  describe('#rest()', function() {
    it('should return everything but the first entry of the array', function() {
      restArrayTest();
    });
  });
  describe('#tail()', function() {
    it('should return everything but the first entry of the array', function() {
      restArrayTest();
    });
  });
  describe('#drop()', function() {
    it('should return everything but the first entry of the array', function() {
      restArrayTest();
    });
  });


});
