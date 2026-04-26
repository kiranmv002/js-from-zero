// Day 12 - ES6+ Features in JavaScript
// ES6 = ECMAScript 2015 and beyond
// modern javascript syntax that is cleaner and shorter


// --- let and const ---
// let — block scoped, can be reassigned
// const — block scoped, cannot be reassigned
// var — function scoped, avoid using it

let age = 19
age = 20   // ok

const name = 'Kiran'
// name = 'Ravi'   // error — cannot reassign const

const arr = [1, 2, 3]
arr.push(4)   // ok — we are changing contents not reassigning
console.log(arr)


// --- template literals ---
// use backticks and ${} for expressions inside strings

const firstName = 'Kiran'
const city = 'Hyderabad'

// old way
const old = 'hello ' + firstName + ' from ' + city

// new way
const modern = `hello ${firstName} from ${city}`
console.log(modern)

// multiline strings
const multiline = `
    name: ${firstName}
    city: ${city}
    year: ${new Date().getFullYear()}
`
console.log(multiline)

// expressions inside ${}
const a = 10
const b = 5
console.log(`${a} + ${b} = ${a + b}`)
console.log(`${a > b ? 'a is bigger' : 'b is bigger'}`)


// --- arrow functions ---
// shorter syntax for functions

// old way
function add(a, b) {
    return a + b
}

// arrow function
const addArrow = (a, b) => a + b
console.log(addArrow(3, 4))   // 7

// one parameter — no brackets needed
const double = n => n * 2
console.log(double(5))   // 10

// no parameters — empty brackets
const greet = () => 'hello!'
console.log(greet())

// multiline arrow function
const getInfo = (name, age) => {
    const info = `${name} is ${age} years old`
    return info
}
console.log(getInfo('Kiran', 19))


// --- default parameters ---

function greetUser(name = 'stranger', greeting = 'hello') {
    return `${greeting} ${name}!`
}

console.log(greetUser('Kiran', 'hey'))   // hey Kiran!
console.log(greetUser('Kiran'))          // hello Kiran!
console.log(greetUser())                 // hello stranger!
