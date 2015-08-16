/**
 * Object test
 */

import * as assert from 'assert';
import { pragmaObjects } from '../pragma';

describe('Objects', () => {

  describe('#values()', () => {
    it('should return array ob object values', () => {
      assert.deepEqual({'foo': 1, 'bar': 2}.values(), [1, 2]);
    });
  });

});
