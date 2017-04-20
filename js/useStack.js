var stack = require( './stack')

function print(element){
    console.log(element)
}

function behindFunc(element){
    let s1 = new stack()
    let s2 = new stack()
    element.split('').forEach(x => {
        if(isNaN(x)){
            if(!s1.peek() || s1.peek() === '('){
                s1.push(x)
            } else {
                if( x !== ')'){
                    while((x==='+' || x==='-') && (s1.peek()==='/'|| s1.peek()==='*')) {
                        s2.push(s1.pop())
                    }
                    s1.push(x)
                } else {
                    while(x !== '(') {
                        s2.push(s1.pop())
                    }
                    s1.pop()
                }
            }
        }else{
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
var testString = '1+((2+3)*4)-5'
var behindResult = behindFunc(testString)
print(behindResult)