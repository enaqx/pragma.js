'use strict';


Array.prototype.first = function(n) {
  if (this.length === 0 || n < 0) return void 0;
  if (n === undefined) return this.slice(0, 1);
  if (n === 0) return [];
  return this.slice(0, n);
}
Array.prototype.head = Array.prototype.take = Array.prototype.first;


Array.prototype.initial = function(n) {
	if (this.length === 0 || n < 0) return void 0;
	if (n === 0) return this.slice(0, this.length);
	return this.slice(0, this.length - (n == null ? 1 : n));
}
