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
console.log(sub);

//5. IIFE(Immediately Invoked Function Expression)
(function () {
    console.log("Server is UP and Running on port 800");
})();

//6. Generator Function: A fucntion that returns an iterator onject, for generating a sequence of values
// function* and yield keyword
function* generateNumbersSequence() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const generator = generateNumbersSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7. Anonymous Function: No specific name
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let squareNumbers = numbers.map(function (e) {
    return e * e;
});
console.log(squareNumbers)
// Approach 2: With arrow function
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let squareNumber = number.map((e) => {
    return e * e;
});
console.log(squareNumber)

//8. Recursive Function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(4));

//9. Higher-Order Function: A function that takes one or more functions as argument
function addition(a, b) {
    return a + b;
}
function multiplication(a, b) {
    return a * b;
}
function operate(funcName, a, b) {
    return funcName(a, b);
}

const op = operate(multiplication, 4, 5);
console.log(op);