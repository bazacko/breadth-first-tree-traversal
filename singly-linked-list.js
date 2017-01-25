'use strict';

const SinglyLinkedList = module.exports = function() {
  this.head = null;
  this.tail = null;
};

function Node(val) {
  this.val = val;
  this.next = null;
}

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  }

  this.tail.next = node;
  this.tail = node;
  return;
};

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  }

  node.next = this.head;
  this.head = node;
  return;
};
