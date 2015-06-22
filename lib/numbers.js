/**
 * Number methods
 */
'use strict';


Number.prototype.abs = function() {
  return Math.abs(this);
};


Number.prototype.ceil = function() {
  return Math.ceil(this);
};


Number.prototype.floor = function() {
  return Math.floor(this);
};


Number.prototype.round = function() {
  return Math.round(this);
};


Number.prototype.negate = function() {
  return -this;
};


Number.prototype.countFrom = function(from, by) {
  from = from || 0;
  by = by || 1;
  if (this.isNotIntegerNumber()) return void 0;
  if (this.isZero()) return [0];
  if (this.isPositive()) {
    return Array
      .apply(null, new Array((this.abs() + 1 - from) / by))
      .map(function(v, i) {
          return i * by + from;
        });
  } else {
    return Array
      .apply(null, new Array((this.abs() + 1 + from) / by))
      .map(function(v, i) {
          return i.negate() * by + from;
        });
  }
};


Number.prototype.isEven = function() {
  if (this.isNotIntegerNumber()) return void 0;
  return this % 2 ? false : true;
};


Number.prototype.isOdd = function() {
  if (this.isNotIntegerNumber()) return void 0;
  return this % 2 ? true : false;
};


Number.prototype.isFiniteNumber = function() {
  return Number.isFinite(this);
};


Number.prototype.isNotFiniteNumber = function() {
  return Number.isFinite(this).opposite();
};


Number.prototype.isIntegerNumber = function() {
  return Number.isInteger(this);
};


Number.prototype.isNotIntegerNumber = function() {
  return Number.isInteger(this).opposite();
};


Number.prototype.isNotNumber = function() {
  return Number.isNaN(this);
};


Number.prototype.isPrime = function() {
  if (this.isNotIntegerNumber()) return void 0;
  if (this.isNegative()) return void 0;
  if (this.isZero()) return void 0;
  if (this.isOne()) return false;
  var divisor = 2;
  while (this > divisor){
    if (this % divisor == 0)
      return false;
    else
      divisor >= 3 ? divisor += 2 : divisor++;
  }
  return true;
};


Number.prototype.isPositive = function() {
  if(this.isNotNumber()) return undefined;
  if (this.isZero()) return undefined;
  return this == this.abs();
};


Number.prototype.isNegative = function() {
  if(this.isNotNumber()) return undefined;
  if (this.isZero()) return undefined;
  return this != this.abs();
};


Number.prototype.parity = function() {
  if (this.isNotIntegerNumber()) return void 0;
  return Math.abs(this % 2);
};


Number.prototype.parityOfNumber = function() {
  if (this.isNotIntegerNumber()) return void 0;
  return this % 2 ? 'odd' : 'even';
};


Number.prototype.isZero = function() {
  return this == 0;
};


Number.prototype.isOne = function() {
  return this == 1;
};


Number.prototype.toZero = function() {
  return 0;
};


Number.prototype.toOne = function() {
  return 1;
};


Number.prototype.toDigitsArray = function() {
  if (this.isNotFiniteNumber()) return void 0;
  return this.toString(10)
             .split('')
             .map(function(d) { return parseInt(d) })
             .filter(function(d) {return d.isNotNumber().opposite()});
};
