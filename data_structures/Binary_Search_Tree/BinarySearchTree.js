const Node = require('./Node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (node.value === curr.value) return undefined;

      if (node.value < curr.value) {
        if (!curr.left) {
          curr.left = node;
          return this;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = node;
          return this;
        }
        curr = curr.right;
      }
    }
  }

  insertRecursive(value, head = this.root) {
    if (head === null) {
      const newNode = new Node(value);
      return newNode;
    }

    if (value > head.value) {
      // go right
      head.right = this.insertRecursive(value, head.right);
    } else {
      head.left = this.insertRecursive(value, head.left);
    }

    return head;
  }

  contains(value) {
    if (!this.root) return false;
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        return curr;
      }
      if (curr.value > value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }

  breadthFirstSearch() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  depthFirstSearchPreOrder(arr, node = this.root) {
    if (!node) return null;

    arr.push(node.value);

    this.depthFirstSearchPreOrder(arr, node.left);
    this.depthFirstSearchPreOrder(arr, node.right);

    return arr;
  }

  depthFirstSearchPostOrder(arr, node = this.root) {
    if (!node) return null;

    this.depthFirstSearchPostOrder(arr, node.left);
    this.depthFirstSearchPostOrder(arr, node.right);

    arr.push(node.value);

    return arr;
  }

  depthFirstSearchInOrder(arr, node = this.root) {
    if (!node) return null;

    this.depthFirstSearchInOrder(arr, node.left);

    arr.push(node.value);

    this.depthFirstSearchInOrder(arr, node.right);

    return arr;
  }
}

module.exports = BinarySearchTree;
