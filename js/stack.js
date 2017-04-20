function stack() {
    // last in first out
    let items = [];
    // in
    this.push = function(element) {
        items.push(element);
    }
    // out
    this.pop = function() {
        return items.pop();
    }
    this.peek = function() {
        return items[items.length - 1];
    }
    this.isEmpty = function() {
        return items.length === 0;
    }
    this.clear = function() {
        items = []
    }
    this.size = function() {
        return items.length
    }
}

function print(element) {
    console.log(element)
}

// test caculate
var testCaculateString = "1+((2+3)*4)-5"

//前缀式
function forwardFunc(element) {
    let s1 = new stack()
    let s2 = new stack()
    let result = ''
    // 从右至左
    let reverseElement = element.split('').reverse()
    reverseElement.forEach(x => {
        if(isNaN(x)){
            if(!s1.peek()|| s1.peek() === ')'){
                s1.push(x)
            } else {
                if (x === '*' || x === '/') {
                    s1.push(x)
                } else if ( x === '+' || x === '-') {
                    while (s1.peek() === '*' || s1.peek() === '/') {
                        s2.push(s1.pop())
                    }
                    s1.push(x)
                } else if (x === '(') {
                    while (s1.peek()!==')') {
                        s2.push(s1.pop())
                    }
                    s1.pop()
                } else if (x === ')') {
                    s1.push(x)
                }
            }
        } else {
            s2.push(x)
        }
    })
    if (s1.size() !== 0) {
        while (s1.size()!==0){
            s2.push(s1.pop())
        }
        while (s2.size()!==0){
            result += s2.pop()
        }
        return result
    }
}

var resultString = forwardFunc(testCaculateString)
print(resultString)