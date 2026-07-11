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

