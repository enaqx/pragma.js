/**
 * Number methods
 */
'use strict';


Number.prototype.abs = function() {
  return Math.abs(this);
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
  var divisor = 2;
  while (this > divisor){
    if (this % divisor == 0)
      return false;
    else
      divisor++;
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
