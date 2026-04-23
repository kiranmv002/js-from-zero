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

// read object back
const savedUser = JSON.parse(localStorage.getItem('user'))
console.log(savedUser)
console.log(savedUser.name)      // Kiran
console.log(savedUser.skills)    // [HTML, CSS, JavaScript]


// storing array
const todos = ['learn js', 'build projects', 'push to github']
localStorage.setItem('todos', JSON.stringify(todos))

const savedTodos = JSON.parse(localStorage.getItem('todos'))
console.log(savedTodos)   // [learn js, build projects, push to github]


// --- safe reading ---
// getItem returns null if key doesnt exist
// always handle null case

function getFromStorage(key, defaultValue) {
    const item = localStorage.getItem(key)
    if (item === null) return defaultValue
    try {
        return JSON.parse(item)
    } catch {
        return item
    }
}

const theme = getFromStorage('theme', 'dark')
console.log(theme)   // dark (default since we havent set it)

const count = getFromStorage('count', 0)
console.log(count)   // 0 (default)


// --- checking available space ---
// localStorage limit is about 5MB per origin

function getStorageSize() {
    let total = 0
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            total += localStorage[key].length + key.length
        }
    }
    return (total / 1024).toFixed(2) + ' KB'
}

console.log('storage used:', getStorageSize())


// --- practical example 1 ---
// theme preference that persists

function saveTheme(theme) {
    localStorage.setItem('theme', theme)
    document.body.className = theme
    console.log('theme saved:', theme)
}

function loadTheme() {
    const saved = localStorage.getItem('theme') || 'dark'
    document.body.className = saved
    console.log('theme loaded:', saved)
}

loadTheme()


// --- practical example 2 ---
// counter that remembers its value

function getCount() {
    return parseInt(localStorage.getItem('counter') || '0')
}

function increment() {
    const current = getCount()
    const newCount = current + 1
    localStorage.setItem('counter', newCount)
    console.log('count:', newCount)
    return newCount
}

function decrement() {
    const current = getCount()
    const newCount = Math.max(0, current - 1)
    localStorage.setItem('counter', newCount)
    console.log('count:', newCount)
    return newCount
}

function resetCount() {
    localStorage.removeItem('counter')
    console.log('count reset')
}

console.log('current count:', getCount())
increment()
increment()
increment()
console.log('after 3 increments:', getCount())
decrement()
console.log('after decrement:', getCount())


// --- practical example 3 ---
// form data that auto saves as you type
// so you dont lose it on refresh

function autoSaveForm() {
    const fields = ['username', 'email', 'bio']

    // load saved values on page load
    fields.forEach(field => {
        const input = document.getElementById(field)
        if (input) {
            const saved = localStorage.getItem('form_' + field)
            if (saved) input.value = saved
        }
    })

    // save on every input change
    fields.forEach(field => {
        const input = document.getElementById(field)
        if (input) {
            input.addEventListener('input', () => {
                localStorage.setItem('form_' + field, input.value)
            })
        }
    })
}

autoSaveForm()


// --- practical example 4 ---
// recently viewed items

function addToRecent(item) {
    let recent = JSON.parse(localStorage.getItem('recent') || '[]')

    // remove if already exists
    recent = recent.filter(i => i !== item)

    // add to beginning
    recent.unshift(item)

    // keep only last 5
    recent = recent.slice(0, 5)

    localStorage.setItem('recent', JSON.stringify(recent))
    console.log('recent items:', recent)
}

addToRecent('javascript')
addToRecent('css')
addToRecent('html')
addToRecent('javascript')   // moves to front
console.log('final recent:', JSON.parse(localStorage.getItem('recent')))


// --- sessionStorage ---
// same as localStorage but data clears when tab is closed

sessionStorage.setItem('sessionData', 'this clears on tab close')
console.log(sessionStorage.getItem('sessionData'))

// all same methods work
// sessionStorage.getItem()
// sessionStorage.setItem()
// sessionStorage.removeItem()
// sessionStorage.clear()
