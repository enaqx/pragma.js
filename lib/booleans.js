/**
 * Boolean methods
 */
'use strict';


Boolean.prototype.toNumber = function() {
  return this ? 1 : 0;
};


Boolean.prototype.toWord = function() {
  return this ? 'yes' : 'no';
};


Boolean.prototype.opposite = function() {
  return !this;
};