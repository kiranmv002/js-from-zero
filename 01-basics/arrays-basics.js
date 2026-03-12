// Day 5 - Arrays in JavaScript

// creating an array
const fruits = ["apple", "mango", "banana", "orange"]
console.log(fruits)


// accessing elements by index
// index starts from 0
console.log(fruits[0])   // apple
console.log(fruits[1])   // mango
console.log(fruits[3])   // orange


// length of array
console.log(fruits.length)   // 4


// last element
console.log(fruits[fruits.length - 1])   // orange


// changing an element
fruits[1] = "grapes"
console.log(fruits)   // apple grapes banana orange


// array with mixed types
const mixed = ["kiran", 19, true, null]
console.log(mixed)


// --- adding and removing elements ---

const nums = [1, 2, 3, 4, 5]

// push - add to end
nums.push(6)
console.log(nums)   // [1,2,3,4,5,6]

// pop - remove from end
nums.pop()
console.log(nums)   // [1,2,3,4,5]

// unshift - add to beginning
nums.unshift(0)
console.log(nums)   // [0,1,2,3,4,5]

// shift - remove from beginning
nums.shift()
console.log(nums)   // [1,2,3,4,5]


// --- searching ---

const colors = ["red", "green", "blue", "green"]

// indexOf - returns first index of element
console.log(colors.indexOf("green"))    // 1

// lastIndexOf - returns last index
console.log(colors.lastIndexOf("green"))   // 3

// includes - returns true or false
console.log(colors.includes("blue"))    // true
console.log(colors.includes("yellow"))  // false


// --- slicing and splicing ---

const letters = ["a", "b", "c", "d", "e"]

// slice - returns part of array without changing original
const sliced = letters.slice(1, 4)
console.log(sliced)    // [b, c, d]
console.log(letters)   // original unchanged

// splice - removes or replaces elements in original array
const removed = letters.splice(1, 2)
console.log(removed)   // [b, c]
console.log(letters)   // [a, d, e]


// --- combining arrays ---

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// concat
const combined = arr1.concat(arr2)
console.log(combined)   // [1,2,3,4,5,6]

// spread operator - modern way
const merged = [...arr1, ...arr2]
console.log(merged)   // [1,2,3,4,5,6]


// --- useful array methods ---

const numbers = [3, 1, 4, 1, 5, 9, 2, 6]

// sort - sorts alphabetically by default
const sorted = [...numbers].sort((a, b) => a - b)
console.log(sorted)   // [1,1,2,3,4,5,6,9]

// reverse
const reversed = [...numbers].reverse()
console.log(reversed)

// join - array to string
const words = ["hello", "world"]
console.log(words.join(" "))   // hello world
console.log(words.join("-"))   // hello-world

// flat - flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]]
console.log(nested.flat())     // [1,2,3,4,[5,6]]
console.log(nested.flat(2))    // [1,2,3,4,5,6]
