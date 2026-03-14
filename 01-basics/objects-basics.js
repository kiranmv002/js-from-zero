// Day 6 - Objects in JavaScript

// creating an object
// objects store related data as key value pairs
const student = {
    name: "Kiran",
    age: 19,
    city: "Hyderabad",
    isStudent: true
}

console.log(student)


// accessing properties
// dot notation
console.log(student.name)    // Kiran
console.log(student.age)     // 19

// bracket notation
console.log(student["city"])   // Hyderabad


// adding new property
student.college = "JNTU"
console.log(student.college)   // JNTU


// updating a property
student.age = 20
console.log(student.age)   // 20


// deleting a property
delete student.isStudent
console.log(student)


// checking if property exists
console.log("name" in student)    // true
console.log("phone" in student)   // false


// --- object methods ---

// Object.keys - get all keys
const keys = Object.keys(student)
console.log(keys)   // [name, age, city, college]

// Object.values - get all values
const values = Object.values(student)
console.log(values)   // [Kiran, 20, Hyderabad, JNTU]

// Object.entries - get key value pairs
const entries = Object.entries(student)
console.log(entries)
