const _Number = require('./Number')
const _String = require('./String')

class _Boolean extends Boolean {
  opposite() {
    return new _Boolean(!this)
  }

  print() {
    console.log(this.toString())
  }

  toNumber() {
    return this ? new _Number(1) : new _Number(0)
  }

  toWord() {
    return this ? new _String('yes') : new _String('no')
  }
}

const b = new _Boolean(true)
b.print()
b.opposite().print()
b.toNumber().print()
b.toWord().print()
