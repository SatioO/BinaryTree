class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }
  
  add(node) {
    if(this.root === null) {
      this.root = node
    } else {
      function search(root) {
          if(node.value > root.value) {
            if(root.right === null) {
              root.right = node
            } else {
              search(root.right)
            }
          } else if(node.value < root.value) {
            if(root.left === null) {
              root.left = node
            } else {
              search(root.left)
            }
          } else {
            return null
          }
      }
       
      let root = this.root
      search(root)
    }
  }
  
  findMin() {
    let root = this.root
    
    while(root.left) {
      root = root.left
    }
    
    return root.value
  }
  
  findMax() {
    let root = this.root
    
    while(root.right) {
      root = root.right
    }
    
    return root.value
  }
  
  find(value) {
    function search(root) {
      if(value === root.value) {
        return root
      } else if(value < root.value) {
        return search(root.left)
      } else if(value > root.value) {
        return search(root.right)
      } else {
        return null
      }
    }
    
    let root = this.root
    return search(root)
  }

  inTraverse() {
    const result = []
    
    function traversal(root) {
      if(root.left) {
        traversal(root.left)
      }

      result.push(root.value)

      if(root.right) {
        traversal(root.right)
      }
    }
    
    traversal(this.root)

    return result
  }

  preTraverse() {
    const result = []
    
    function traversal(root) {
      result.push(root.value)
      if(root.left) {
        traversal(root.left)
      }

      if(root.right) {
        traversal(root.right)
      }
    }
    
    traversal(this.root)

    return result
  }

  postTraverse() {
    const result = []
    
    function traversal(root) {
      
      if(root.left) {
        traversal(root.left)
      }

      if(root.right) {
        traversal(root.right)
      }

      result.push(root.value)
    }
    
    traversal(this.root)

    return result
  }

  deleteNode(value) {
    function removeNode(root) {
      if(root === null) {
        return null
      }

      if(value === root.value) {
        if(root.right === null && root.left === null) {
          return null
        }

        if(root.left === null) {
          return root.right
        }

        if(root.right === null) {
          return root.left
        }

        let tempNode = root.right
        while(tempNode.left !== null) {
          tempNode = tempNode.left
        }
        root.value = tempNode.value
        root.right = removeNode(tempNode.right)
        return root
      } else if(value < root.value) {
        root.left = removeNode(root.left)
        return root
      } else if(value > root.value) {
        root.right = removeNode(root.right)
        return root
      }
    }

    let root = this.root
    console.log(removeNode(root))
  }
}

const tree = new BinaryTree()

const A = new Node(5)
const B = new Node(4)
const C = new Node(3)
const D = new Node(2)
const E = new Node(1)
const F = new Node(6)
const G = new Node(7)
const H = new Node(8)

tree.add(A)
tree.add(B)
tree.add(C)
tree.add(D)
tree.add(E)
tree.add(F)
tree.add(G)
tree.add(H)

tree.deleteNode(5)



