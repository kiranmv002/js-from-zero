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
