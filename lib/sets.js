/**
 * Sets methods
 */

Set.prototype.addValues = function() {
  for ( let value of Object.keys(arguments).map(key => arguments[key]) ) {
    this.add(value);
  }
  return this;
<<<<<<< HEAD
}


Set.prototype.addList = function(list) {
  for ( let value of list) {
    this.add(value);
  }
  return this;
=======
>>>>>>> e46105a76b5af4c5ee44a6d6592651253cdfb818
}


Set.prototype.getLength = function() {
  return this.size;
}


Set.prototype.toArray = function() {
  return Array.from(this);
}
