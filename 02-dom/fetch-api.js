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


// --- PUT request ---
// updating existing data

async function updatePost(id, updates) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        })

        const updated = await response.json()
        console.log('updated post:', updated)
        return updated
    } catch (error) {
        console.error('error updating:', error)
    }
}

updatePost(1, { title: 'updated title', body: 'updated body', userId: 1 })


// --- DELETE request ---

async function deletePost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })

        if (response.ok) {
            console.log(`post ${id} deleted successfully`)
        }
    } catch (error) {
        console.error('error deleting:', error)
    }
}

deletePost(1)


// --- fetch with headers ---
// some APIs need authentication headers

async function fetchWithAuth(url, token) {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 401) {
            throw new Error('unauthorized — invalid token')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}


// --- parallel fetch ---
// fetch multiple things at the same time
// Promise.all waits for all to finish

async function fetchMultiple() {
    try {
        const [users, posts, todos] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/todos').then(r => r.json()),
        ])

        console.log('users:', users.length)    // 10
        console.log('posts:', posts.length)    // 100
        console.log('todos:', todos.length)    // 200

        return { users, posts, todos }
    } catch (error) {
        console.error('one of the requests failed:', error)
    }
}

fetchMultiple()


// --- loading state pattern ---
// always show user something is happening

async function fetchWithLoading(url) {
    console.log('loading...')

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`error: ${response.status}`)
        }

        const data = await response.json()
        console.log('done! data:', data)
        return data
    } catch (error) {
        console.log('failed:', error.message)
    } finally {
        console.log('loading complete')   // always runs
    }
}

fetchWithLoading('https://jsonplaceholder.typicode.com/users/1')


// --- practical example ---
// fetch github user and display info

async function showGithubProfile(username) {
    console.log(`fetching profile for ${username}...`)

    try {
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`)
        ])

        const user = await userRes.json()
        const repos = await reposRes.json()

        console.log('=== github profile ===')
        console.log('name:', user.name || username)
        console.log('bio:', user.bio || 'no bio')
        console.log('location:', user.location || 'not set')
        console.log('public repos:', user.public_repos)
        console.log('followers:', user.followers)
        console.log('following:', user.following)
        console.log('\n=== recent repos ===')

        repos.forEach(repo => {
            console.log(`- ${repo.name} (⭐ ${repo.stargazers_count})`)
        })

    } catch (error) {
        console.error('failed to fetch profile:', error)
    }
}

showGithubProfile('kiranmv002')
