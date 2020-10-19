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
}

const tree = new BinaryTree()

const A = new Node(5)
const B = new Node(4)
const C = new Node(3)
const D = new Node(2)
const E = new Node(1)
const F = new Node(6)


tree.add(A)
tree.add(B)
tree.add(C)
tree.add(D)
tree.add(E)
tree.add(F)

console.log(tree.find(5))



