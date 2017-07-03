var BST = require('./BST')

var nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.log("Inorder traversal")
nums.inOrder(nums.root)


console.log('Preorder traversal')
nums.preOrder(nums.root)

console.log('PostOrder traversal')
nums.postOrder(nums.root)