// Day 3 - Loops in JavaScript

// for loop
// used when you know how many times to repeat
for (let i = 1; i <= 5; i++) {
    console.log("count:", i)
}
// output: count 1, count 2 ... count 5


// while loop
// used when you dont know how many times to repeat
let num = 1
while (num <= 5) {
    console.log("while:", num)
    num++
}


// do while loop
// runs at least once even if condition is false
let x = 1
do {
    console.log("do while:", x)
    x++
} while (x <= 3)


// for of loop
// used to loop over arrays
const fruits = ["apple", "mango", "banana"]
for (let fruit of fruits) {
    console.log(fruit)
}


// for in loop
// used to loop over object keys
const student = { name: "Kiran", age: 19, city: "Hyderabad" }
for (let key in student) {
    console.log(key, ":", student[key])
}


// break - stops the loop
for (let i = 1; i <= 10; i++) {
    if (i === 5) break
    console.log("break example:", i)
}
// stops at 4


// continue - skips current iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue
    console.log("continue example:", i)
}
// skips 3, prints 1 2 4 5


// loop with array index
const names = ["Kiran", "Ravi", "Arjun"]
for (let i = 0; i < names.length; i++) {
    console.log(i, names[i])
}


// nested loop
// loop inside a loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, "x", j, "=", i * j)
    }
}


// forEach - cleaner way to loop over array
const marks = [85, 90, 78, 92, 88]
marks.forEach((mark, index) => {
    console.log(`student ${index + 1}: ${mark}`)
})


// practical example - sum of array using loop
const numbers = [10, 20, 30, 40, 50]
let total = 0
for (let num of numbers) {
    total += num
}
console.log("total:", total)   // 150


// practical example - find even numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = []
for (let n of nums) {
    if (n % 2 === 0) {
        evens.push(n)
    }
}
console.log("even numbers:", evens)   // [2, 4, 6, 8, 10]
