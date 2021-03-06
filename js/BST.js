function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}

function show() {
    return this.data
}

function BST() {
    this. root = null
    this.insert = insert
    this.inOrder = inOrder
    this.preOrder = preOrder
    this.postOrder = postOrder
    this.getMax = getMax
    this.getMin = getMin
    this.find = find
    this.remove = remove
    this.removeNode = removeNode
}

function insert(data) {
    var n = new Node(data, null, null)
    if (this.root === null) {
        this.root = n
    } else {
        var current = this.root
        var parent
        while(true) {
            parent = current
            if (data<current.data) {
                current = current.left
                if (current === null) {
                    parent.left = n
                    break
                }
            } else {
                current = current.right
                if (current === null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}

function inOrder(node) {
    if(!(node === null)) {
        inOrder(node.left)
        console.log('node ',node.show()+ ' ')
        inOrder(node.right)
    }
}

function preOrder(node) {
    if(!(node === null)) {
        console.log('node preOrder' + node.show() + '')
        preOrder(node.left)
        preOrder(node.right)
    }
}

function postOrder(node) {
    if(!(node === null)) {
        postOrder(node.left)
        postOrder(node.right)
        console.log('node postOrder '+ node.show() + '')
    }
}

function getMin() {
    var current = this.root
    while(!(current.left == null)) {
        current = current.left
    }
    return current.data
}

function getMax() {
    var current = this.root
    while(!(current.right === null)) {
        current = current.right
    }
    return current.data
}

function find(data) {
    var current = this.root
    while( current !== null ) {
        if (current.data === data) {
            return current
        } else if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
    }
    return null
}

function remove(data) {
    root = removeNode(this.root, data)
}

function removeNode(node, data) {
    if (node === null) {
        return null
    }
    if (data === node.data) {
        if (node.left === null && node.right === null) {
            return null
        }
        if (node.left === null) {
            return node.right
        }
        if (node.right === null) {
            return node.left
        }
        var tempNode = getSmallest(node.right)
        node.data = tempNode.data
        node.right = removeNode(node.right)
    }
}

function remove(data) {
    root = removeNode(this.root, data)
}

function removeNode(node, data) {
    if (node === null) {
        return null
    }
    if (data === node.data) {
        // no children node
        if (node.left === null && node.right === null ) {
            return null
        }
        // no left leaf node
        if (node.left === null) {
            return node.right
        }
        // no right leaf node
        if (node.right === null) {
            return node.left
        }
        // two child nodes
        var tempNode = getSmallest(node.right)
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
    } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
    } else {
        node.right = removeNode(node.right, data)
        return node
        
    }
}


module.exports = BST