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
// --- methods inside objects ---

const person = {
    name: "Kiran",
    age: 19,
    greet() {
        return `hey i am ${this.name} and i am ${this.age} years old`
    },
    isAdult() {
        return this.age >= 18 ? "adult" : "minor"
    }
}

console.log(person.greet())     // hey i am Kiran and i am 19 years old
console.log(person.isAdult())   // adult


// --- nested objects ---

const profile = {
    name: "Kiran",
    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500001
    },
    skills: ["HTML", "CSS", "JavaScript"]
}

console.log(profile.address.city)      // Hyderabad
console.log(profile.skills[0])         // HTML
console.log(profile.address.pincode)   // 500001
// --- looping over objects ---

const marks = {
    maths: 90,
    physics: 85,
    chemistry: 88,
    english: 92
}

// for in loop
for (let subject in marks) {
    console.log(subject, ":", marks[subject])
}

// using Object.entries with forEach
Object.entries(marks).forEach(([subject, mark]) => {
    console.log(`${subject} → ${mark}`)
})


// --- copying objects ---

const original = { name: "Kiran", age: 19 }

// spread operator - creates a new copy
const copy = { ...original }
copy.name = "Ravi"

console.log(original.name)   // Kiran (unchanged)
console.log(copy.name)       // Ravi

// Object.assign
const copy2 = Object.assign({}, original)
console.log(copy2)


// --- merging objects ---

const personal = { name: "Kiran", age: 19 }
const academic = { college: "JNTU", year: 2 }

const merged = { ...personal, ...academic }
console.log(merged)
// { name: Kiran, age: 19, college: JNTU, year: 2 }


// --- destructuring ---

const user = {
    username: "kiranmv002",
    email: "kiran1@gmail.com",
    role: "student"
}

// pull out values into variables
const { username, email, role } = user
console.log(username)   // kiranmv002
console.log(email)      // kiran1@gmail.com

// rename while destructuring
const { username: uname, role: userRole } = user
console.log(uname)      // kiranmv002
console.log(userRole)   // student

// default values
const { phone = "not provided" } = user
console.log(phone)   // not provided
