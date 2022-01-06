// TREE
// -> HTML DOM
// -> Network Routing
// -> Abstact Syntax Tree
// -> Artificial Intelligence
// -> Folders in Operating Systems
// -> JSON

// Binary Search Tree
// Insertion - O(log n)
// Searching - O(log n)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current) return;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.val) {
        current = current.left;
      } else if (value > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }
}

const tree = new BinarySearchTree();
