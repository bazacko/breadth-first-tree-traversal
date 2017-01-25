'use strict';

const Queue = module.exports = require('./singly-linked-list.js');

Queue.prototype.enqueue = function(val) {
  this.append(val);
  return;
};

Queue.prototype.dequeue = function() {
  let node = this.head;
  this.head = this.head.next;
  node.next = null;
  return node.val;
};
