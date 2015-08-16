/**
 * Sets methods
 */


Set.prototype.getLength = function() {
  return this.size;
}


Set.prototype.toArray = function() {
  return Array.from(this);
}
