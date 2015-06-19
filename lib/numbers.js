/**
 * Number methods
 */
'use strict';


Number.prototype.abs = function() {
  return Math.abs(this);
};


Number.prototype.isEven = function() {
  if (!this.isIntegerNumber()) return void 0;
  return this % 2 ? false : true;
};


Number.prototype.isOdd = function() {
  if (!this.isIntegerNumber()) return void 0;
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


Number.prototype.isNotNumber = function() {
  return Number.isNaN(this);
};


Number.prototype.parity = function() {
  if (!this.isIntegerNumber()) return void 0;
  return Math.abs(this % 2);
};


Number.prototype.parityOfNumber = function() {
  if (!this.isIntegerNumber()) return void 0;
  return this % 2 ? 'odd' : 'even';
};


Number.prototype.toZero = function() {
  return 0;
};


Number.prototype.toOne = function() {
  return 1;
};


Number.prototype.toDigitsArray = function() {
  if (!this.isFiniteNumber()) return void 0;
  return this.toString(10)
             .split('')
             .map(function(d) { return parseInt(d) })
             .filter(function(d) {return d.isNotNumber().opposite()});
};
