const BinarySearchTree = require('./BinarySearchTree');

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(11);

console.dir(bst);

console.log(bst.contains(13));
