/**
 * Object methods
 */

Object.prototype.values = function() {
  return Object.keys(this).map(key => this[key]);
}
