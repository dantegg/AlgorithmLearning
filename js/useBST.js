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

var min = nums.getMin()
console.log('the minium value of the BST is ' + min)
var max = nums.getMax()
console.log('the max value of the BST is ' + max)
var value = 37
var found  = nums.find(value)

if (found !== null) {
    console.log('Found　' +　value + ' in the BST')
} else {
    console.log(value + ' was not found in the BST')
}