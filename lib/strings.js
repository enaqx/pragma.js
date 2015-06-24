/**
 * String methods
 */
'use strict';


var stringMethods = {

  eval: function() {
    return eval(this);
  },

  getLength: function() {
    return this.length;
  },


  toNumber: function() {
    return parseFloat(this);
  },


  toNumeronym: function() {
    if(this.length < 4) return this;
    return this[0] + (this.length - 2) + this[this.length - 1];
  }

};


Object.keys(stringMethods).forEach(function(method) {
  String.prototype[method] = stringMethods[method];
});
