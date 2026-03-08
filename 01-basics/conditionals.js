// Day 4 - Conditionals in JavaScript

// if statement
// runs only if condition is true
let age = 18

if (age >= 18) {
    console.log("you can vote")
}


// if else
// runs one block or the other
let marks = 45

if (marks >= 50) {
    console.log("pass")
} else {
    console.log("fail")
}


// if else if else
// checks multiple conditions one by one
let score = 75

if (score >= 90) {
    console.log("grade: A")
} else if (score >= 75) {
    console.log("grade: B")
} else if (score >= 60) {
    console.log("grade: C")
} else {
    console.log("grade: F")
}

// nested if
// if inside another if
let num = 15

if (num > 0) {
    if (num % 2 === 0) {
        console.log("positive even number")
    } else {
        console.log("positive odd number")
    }
} else {
    console.log("negative number")
}


// switch statement
// cleaner way to check one value against many cases
let day = "Monday"

switch (day) {
    case "Monday":
        console.log("start of the week")
        break
    case "Friday":
        console.log("end of the week")
        break
    case "Saturday":
    case "Sunday":
        console.log("weekend!")
        break
    default:
        console.log("just another day")
}


// ternary operator
// short way to write if else in one line
let temperature = 35
let weather = temperature > 30 ? "hot" : "cold"
console.log(weather)   // hot


// ternary with multiple conditions
let point = 85
let result = point >= 90 ? "A" : point >= 75 ? "B" : point >= 60 ? "C" : "F"
console.log(result)   // B


// logical operators in conditions
// && means both must be true
// || means at least one must be true
// ! means opposite

let isLoggedIn = true
let isAdmin = false

if (isLoggedIn && isAdmin) {
    console.log("welcome admin")
} else if (isLoggedIn && !isAdmin) {
    console.log("welcome user")
} else {
    console.log("please login")
}
