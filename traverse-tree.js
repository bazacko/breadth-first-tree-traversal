'use strict';

const Queue = require('./queue.js');
const Tree = require('./tree-demo.js');

Tree.prototype.breadthFirst = function() {
  let queue = new Queue();
  this.children.forEach(child => queue.enqueue(child));
  console.log(this.val);
  while (queue.head) {
    queue.head.val.children.forEach(child => queue.enqueue(child));
    console.log(queue.dequeue().val);
  }
};

var testTree = new Tree('A');
var b = new Tree('B');
var c = new Tree('C');
var d = new Tree('D');
var e = new Tree('E');

testTree.children.push(b);
testTree.children.push(c);
testTree.children.push(e);
b.children.push(d);

testTree.breadthFirst(); // Should log 'A B C E D'
