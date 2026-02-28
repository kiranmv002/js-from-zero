// ==============================
// Day 2 - Functions in JavaScript
// ==============================


// ----------------------------
// Function Declaration
// the classic way to write a function
// can be called even before it is defined (hoisting)
// ----------------------------

function greet(name) {
    return `hey ${name}, welcome!`
}

console.log(greet("Kiran"))   // hey Kiran, welcome!
console.log(greet("Ravi"))    // hey Ravi, welcome!


// ----------------------------
// Function with multiple parameters
// ----------------------------

function add(a, b) {
    return a + b
}

console.log(add(5, 10))    // 15
console.log(add(20, 30))   // 50

// ----------------------------
// Default Parameters
// if no value is passed, it uses the default
// ----------------------------

function greetUser(name = "stranger") {
    return `hey ${name}!`
}

console.log(greetUser("Kiran"))   // hey Kiran!
console.log(greetUser())          // hey stranger!


// ----------------------------
// Function Expression
// storing a function inside a variable
// cannot be called before it is defined
// ----------------------------

const multiply = function(a, b) {
    return a * b
}

console.log(multiply(4, 5))   // 20

// ----------------------------
// Arrow Functions
// shorter and cleaner way to write functions
// mostly used in modern javascript
// ----------------------------

// regular function
function square(n) {
    return n * n
}

// same function as arrow function
const squareArrow = (n) => {
    return n * n
}

// even shorter - when there is only one line you can remove braces and return
const squareShort = n => n * n

console.log(square(4))        // 16
console.log(squareArrow(4))   // 16
console.log(squareShort(4))   // 16


// ----------------------------
// Arrow function with multiple params
// ----------------------------

const addTwo = (a, b) => a + b

console.log(addTwo(10, 20))   // 30
