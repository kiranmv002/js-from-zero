// Day 11 - Local Storage in JavaScript
// localStorage stores data in the browser
// data stays even after page refresh or closing browser
// stores everything as strings


// --- basic usage ---

// setItem - save data
localStorage.setItem('name', 'Kiran')
localStorage.setItem('age', '19')
localStorage.setItem('city', 'Hyderabad')

// getItem - read data
const name = localStorage.getItem('name')
const age = localStorage.getItem('age')
console.log(name)   // Kiran
console.log(age)    // 19 (string not number)

// removeItem - delete one item
localStorage.removeItem('city')
console.log(localStorage.getItem('city'))   // null

// clear - delete everything
// localStorage.clear()   // commented out so we keep our data


// --- storing objects and arrays ---
// localStorage only stores strings
// use JSON.stringify to convert object to string
// use JSON.parse to convert string back to object

const user = {
    name: 'Kiran',
    age: 19,
    skills: ['HTML', 'CSS', 'JavaScript']
}

// save object
localStorage.setItem('user', JSON.stringify(user))

