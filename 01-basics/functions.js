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


