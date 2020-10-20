class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return;
    } else {
      function search(root) {
        if (node.value > root.value) {
          if (root.right === null) {
            root.right = node;
          } else {
            search(root.right);
          }
        } else if (node.value < root.value) {
          if (root.left === null) {
            root.left = node;
          } else {
            search(root.left);
          }
        } else {
          return null;
        }
      }

      let root = this.root;
      search(root);
    }
  }

  findMin() {
    let root = this.root;

    while (root.left) {
      root = root.left;
    }

    return root.value;
  }

  findMax() {
    let root = this.root;

    while (root.right) {
      root = root.right;
    }

    return root.value;
  }

  find(value) {
    function search(root) {
      if (value === root.value) {
        return root;
      } else if (value < root.value) {
        return search(root.left);
      } else if (value > root.value) {
        return search(root.right);
      } else {
        return null;
      }
    }

    let root = this.root;
    return search(root);
  }

  inTraverse() {
    const result = [];

    function traversal(root) {
      if (root.left) {
        traversal(root.left);
      }

      result.push(root.value);

      if (root.right) {
        traversal(root.right);
      }
    }

    traversal(this.root);

    return result;
  }

  preTraverse() {
    const result = [];

    function traversal(root) {
      result.push(root.value);
      if (root.left) {
        traversal(root.left);
      }

      if (root.right) {
        traversal(root.right);
      }
    }

    traversal(this.root);

    return result;
  }

  postTraverse() {
    const result = [];

    function traversal(root) {
      if (root.left) {
        traversal(root.left);
      }

      if (root.right) {
        traversal(root.right);
      }

      result.push(root.value);
    }

    traversal(this.root);

    return result;
  }

  deleteNode(value) {
    function removeNode(root, value) {
      if (root === null) {
        return null;
      }

      if (value === root.value) {
        if (root.left === null && root.right === null) {
          return null;
        }

        if (root.left === null) {
          return root.right;
        }

        if (root.right === null) {
          return root.left;
        }

        let tempNode = root.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        root.value = tempNode.value;
        root.right = removeNode(root.right, root.value);
        return root;
      } else if (value < root.value) {
        root.left = removeNode(root.left, value);
        return root;
      } else if (value > root.value) {
        root.right = removeNode(root.right, value);
        return root;
      }
    }

    let root = this.root;
    removeNode(root, value);
  }
}

const tree = new BinaryTree();

const arr = [5, 9, 7, 3, 6, 2, 8, 10];

for (let item of arr) {
  tree.add(item);
}

function isBalanced(root) {
  if (root === null) {
    return true;
  }

  let lh = 0;
  let rh = 0;

  lh = checkHeight(root.left);
  rh = checkHeight(root.right);
  if (
    Math.abs(lh - rh) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  ) {
    return true;
  }

  return false;
}

function checkHeight(root) {
  if (root === null) {
    return 0;
  }

  return Math.max(checkHeight(root.left), checkHeight(root.right)) + 1;
}
console.log(tree.root);
console.log(isBalanced(tree.root));
