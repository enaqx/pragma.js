/**
 * Sets tests
 */

 import * as assert from 'assert';
 import { pragmaSets } from '../pragma';

 describe.only('Sets', () => {

   /* Built-in */
   describe('#size', () => {
     it('is the size of set', () => {
       assert.equal(new Set([1, 2, 3]).size, 3);
       assert.equal(new Set(['a', 'b', 'c', 'd']).size, 4);
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
      let set = new Set(['foo', 'bar']);
      assert.deepEqual(set.toArray(), ['foo', 'bar']);
    });
   });

 });
