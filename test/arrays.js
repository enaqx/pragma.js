require('../pragma');
var assert = require('assert');

describe('Arrays', function() {

  function firstInArrayTest() {
    assert.equal([].first(), undefined);
    assert.equal([1, 2, 3].first(), 1);
    assert.equal([2, 3, 4].first(), 2);
    assert.equal(['a', 'b', 'c'].first(), 'a');
    assert.equal(['b', 'c', 'd'].first(), 'b');;
    assert.deepEqual([1, 2, 3].first(0), []);
    assert.deepEqual([1], [1, 2, 3].first(1));
    assert.deepEqual([1, 2], [1, 2, 3].first(2));
    assert.deepEqual(['a'], ['a', 'b', 'c'].first(1));
    assert.deepEqual(['a', 'b'], ['a', 'b', 'c'].first(2));
  }
  describe('#first()', function() {
    it('should return the first element of array', function() {
      firstInArrayTest();
    });
  });
  describe('#head()', function() {
    it('should return the first element of array', function() {
      firstInArrayTest();
    });
  });
  describe('#take()', function() {
    it('should return the first element of array', function() {
      firstInArrayTest();
    });
  });


  describe('#initial()', function() {
    it('should return everything but the first entry of the array', function() {
      assert.equal([].initial(), undefined);
      assert.deepEqual([1, 2, 3].initial(), [1, 2]);
      assert.deepEqual([2, 3, 4].initial(), [2, 3]);
      assert.deepEqual(['a', 'b', 'c'].initial(), ['a', 'b']);
      assert.deepEqual(['b', 'c', 'd'].initial(), ['b', 'c']);;
      assert.deepEqual([1, 2, 3].initial(0), [1, 2, 3]);
      assert.deepEqual([1, 2, 3].initial(1), [1, 2]);
      assert.deepEqual([1, 2, 3].initial(2), [1]);
      assert.deepEqual(['a', 'b', 'c'].initial(1), ['a', 'b']);
      assert.deepEqual(['a', 'b', 'c'].initial(2), ['a']);
    });
  });

});
