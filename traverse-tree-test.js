'use strict';

const Tree = require('./tree.js');

var testTree = new Tree('A');
var b = new Tree('B');
var c = new Tree('c');
var d = new Tree('d');
var e = new Tree('e');

testTree.children.push(b);
testTree.children.push(c);
testTree.children.push(e);
testTree.children.push(d);

console.assert(testTree.breadthFirst() == 'A,B,c,e,d', `Actual value was ${testTree.breadthFirst()}`);
console.log('Tests passing.');
