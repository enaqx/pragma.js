/**
 * Boolean test
 */

const { assert } = require('chai')
const _Boolean = require('../pragma')

describe('Boolean', () => {
  /* Built-in */
  describe('#toString()', () => {
    it('should return string according to boolean value', () => {
      assert.deepEqual(new _Boolean(true).toString(), 'true')
      assert.deepEqual(false.toString(), 'false')
    })
  })

  describe('#toNumber()', () => {
    it('should return number according to boolean value', () => {
      assert.equal(true.toNumber(), 1)
      assert.equal(false.toNumber(), 0)
    })
  })

  describe('#toWord()', () => {
    it('should return "yes" or "no" depending on boolean value', () => {
      assert.deepEqual(true.toWord(), 'yes')
      assert.deepEqual(false.toWord(), 'no')
    })
  })

  describe('#opposite()', () => {
    it('should opposite value of boolean', () => {
      assert.equal(true.opposite(), false)
      assert.equal(false.opposite(), true)
    })
  })
})
