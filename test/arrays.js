/**
  * Array tests
  */

import { assert } from 'chai';
import { pragmaArrays } from '../pragma';


describe('Arrays', () => {

  /**
    * Built-in methods
    */

  describe('#length', () => {
    it('is the length of array', () => {
      assert.equal([].length, 0);
      assert.equal([1, 2, 3].length, 3);
      assert.equal(['a', 'b', 'c', 'd'].length, 4);
    });
  });


  describe('#from()', () => {
    it('creates a new array from an array-like or iterable object', () => {
      assert.deepEqual(Array.from(new Set(['foo', 'bar'])), ['foo', 'bar']);
      assert.deepEqual(Array.from(new Map([[1, 2], [2, 4]])), [[1, 2], [2, 4]]);
      assert.deepEqual(Array.from('string'), ['s', 't', 'r', 'i', 'n', 'g']);
      assert.deepEqual(Array.from([1, 2, 3], x => x + x), [2, 4, 6]);
      assert.deepEqual(Array.from({length: 5}, (v, k) => k), [0, 1, 2, 3, 4]);
    });
  });


  describe('#isArray()', () => {
    it('return true if the argument is an array', () => {
      assert.equal(Array.isArray([]), true);
      assert.equal(Array.isArray([1]), true);
      assert.equal(Array.isArray([1, 2, 3]), true);
      assert.equal(Array.isArray(['foo', 'bar']), true);
      assert.equal(Array.isArray([[1, 2], [2, 4]]), true);
      assert.equal(Array.isArray(new Array()), true);
      assert.equal(Array.isArray(Array.prototype), true);
      assert.equal(Array.isArray(null), false);
      assert.equal(Array.isArray(1), false);
      assert.equal(Array.isArray('foo'), false);
      assert.equal(Array.isArray({'foo': 'bar'}), false);
    });
  });


  describe('#of()', () => {
    it('creates a new array with a variable number of arguments', () => {
      assert.deepEqual(Array.of(1), [1]);
      assert.deepEqual(Array.of(1, 2, 3), [1, 2 ,3]);
      assert.deepEqual(Array.of(undefined), [undefined]);
      assert.deepEqual(Array.of(undefined, undefined), [undefined, undefined]);
    });
  });


  describe('#concat()', () => {
    it('returns a new array joined with value provided as arguments', () => {
      assert.deepEqual(['a', 'b'].concat([1, 2]), ['a', 'b', 1, 2]);
      assert.deepEqual([1, 2, 3].concat(4, [5 , 6]), [1, 2, 3, 4, 5, 6]);
      assert.deepEqual([undefined].concat([undefined]), [undefined, undefined]);
    });
  });


  describe('#copyWithin()', () => {
    it('copies the sequence of array elements within the array', () => {
      assert.deepEqual([1, 2, 3].copyWithin(0, 2), [3, 2, 3]);
      assert.deepEqual(['a', 'b', 'c'].copyWithin(0, 2), ['c', 'b', 'c']);
      assert.deepEqual([undefined, 1, 1].copyWithin(0, 2), [1, 1, 1]);
      assert.deepEqual([1, 2, 3, 4, 5].copyWithin(0, 3), [4, 5, 3, 4, 5]);
      assert.deepEqual([1, 2, 3, 4, 5].copyWithin(0, 3, 4), [4, 2, 3, 4, 5]);
      assert.deepEqual([1, 2, 3, 4, 5].copyWithin(0, -2, -1), [4, 2, 3, 4, 5]);
    });
  });


  describe('#pop()', () => {
    it('should remove the last element and returns that element', () => {
      assert.deepEqual([1, 2, 3].pop(), 3);
      assert.deepEqual([1, 2].pop(), 2);
      assert.deepEqual([1].pop(), 1);
      assert.equal([].pop(), undefined);
    });
  });


  describe('#push()', () => {
    it('should add elements to the end and return new one', () => {
      assert.deepEqual([].push(1), 1);
      assert.deepEqual([].push(1, 2), 2);
      assert.deepEqual([].push(1, 2, 3), 3);
    });
  });


  /**
    * Pragma.js methods
    */

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


  describe('#isEmpty()', () => {
    it('should return true on empty list', () => {
      assert.equal([].isEmpty(), true);
      assert.equal([1, 2, 3].isEmpty(), false);
      assert.equal([1.1, 1.2, 1.3].isEmpty(), false);
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


  describe('#max()', () => {
    it('should return maximum value of array', () => {
      assert.equal([].max(), undefined);
      assert.equal([1, 2, 3].max(), 3);
      assert.equal(['a', 'b', 'c', 'd'].max(), undefined);
      assert.equal([1, 2, 'c', 'd', true, null].max(), 2);
    });
  });


  describe('#min()', () => {
    it('should return minimal value of array', () => {
      assert.equal([].min(), undefined);
      assert.equal([1, 2, 3].min(), 1);
      assert.equal(['a', 'b', 'c', 'd'].min(), undefined);
      assert.equal([1, 2, 'c', 'd', true, null].min(), 1);
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


  describe('#random()', () => {
    it('should return random element from array', () => {
      assert.equal([].random(), undefined);
      assert.ok([1, 2, 3].random());
      assert.equal([1, 1, 1].random(), 1);
    });
  });


  describe('#sum()', () => {
    it('should return sum of all elements from array', () => {
      assert.equal([].sum(), 0);
      assert.equal([1, 2, 3].sum(), 6);
    });
  });

  describe('#toNumsOnly()', () => {
    it('should convert remove all non number elements', () => {
      assert.deepEqual([0, 1, 2].toNumsOnly(), [0, 1, 2]);
      assert.deepEqual(['a', 'b'].toNumsOnly(), []);
    });
  });


  describe('#toObject()', () => {
    it('should convert array to object', () => {
      assert.deepEqual([0, 1, 2].toObject(), {'0': 0, '1': 1, '2': 2});
      assert.deepEqual(['a', 'b'].toObject(), {'0': 'a', '1': 'b'});
    });
  });

});
