/**
 * String methods
 */
'use strict';


String.prototype.numeronym = function() {
  if(this.length < 4) return this;
  return this[0] + (this.length - 2) + this[this.length - 1];
};
