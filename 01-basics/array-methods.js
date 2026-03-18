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
