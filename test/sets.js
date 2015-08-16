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


  describe('#addValues()', () => {
<<<<<<< HEAD
    it('should append a new elements to a set', () => {
=======
    it('should appends a new elements to a set', () => {
>>>>>>> e46105a76b5af4c5ee44a6d6592651253cdfb818
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


  describe('#toArray()', () => {
    it('should convert set to array', () => {
      assert.deepEqual(new Set(['foo', 'bar']).toArray(), ['foo', 'bar']);
    });
  });

});
