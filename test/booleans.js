/**
 * Boolean test
 */
'use strict';

import * as assert from 'assert';
import { pragmaBooleans } from '../pragma';

describe('Booleans', function() {

  /* Built-in */
  describe('#toString()', function() {
    it('should return string according to boolean value', function() {
      assert.deepEqual((true).toString(), 'true');
      assert.deepEqual((false).toString(), 'false');
    });
  });

  describe('#toNumber()', function() {
    it('should return number according to boolean value', function() {
      assert.equal((true).toNumber(), 1);
      assert.equal((false).toNumber(), 0);
    });
  });

  describe('#toWord()', function() {
    it('should return "yes" or "no" depending on boolean value', function() {
      assert.deepEqual((true).toWord(), 'yes');
      assert.deepEqual((false).toWord(), 'no');
    });
  });

  describe('#opposite()', function() {
    it('should opposite value of boolean', function() {
      assert.equal((true).opposite(), false);
      assert.equal((false).opposite(), true);
    });
  });

});