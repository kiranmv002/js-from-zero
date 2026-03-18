// Day 7 - Array Methods in JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// --- map ---
// creates a new array by transforming every element
// original array is not changed

const doubled = numbers.map(n => n * 2)
console.log(doubled)   // [2,4,6,8,10,12,14,16,18,20]

const squared = numbers.map(n => n * n)
console.log(squared)   // [1,4,9,16,25,36,49,64,81,100]

// map with objects
const students = [
    { name: "Kiran", marks: 90 },
    { name: "Ravi", marks: 75 },
    { name: "Arjun", marks: 85 }
]

const names = students.map(s => s.name)
console.log(names)   // [Kiran, Ravi, Arjun]

const grades = students.map(s => ({
    name: s.name,
    grade: s.marks >= 90 ? "A" : s.marks >= 75 ? "B" : "C"
}))
console.log(grades)
// --- filter ---
// creates a new array with only elements that pass the condition

const evens = numbers.filter(n => n % 2 === 0)
console.log(evens)   // [2,4,6,8,10]

const odds = numbers.filter(n => n % 2 !== 0)
console.log(odds)   // [1,3,5,7,9]

const bigNumbers = numbers.filter(n => n > 5)
console.log(bigNumbers)   // [6,7,8,9,10]

// filter with objects
const topStudents = students.filter(s => s.marks >= 85)
console.log(topStudents)   // Kiran and Arjun
// --- reduce ---
// reduces the whole array to a single value

const sum = numbers.reduce((total, n) => total + n, 0)
console.log(sum)   // 55

const product = numbers.reduce((total, n) => total * n, 1)
console.log(product)   // 3628800

// reduce to find max
const max = numbers.reduce((a, b) => a > b ? a : b)
console.log(max)   // 10

// reduce to count occurrences
const fruits = ["apple", "mango", "apple", "banana", "mango", "apple"]
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
}, {})
console.log(count)   // { apple: 3, mango: 2, banana: 1 }

// --- find ---
// returns the first element that passes the condition

const firstEven = numbers.find(n => n % 2 === 0)
console.log(firstEven)   // 2

const found = students.find(s => s.name === "Ravi")
console.log(found)   // { name: Ravi, marks: 75 }

const notFound = students.find(s => s.name === "Priya")
console.log(notFound)   // undefined


// --- findIndex ---
// returns the index of first element that passes condition

const firstEvenIndex = numbers.findIndex(n => n % 2 === 0)
console.log(firstEvenIndex)   // 1

const raviIndex = students.findIndex(s => s.name === "Ravi")
console.log(raviIndex)   // 1


// --- some ---
// returns true if at least one element passes condition

const hasEven = numbers.some(n => n % 2 === 0)
console.log(hasEven)   // true

const hasNegative = numbers.some(n => n < 0)
console.log(hasNegative)   // false
