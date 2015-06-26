/**
 * String methods
 */
'use strict';


var stringMethods = {

  eval: function() {
    return eval(this);
  },

  encodeURI: function() {
    try {
      return encodeURI(this).replace(/%5B/g, '[').replace(/%5D/g, ']');
    } catch (e) {
      return undefined;
    }
  },

  encodeURIComponent: function() {
    try {
      return encodeURIComponent(this).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    } catch (e) {
      return undefined;
    }
  },

  decodeURI: function() {
    return decodeURI(this);
  },

  decodeURIComponent: function() {
    return decodeURIComponent(this)
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
