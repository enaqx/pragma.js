/**
 * Number metods
 */
'use strict';


Number.prototype.isFiniteNumber = function() {
  return isFinite(this);
};


Number.prototype.toZero = function() {
  return 0;
};


Number.prototype.toOne = function() {
  return 1;
};
