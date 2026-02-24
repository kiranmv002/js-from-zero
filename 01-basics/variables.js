// ==============================
// Day 1 - Variables in JavaScript
// ==============================


// ----------------------------
// 3 ways to declare variables
// ----------------------------

// var is the old way
// avoid using it, causes bugs
var oldWay = "avoid this"

// let is for values that will change
let score = 0
score = 10   // changing score is fine with let
score = 25   // can change again

// const is for values that never change
const myName = "Ravi"
const myCollege = "JNTU"
const currentYear = 2024
// myName = "Kumar"  // this will throw error, const cant be changed


// ----------------------------
// Data Types
// ----------------------------

let age = 20           // number - whole number
let gpa = 8.5          // number - decimal also same type in js
let isPlaced = false   // boolean - true or false only
let city = "Hyderabad" // string - any text inside quotes
let nothing = null     // null - intentionally empty
let notDefined         // undefined - no value given yet


// ----------------------------
// typeof - check what type a variable is
// ----------------------------

console.log(typeof age)         // number
console.log(typeof isPlaced)    // boolean
console.log(typeof city)        // string
console.log(typeof nothing)     // object (this is a js quirk, dont worry)
console.log(typeof notDefined)  // undefined


// ----------------------------
// Template Literals
// easier way to combine strings and variables
// ----------------------------

// old way using + to join strings (messy)
console.log("My name is " + myName + " and I am " + age + " years old")

// new way using backticks and ${}  (clean)
console.log(`My name is ${myName} and I am ${age} years old`)
console.log(`I study at ${myCollege} and my GPA is ${gpa}`)

// you can even do math inside ${}
console.log(`In 5 years I will be ${age + 5} years old`)
