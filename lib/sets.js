/**
 * Sets methods
 */

Set.prototype.addValues = function() {
  for ( let value of Object.keys(arguments).map(key => arguments[key]) ) {
    this.add(value);
  }
  return this;
}


Set.prototype.addList = function(list) {
  for ( let value of list) {
    this.add(value);
  }
  return this;
}


Set.prototype.getLength = function() {
  return this.size;
}


Set.prototype.purge = function() {
  this.clear();
  return this;
}


Set.prototype.toArray = function() {
  return Array.from(this);
}
