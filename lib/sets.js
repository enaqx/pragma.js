/**
 * Sets methods
 */

Set.prototype.addValues = function() {
  console.log(arguments.values());
  return arguments.values().forEach( value => this.add );
}


Set.prototype.getLength = function() {
  return this.size;
}


Set.prototype.toArray = function() {
  return Array.from(this);
}
