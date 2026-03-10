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
