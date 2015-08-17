/**
 * Sets tests
 */

import * as assert from 'assert';
import { pragmaSets } from '../pragma';

describe('Sets', () => {

  /* Built-in */
  describe('#size', () => {
    it('is the size of set', () => {
      assert.equal(new Set([1, 2, 3]).size, 3);
      assert.equal(new Set(['a', 'b', 'c', 'd']).size, 4);
    });
  });

  /* Built-in */
  describe('#add()', () => {
    it('should append a new element to a set', () => {
      assert.deepEqual(new Set().add(1).add(2).add(3).toArray(), [1, 2, 3]);
    });
  });


  /* Built-in */
  describe('#clear()', () => {
    it('should remove all elements from a set', () => {
      var set = new Set([1, 2 ,3]);
      set.clear();
      assert.deepEqual(set.toArray(), []);
    });
  });


  /* Built-in */
  describe('#delete()', () => {
    it('should remove the specified element from a set', () => {
      var set = new Set([1, 2 ,3]);
      set.delete(1);
      assert.deepEqual(set.toArray(), [2, 3]);
    });
  });


  /* Built-in */
  describe('#entries()', () => {
    it('should return object that contains an array of [value, value]', () => {
      var setIterator = new Set([1, 2 ,3]).entries();
      assert.deepEqual(setIterator.next().value, [1, 1]);
      assert.deepEqual(setIterator.next().value, [2, 2]);
      assert.deepEqual(setIterator.next().value, [3, 3]);
    });
  });


  /* Built-in */
  describe('#keys()', () => {
    it('should return object that contains the values', () => {
      var setIterator = new Set([1, 2 ,3]).keys();
      assert.equal(setIterator.next().value, 1);
      assert.equal(setIterator.next().value, 2);
      assert.equal(setIterator.next().value, 3);
    });
  });


  /* Built-in */
  describe('#values()', () => {
    it('should return object that contains the values', () => {
      var setIterator = new Set([1, 2 ,3]).values();
      assert.equal(setIterator.next().value, 1);
      assert.equal(setIterator.next().value, 2);
      assert.equal(setIterator.next().value, 3);
    });
  });


  describe('#addValues()', () => {
    it('should append a new elements to a set', () => {
      assert.deepEqual(new Set().addValues(1, 2, 3).toArray(), [1, 2, 3]);
    });
  });


  describe('#addList()', () => {
    it('should append list of values to a set', () => {
      assert.deepEqual(new Set().addList([1, 2, 3]).toArray(), [1, 2, 3]);
    });
  });


  describe('#getLength()', () => {
    it('should return set length', () => {
      assert.equal(new Set([1, 2, 3]).getLength(), 3);
      assert.equal(new Set(['a', 'b', 'c', 'd']).getLength(), 4);
    });
  });


  describe('#deleteList()', () => {
    it('should remove list of elements from a set', () => {
      var set = new Set([1, 2 ,3, 4]);
      assert.equal(set.deleteList([1, 3]), true);
      assert.equal(set.deleteList([5, 6]), false);
      assert.deepEqual(set.toArray(), [2, 4]);
    });
  });


  describe('#deleteValues()', () => {
    it('should remove the specified elements from a set', () => {
      var set = new Set([1, 2 ,3]);
      assert.equal(set.deleteValues(1, 3), true);
      assert.equal(set.deleteValues(5, 6), false);
      assert.deepEqual(set.toArray(), [2]);
    });
  });


  describe('#remove()', () => {
    it('should return set without specified element', () => {
      var set = new Set([1, 2 ,3]);
      assert.deepEqual(set.remove(1).toArray(), [2, 3]);
    });
  });


  describe('#removeList()', () => {
    it('should return set without specified elements', () => {
      var set = new Set([1, 2 ,3, 4]);
      assert.deepEqual(set.removeList([1, 3]).toArray(), [2, 4]);
    });
  });


  describe('#removeValues()', () => {
    it('should return set without list of elemens', () => {
      var set = new Set([1, 2 ,3]);
      assert.deepEqual(set.removeValues(1, 3).toArray(), [2]);
    });
  });


  describe('#purge()', () => {
    it('should remove all elements and return empty set', () => {
      assert.deepEqual(new Set([1, 2 ,3]).purge().toArray(), []);
    });
  });


  describe('#toArray()', () => {
    it('should convert set to array', () => {
      assert.deepEqual(new Set(['foo', 'bar']).toArray(), ['foo', 'bar']);
    });
  });

});
