var Queue = require('./queue')

function print(element) {
    console.log(element)
}

var q = new Queue()
q.enqueue('Meredith')
q.enqueue('Cynthia')
q.enqueue('Jenifer')
print(q.toString())
q.dequeue()
print(q.toString())
print("Front of queue " + q.front())
print("Back of queue "+ q.back())