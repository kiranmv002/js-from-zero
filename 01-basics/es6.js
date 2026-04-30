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


// --- destructuring ---

// array destructuring
const colors = ['red', 'green', 'blue']
const [first, second, third] = colors
console.log(first)    // red
console.log(second)   // green

// skip elements
const [, , last] = colors
console.log(last)   // blue

// with default values
const [x = 0, y = 0, z = 0, w = 0] = [1, 2]
console.log(x, y, z, w)   // 1 2 0 0

// object destructuring
const student = {
    name: 'Kiran',
    age: 19,
    city: 'Hyderabad',
    college: 'JNTU'
}

const { name: studentName, age, city } = student
console.log(studentName)   // Kiran
console.log(age)           // 19

// nested destructuring
const profile = {
    user: {
        name: 'Kiran',
        address: {
            city: 'Hyderabad'
        }
    }
}

const { user: { name: userName, address: { city: userCity } } } = profile
console.log(userName)   // Kiran
console.log(userCity)   // Hyderabad

// destructuring in function params
function displayUser({ name, age, city = 'unknown' }) {
    console.log(`${name}, ${age}, ${city}`)
}

displayUser({ name: 'Kiran', age: 19, city: 'Hyderabad' })
displayUser({ name: 'Ravi', age: 20 })


// --- spread operator ---

// spread array
const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]
const combined = [...nums1, ...nums2]
console.log(combined)   // [1,2,3,4,5,6]

// copy array
const original = [1, 2, 3]
const copy = [...original]
copy.push(4)
console.log(original)   // [1,2,3] unchanged
console.log(copy)       // [1,2,3,4]

// spread object
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const merged = { ...obj1, ...obj2 }
console.log(merged)   // { a:1, b:2, c:3, d:4 }

// override with spread
const defaults = { theme: 'dark', lang: 'en', fontSize: 14 }
const custom = { ...defaults, theme: 'light' }
console.log(custom)   // theme is now light

// spread in function call
const numbers = [5, 2, 8, 1, 9]
console.log(Math.max(...numbers))   // 9
console.log(Math.min(...numbers))   // 1


// --- rest parameters ---
// collect remaining arguments into array

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0)
}

console.log(sum(1, 2, 3))         // 6
console.log(sum(1, 2, 3, 4, 5))   // 15

function first2AndRest(a, b, ...rest) {
    console.log('first:', a)
    console.log('second:', b)
    console.log('rest:', rest)
}

first2AndRest(1, 2, 3, 4, 5)
