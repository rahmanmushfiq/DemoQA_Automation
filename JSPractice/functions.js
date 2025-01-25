//1. Function declaration 

function add(a, b) {
    return a + b;
}

function print() {
    console.log("Hi! this is JS")
}

let sum = add(5, 6);
console.log(sum)
print()

//2. Function Expression / Anonymous function
const multiply = function (x, y) {
    return x * y;
}
const mul = multiply(5, 6);
console.log(mul);

//3. Arrow function expression / Anonymous function
const divide = (t1, t2) => t1 / t2;
const div = divide(20, 2);
console.log(div)

//4. Function Constructor: 
const subtract = new Function('a', 'b', 'return a-b;')
const sub = subtract(10, 2);
console.log(sub)