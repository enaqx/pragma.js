/**
 * Array test
 */

import * as assert from 'assert';
import { pragmaArrays } from '../pragma';

describe('Arrays', () => {
  /* Built-in */
  describe('#length', () => {
    it('is the length of array', () => {
      assert.equal([].length, 0);
      assert.equal([1, 2, 3].length, 3);
      assert.equal(['a', 'b', 'c', 'd'].length, 4);
    });
  });


  describe('#getLength()', () => {
    it('should return length of array', () => {
      assert.equal([].getLength(), 0);
      assert.equal([1, 2, 3].getLength(), 3);
      assert.equal(['a', 'b', 'c', 'd'].getLength(), 4);
    });
  });


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
  describe('#first()', () => {
    it('should return the first element of array', () => {
      firstArrayTest();
    });
  });
  describe('#head()', () => {
    it('should return the first element of array', () => {
      firstArrayTest();
    });
  });
  describe('#take()', () => {
    it('should return the first element of array', () => {
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
  describe('#initial()', () => {
    it('should return everything but the first entry of the array', () => {
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
  describe('#last()', () => {
    it('should return the last element of array', () => {
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
  describe('#rest()', () => {
    it('should return everything but the first entry of the array', () => {
      restArrayTest();
    });
  });
  describe('#tail()', () => {
    it('should return everything but the first entry of the array', () => {
      restArrayTest();
    });
  });
  describe('#drop()', () => {
    it('should return everything but the first entry of the array', () => {
      restArrayTest();
    });
  });


  /* Built-in */
  describe('#pop()', () => {
    it('should remove the last element and returns that element', () => {
      assert.deepEqual([1, 2, 3].pop(), 3);
      assert.deepEqual([1, 2].pop(), 2);
      assert.deepEqual([1].pop(), 1);
      assert.equal([].pop(), undefined);
    });
  });


  /* Built-in */
  describe('#push()', () => {
    it('should add elements to the end and return new one', () => {
      assert.deepEqual([].push(1), 1);
      assert.deepEqual([].push(1, 2), 2);
      assert.deepEqual([].push(1, 2, 3), 3);
    });
  });


  describe('#random()', () => {
    it('should return random element from array', () => {
      assert.equal([].random(), undefined);
      assert.ok([1, 2, 3].random());
      assert.equal([1, 1, 1].random(), 1);
    });
  });


  describe('#toObject()', () => {
    it('should convert array to object', () => {
      assert.deepEqual([0, 1, 2].toObject(), {'0': 0, '1': 1, '2': 2});
      assert.deepEqual(['a', 'b'].toObject(), {'0': 'a', '1': 'b'});
    });
  });
});
