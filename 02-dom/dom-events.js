// Day 9 - DOM Events in JavaScript
// events are things that happen on the page
// click, hover, type, scroll, resize etc
// we can listen for these and run code when they happen


// --- addEventListener ---
// the main way to listen for events

const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    console.log('button was clicked!')
})
