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


// --- Promise.all ---
// run multiple promises at the same time
// waits for all to finish

async function getMultiple() {
    try {
        const [post, user, todo] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json()),
        ])

        console.log('post:', post.title)
        console.log('user:', user.name)
        console.log('todo:', todo.title)
    } catch (error) {
        console.error('one failed:', error)
    }
}

getMultiple()


// --- Promise.allSettled ---
// like Promise.all but doesnt stop on failure
// returns result of each promise

async function getAllSettled() {
    const results = await Promise.allSettled([
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
        fetch('https://invalid-url-that-fails.xyz').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
    ])

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`request ${index + 1} succeeded`)
        } else {
            console.log(`request ${index + 1} failed:`, result.reason.message)
        }
    })
}

getAllSettled()


// --- Promise.race ---
// resolves with whichever promise finishes first

async function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('request timed out')), ms)
    )
    return Promise.race([promise, timeout])
}

async function fetchWithTimeout() {
    try {
        const data = await withTimeout(
            fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
            5000   // 5 second timeout
        )
        console.log('got data before timeout:', data.title)
    } catch (error) {
        console.log(error.message)
    }
}

fetchWithTimeout()


// --- Promise.any ---
// resolves with first successful promise
// only rejects if ALL fail

async function tryMultipleSources() {
    try {
        const data = await Promise.any([
            fetch('https://invalid1.xyz').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
            fetch('https://invalid2.xyz').then(r => r.json()),
        ])
        console.log('first success:', data.title)
    } catch {
        console.log('all failed')
    }
}

tryMultipleSources()


// --- practical example ---
// simulate loading user dashboard data step by step

function simulateDelay(ms, data) {
    return new Promise(resolve => setTimeout(() => resolve(data), ms))
}

async function loadDashboard(userId) {
    console.log('loading dashboard...')

    try {
        // step 1 — get user info
        console.log('step 1: fetching user...')
        const user = await simulateDelay(500, {
            id: userId,
            name: 'Kiran',
            role: 'student'
        })
        console.log('user loaded:', user.name)

        // step 2 — get user stats (parallel)
        console.log('step 2: fetching stats...')
        const [commits, projects, streak] = await Promise.all([
            simulateDelay(300, 200),
            simulateDelay(400, 5),
            simulateDelay(200, 30)
        ])
        console.log('stats loaded — commits:', commits, 'projects:', projects, 'streak:', streak)

        // step 3 — get recent activity
        console.log('step 3: fetching activity...')
        const activity = await simulateDelay(400, [
            'pushed to js-from-zero',
            'updated kiran.codes',
            'solved 2 DSA problems'
        ])
        console.log('activity loaded:', activity)

        console.log('\n=== dashboard ready ===')
        return { user, stats: { commits, projects, streak }, activity }

    } catch (error) {
        console.error('dashboard failed to load:', error)
    }
}

loadDashboard(1)
