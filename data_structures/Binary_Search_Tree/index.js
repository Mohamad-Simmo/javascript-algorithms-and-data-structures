const BinarySearchTree = require('./BinarySearchTree');

const bst = new BinarySearchTree();
bst.insert(10);
bst.insertRecursive(6);
bst.insertRecursive(8);
bst.insertRecursive(3);
bst.insertRecursive(15);
bst.insertRecursive(20);

console.dir(bst);

console.log(bst.contains(13));

console.log(bst.depthFirstSearchPostOrder([]));

console.log(bst.depthFirstSearchPreOrder([]));

console.log(bst.depthFirstSearchInOrder([]));
