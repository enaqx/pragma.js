/**
  * Array methods
  */

import { pragmaNumbers } from '../pragma';


Array.prototype.getLength = function() {
  return this.length;
};


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


Array.prototype.insert = function(index, item) {
  index = Math.min(index, this.length);
  arguments.length > 1
    && this.splice.apply(this, [index, 0].concat([].pop.call(arguments)))
    && this.insert.apply(this, arguments);
  return this;
}

Array.prototype.isEmpty = function() {
  return this.length == 0 ? true : false;
};


Array.prototype.last = function(n) {
  if (this.length == 0 || n < 0) return void 0;
  if (n == undefined) return this[this.length - 1];
  if (n == 0) return [];
  return this.rest(this.length - n);
};


Array.prototype.max = function() {
  if (this.toNumsOnly().length == 0) return undefined;
  return Math.max.apply(null, this.toNumsOnly());
};


Array.prototype.min = function() {
  if (this.toNumsOnly().length == 0) return undefined;
  return Math.min.apply(null, this.toNumsOnly());
};


Array.prototype.pasteWithin = function(target, start, end = this.length) {
  return this.insert(target, this.slice(start, end));
}


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


Array.prototype.sum = function() {
  return this.isEmpty() ? 0 : this.reduce( (a, b) => { return a + b} );
};


Array.prototype.toNumsOnly = function() {
  return this.filter(el => !parseInt(el, 10).isNotNumber());
};


Array.prototype.toObject = function() {
  var resultObject = {};
  this.map(function (element, index) {
    resultObject[index] = element;
  });
  return resultObject;
};
