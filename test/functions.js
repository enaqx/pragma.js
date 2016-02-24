/**
 * Function test
 */

import { assert } from 'chai';
import { pragmaFunctions } from '../pragma';


describe('Functions', () => {
  describe('#length', () => {
    it('is the number of function arguments', () => {
      let funcVal = null;

      assert.equal((function() {}).length, 0);
      assert.equal((function(a) {}).length, 1);
      assert.equal((function(a, b) {}).length, 2);
      assert.equal((function(a, b, c) {}).length, 3);
      assert.equal((function([a, b, c]) {}).length, 1);
      assert.equal((function(a, b, ...args) {}).length, 2);

      funcVal = function() {};
      assert.equal(funcVal.length, 0);
      funcVal = function(a) {};
      assert.equal(funcVal.length, 1);
      funcVal = function(a, b) {};
      assert.equal(funcVal.length, 2);
      funcVal = function(a, b, c) {};
      assert.equal(funcVal.length, 3);
      funcVal = function([a, b, c]) {};
      assert.equal(funcVal.length, 1);
      funcVal = function(a, b, ...args) {};
      assert.equal(funcVal.length, 2);

      assert.equal((function func() {}).length, 0);
      assert.equal((function func(a) {}).length, 1);
      assert.equal((function func(a, b) {}).length, 2);
      assert.equal((function func(a, b, c) {}).length, 3);
      assert.equal((function func([a, b, c]) {}).length, 1);
      assert.equal((function func(a, b, ...args) {}).length, 2);

      assert.equal((() => {}).length, 0);
      assert.equal((a => {}).length, 1);
      assert.equal(((a, b) => {}).length, 2);
      assert.equal(((a, b, c) => {}).length, 3);
      assert.equal((([a, b, c]) => {}).length, 1);
      assert.equal(((a, b, ...args) => {}).length, 2);

      funcVal = () => {};
      assert.equal(funcVal.length, 0);
      funcVal = a => {};
      assert.equal(funcVal.length, 1);
      funcVal = (a, b) => {};
      assert.equal(funcVal.length, 2);
      funcVal = (a, b, c) => {};
      assert.equal(funcVal.length, 3);
      funcVal = ([a, b, c]) => {};
      assert.equal(funcVal.length, 1);
      funcVal = (a, b, ...args) => {};
      assert.equal(funcVal.length, 2);

      assert.equal(new Function().length, 0);
      assert.equal(new Function('a', 'return a').length, 1);
      assert.equal(new Function('a', 'b', 'return a + b').length, 2);
      assert.equal(new Function('a', 'b', 'c', 'return a + b + c').length, 3);
      assert.equal(new Function('[a, b, c]', 'return a + b + c').length, 1);
      assert.equal(new Function('a', 'b', '...args', 'return a + b').length, 2);

      funcVal = new Function();
      assert.equal(funcVal.length, 0);
      funcVal = new Function('a', 'return a');
      assert.equal(funcVal.length, 1);
      funcVal = new Function('a', 'b', 'return a + b');
      assert.equal(funcVal.length, 2);
      funcVal = new Function('a', 'b', 'c', 'return a + b + c');
      assert.equal(funcVal.length, 3);
      funcVal = new Function('[a, b, c]', 'return a + b + c');
      assert.equal(funcVal.length, 1);
      funcVal = new Function('a', 'b', '...args', 'return a + b');
      assert.equal(funcVal.length, 2);

      assert.equal(Function().length, 0);
      assert.equal(Function('a', 'return a').length, 1);
      assert.equal(Function('a', 'b', 'return a + b').length, 2);
      assert.equal(Function('a', 'b', 'c', 'return a + b + c').length, 3);
      assert.equal(Function('[a, b, c]', 'return a + b + c').length, 1);
      assert.equal(Function('a', 'b', '...args', 'return a + b').length, 2);

      funcVal = Function();
      assert.equal(funcVal.length, 0);
      funcVal = Function('a', 'return a');
      assert.equal(funcVal.length, 1);
      funcVal = Function('a', 'b', 'return a + b');
      assert.equal(funcVal.length, 2);
      funcVal = Function('a', 'b', 'c', 'return a + b + c');
      assert.equal(funcVal.length, 3);
      funcVal = Function('[a, b, c]', 'return a + b + c');
      assert.equal(funcVal.length, 1);
      funcVal = Function('a', 'b', '...args', 'return a + b');
      assert.equal(funcVal.length, 2);
    });
  });


  describe('#name', () => {
    it('is the name of the function', () => {
      let funcVal = null;

      assert.equal((function() {}).name, '');
      assert.equal((function(a) {}).name, '');
      assert.equal((function(a, b) {}).name, '');
      assert.equal((function(a, b, c) {}).name, '');
      assert.equal((function([a, b, c]) {}).name, '');
      assert.equal((function(a, b, ...args) {}).name, '');

      funcVal = function() {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = function(a) {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = function(a, b) {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = function(a, b, c) {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = function([a, b, c]) {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = function(a, b, ...args) {};
      assert.equal(funcVal.name, 'funcVal');

      assert.equal((function func() {}).name, 'func');
      assert.equal((function func(a) {}).name, 'func');
      assert.equal((function func(a, b) {}).name, 'func');
      assert.equal((function func(a, b, c) {}).name, 'func');
      assert.equal((function func([a, b, c]) {}).name, 'func');
      assert.equal((function func(a, b, ...args) {}).name, 'func');

      assert.equal((() => {}).name, '');
      assert.equal((a => {}).name, '');
      assert.equal(((a, b) => {}).name, '');
      assert.equal(((a, b, c) => {}).name, '');
      assert.equal((([a, b, c]) => {}).name, '');
      assert.equal(((a, b, ...args) => {}).name, '');

      funcVal = () => {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = a => {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = (a, b) => {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = (a, b, c) => {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = ([a, b, c]) => {};
      assert.equal(funcVal.name, 'funcVal');
      funcVal = (a, b, ...args) => {};
      assert.equal(funcVal.name, 'funcVal');

      assert.equal(new Function().name, 'anonymous');
      assert.equal(new Function('a', 'return a').name, 'anonymous');
      assert.equal(new Function('a', 'b', 'return a + b').name, 'anonymous');
      assert.equal(new Function('a', 'b', 'c', 'return a + b + c').name, 'anonymous');
      assert.equal(new Function('[a, b, c]', 'return a + b + c').name, 'anonymous');
      assert.equal(new Function('a', 'b', '...args', 'return a + b').name, 'anonymous');

      funcVal = new Function();
      assert.equal(funcVal.name, 'anonymous');
      funcVal = new Function('a', 'return a');
      assert.equal(funcVal.name, 'anonymous');
      funcVal = new Function('a', 'b', 'return a + b');
      assert.equal(funcVal.name, 'anonymous');
      funcVal = new Function('a', 'b', 'c', 'return a + b + c');
      assert.equal(funcVal.name, 'anonymous');
      funcVal = new Function('[a, b, c]', 'return a + b + c');
      assert.equal(funcVal.name, 'anonymous');
      funcVal = new Function('a', 'b', '...args', 'return a + b');
      assert.equal(funcVal.name, 'anonymous');

      assert.equal(Function().name, 'anonymous');
      assert.equal(Function('a', 'return a').name, 'anonymous');
      assert.equal(Function('a', 'b', 'return a + b').name, 'anonymous');
      assert.equal(Function('a', 'b', 'c', 'return a + b + c').name, 'anonymous');
      assert.equal(Function('[a, b, c]', 'return a + b + c').name, 'anonymous');
      assert.equal(Function('a', 'b', '...args', 'return a + b').name, 'anonymous');

      funcVal = Function();
      assert.equal(funcVal.name, 'anonymous');
      funcVal = Function('a', 'return a');
      assert.equal(funcVal.name, 'anonymous');
      funcVal = Function('a', 'b', 'return a + b');
      assert.equal(funcVal.name, 'anonymous');
      funcVal = Function('a', 'b', 'c', 'return a + b + c');
      assert.equal(funcVal.name, 'anonymous');
      funcVal = Function('[a, b, c]', 'return a + b + c');
      assert.equal(funcVal.name, 'anonymous');
      funcVal = Function('a', 'b', '...args', 'return a + b');
      assert.equal(funcVal.name, 'anonymous');
    });
  });
});
