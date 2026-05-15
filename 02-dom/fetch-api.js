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
