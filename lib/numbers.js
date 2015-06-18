/**
 * Number methods
 */
'use strict';


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


Number.prototype.isIntegerNumber = function() {
  return Number.isInteger(this);
};


Number.prototype.isNotNumber = function() {
  return Number.isNaN(this);
};


Number.prototype.toZero = function() {
  return 0;
};


Number.prototype.toOne = function() {
  return 1;
};
