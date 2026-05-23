// Day 15 - Promises and Async Await in JavaScript
// JavaScript is single threaded
// async code lets us do things without blocking the rest of the code
// like waiting for data from an API while other code keeps running


// --- what is a promise ---
// a promise is an object that represents a future value
// it can be: pending, fulfilled, or rejected

const myPromise = new Promise((resolve, reject) => {
    const success = true

    if (success) {
        resolve('it worked!')
    } else {
        reject('something went wrong')
    }
})

myPromise
    .then(result => console.log(result))    // it worked!
    .catch(error => console.log(error))


// --- promise states ---
// pending   → waiting for result
// fulfilled → resolve() was called
// rejected  → reject() was called

const pending = new Promise((resolve) => {
    setTimeout(() => resolve('done after 2 seconds'), 2000)
})

console.log(pending)   // Promise { <pending> }

pending.then(result => console.log(result))   // done after 2 seconds


// --- chaining promises ---
// .then() always returns a new promise
// so you can chain them

const step1 = new Promise(resolve => setTimeout(() => resolve(1), 500))

step1
    .then(val => {
        console.log('step 1:', val)   // 1
        return val + 1
    })
    .then(val => {
        console.log('step 2:', val)   // 2
        return val + 1
    })
    .then(val => {
        console.log('step 3:', val)   // 3
    })
    .catch(err => {
        console.log('something failed:', err)
    })


// --- creating useful promises ---

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

wait(1000).then(() => console.log('waited 1 second'))


function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject(new Error('url is required'))
            return
        }
        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}


// --- async await ---
// async await is cleaner syntax for promises
// async functions always return a promise
// await pauses execution until the promise resolves

async function getData() {
    const result = await wait(1000)
    console.log('waited 1 second with async await')
}

getData()


// --- async await with fetch ---

async function getUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    return user
}

getUser(1).then(user => console.log('user:', user.name))


// --- try catch with async await ---

async function safeFetch(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('fetch failed:', error.message)
        return null
    }
}

safeFetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(post => console.log('post title:', post?.title))


// --- async await vs .then() ---
// both do the same thing — async await is just cleaner

// with .then()
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(todo => console.log('todo .then:', todo.title))
    .catch(err => console.error(err))

// with async await
async function getTodo() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const todo = await res.json()
        console.log('todo async:', todo.title)
    } catch (err) {
        console.error(err)
    }
}

getTodo()

