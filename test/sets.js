/**
 * Sets tests
 */

 import * as assert from 'assert';
 import { pragmaSets } from '../pragma';

 describe('Sets', () => {

   describe('#toArray()', () => {
    it('should convert set to array', () => {
      let set = new Set(['foo', 'bar']);
      assert.deepEqual(set.toArray(), ['foo', 'bar']);
    });
   });

 });
