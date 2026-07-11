// main.js
// Day 19 - Modules and Import/Export
// this file imports from all other module files

// --- named imports ---
import { add, subtract, multiply, divide, PI, average } from './math-utils.js'

console.log('=== math utils ===')
console.log(add(10, 5))           // 15
console.log(subtract(10, 5))      // 5
console.log(multiply(4, 5))       // 20
console.log(divide(10, 2))        // 5
console.log(PI)                   // 3.14159265
console.log(average(10, 20, 30))  // 20


// --- import with alias ---
import { add as addNums, multiply as times } from './math-utils.js'

console.log(addNums(3, 4))    // 7
console.log(times(3, 4))      // 12


// --- import everything as namespace ---
import * as MathUtils from './math-utils.js'

console.log('\n=== math namespace ===')
console.log(MathUtils.power(2, 8))    // 256
console.log(MathUtils.clamp(150, 0, 100))  // 100


// --- default + named imports ---
import formatName, {
    capitalize,
    truncate,
    isPalindrome,
    slugify,
    countWords
} from './string-utils.js'

console.log('\n=== string utils ===')
console.log(formatName('kiran', 'mv'))             // Kiran Mv
console.log(capitalize('hello world'))             // Hello world
console.log(truncate('this is a very long text that needs truncating', 20))
console.log(isPalindrome('racecar'))               // true
console.log(isPalindrome('hello'))                 // false
console.log(slugify('Hello World JS!'))            // hello-world-js
console.log(countWords('learn javascript every day'))  // 4


// --- array utils ---
import ArrayUtils, { unique, chunk, groupBy, sortBy, range } from './array-utils.js'

console.log('\n=== array utils ===')
console.log(unique([1, 2, 2, 3, 3, 3, 4]))        // [1,2,3,4]
console.log(chunk([1,2,3,4,5,6,7,8], 3))           // [[1,2,3],[4,5,6],[7,8]]
console.log(range(0, 10, 2))                        // [0,2,4,6,8]
console.log(ArrayUtils.sum([10, 20, 30, 40, 50]))  // 150
console.log(ArrayUtils.shuffle([1,2,3,4,5]))        // random order

const students = [
    { name: 'Kiran', grade: 'A', marks: 90 },
    { name: 'Ravi', grade: 'B', marks: 75 },
    { name: 'Arjun', grade: 'A', marks: 85 },
    { name: 'Priya', grade: 'B', marks: 80 },
]

console.log('\ngrouped by grade:')
console.log(groupBy(students, 'grade'))

console.log('\nsorted by marks:')
console.log(sortBy(students, 'marks', 'desc'))


// --- validator ---
import validateForm, {
    isEmail,
    isStrongPassword,
    isEmpty,
    isURL
} from './validator.js'

console.log('\n=== validator ===')
console.log(isEmail('kiran@gmail.com'))       // true
console.log(isEmail('not-an-email'))          // false
console.log(isURL('https://github.com'))      // true
console.log(isURL('not a url'))               // false
console.log(isEmpty(''))                       // true
console.log(isEmpty('hello'))                  // false

const passwordCheck = isStrongPassword('Kiran@123')
console.log('\npassword check:')
console.log(passwordCheck)

// validate a form
const formResult = validateForm({
    name: 'Kiran',
    email: '',
    message: 'hello'
})
console.log('\nform validation:')
console.log(formResult)
// { isValid: false, errors: { email: 'email is required' } }

