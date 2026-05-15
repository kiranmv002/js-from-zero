// Day 14 - Fetch and APIs in JavaScript
// fetch is used to make HTTP requests to get data from the internet
// APIs are services that give us data in JSON format


// --- basic fetch ---
// fetch returns a Promise
// we use .then() to handle the response

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('status:', response.status)     // 200
        console.log('ok:', response.ok)             // true
        return response.json()   // convert to JS object
    })
    .then(data => {
        console.log('data:', data)
        console.log('title:', data.title)
    })
    .catch(error => {
        console.log('error:', error)
    })


// --- fetch with async await ---
// cleaner way to write fetch

async function getPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('fetch failed:', error)
    }
}

getPost(1)


// --- fetch multiple items ---

async function getAllPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()

        console.log('total posts:', posts.length)     // 100
        console.log('first post:', posts[0])
        console.log('last post:', posts[posts.length - 1])

        // show only first 5
        const first5 = posts.slice(0, 5)
        first5.forEach(post => {
            console.log(`${post.id}. ${post.title}`)
        })

        return posts
    } catch (error) {
        console.error(error)
    }
}

getAllPosts()


// --- fetch with query params ---

async function searchUsers(username) {
    try {
        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url)
        const user = await response.json()

        console.log('name:', user.name)
        console.log('bio:', user.bio)
        console.log('repos:', user.public_repos)
        console.log('followers:', user.followers)

        return user
    } catch (error) {
        console.error('error fetching user:', error)
    }
}

searchUsers('kiranmv002')


// --- POST request ---
// sending data to an API

async function createPost(title, body) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 1
            })
        })

        const newPost = await response.json()
        console.log('created post:', newPost)
        console.log('new id:', newPost.id)
        return newPost
    } catch (error) {
        console.error('error creating post:', error)
    }
}

createPost('my first post', 'this is the content of my first post')

