'use strict';

const Queue = require('./queue.js');

module.exports = Tree;

function Tree(val) {
  this.val = val;
  this.children = [];
}

Tree.prototype.breadthFirst = function() {
  var printArray = [];
  let queue = new Queue();
  this.children.forEach(child => queue.enqueue(child));
  printArray.push(this.val);
  while (queue.head) {
    if (queue.head.val.children) {
      queue.head.val.children.forEach(child => queue.enqueue(child));
      printArray.push(queue.dequeue().val);
    }
  }
  return printArray;
};
