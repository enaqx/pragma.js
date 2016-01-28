/**
 * ArrayBuffer methods
 */

import { assert } from 'chai';
import { pragmaArrayBuffers } from '../pragma';

describe('ArrayBuffers', () => {
  /* Built-in */
  describe('#byteLength', () => {
    it('is the size, in bytes, of the array buffer', () => {
      assert.equal(new ArrayBuffer().byteLength, 0);
      assert.equal(new ArrayBuffer(1).byteLength, 1);
      assert.equal(new ArrayBuffer(10).byteLength, 10);
    });
  });
});
