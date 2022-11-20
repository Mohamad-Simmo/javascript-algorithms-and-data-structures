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
}

module.exports = BinarySearchTree;
