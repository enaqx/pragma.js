/**
  * Enums tests
  */

import { assert } from 'chai';
import { Enum } from '../pragma';


describe('Enums', () => {
  describe('new Enum', () => {
    it('should create new Enum', () => {
      let obj = {
        RED: 0,
        GREEN: 1,
        BLUE: 2,
      };
      let enumObj = new Enum(obj);
      assert.deepEqual(enumObj, obj);
    });
  });
});
