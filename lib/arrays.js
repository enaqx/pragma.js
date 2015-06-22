/**
 * Array methods
 */
'use strict';


Array.prototype.first = function(n) {
  if (this.length === 0 || n < 0) return void 0;
  if (n === undefined) return this[0];
  if (n === 0) return [];
  return this.initial(this.length - n);
};
Array.prototype.head = Array.prototype.take = Array.prototype.first;


Array.prototype.initial = function(n) {
  if (this.length == 0 || n < 0) return void 0;
  if (n == 0) return this.slice(0, this.length);
  return this.slice(0, this.length - (n == null ? 1 : n));
};


Array.prototype.last = function(n) {
  if (this.length == 0 || n < 0) return void 0;
  if (n == undefined) return this[this.length - 1];
  if (n == 0) return [];
  return this.rest(this.length - n);
};


Array.prototype.rest = function(n) {
  if (this.length == 0 || n < 0) return void 0;
  if (n == 0) return this.slice(0, this.length);
  return this.slice(n == null ? 1 : n);
};
Array.prototype.tail = Array.prototype.drop = Array.prototype.rest;


Array.prototype.random = function() {
  if (this.length == 0) return void 0;
  return this[Math.floor(Math.random() * this.length)];
};
