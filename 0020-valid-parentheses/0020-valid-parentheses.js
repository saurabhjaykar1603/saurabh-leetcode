/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack =[]
    let pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

for(let char of s)
// Opening brackets
if( char ==="("|| char ==="["|| char ==="{"){
    stack.push(char)
}else{
    if(stack.pop() !== pairs[char]){
        return false
    }
}


return stack.length ===0
};