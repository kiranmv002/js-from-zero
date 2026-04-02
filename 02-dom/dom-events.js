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


// --- common events ---

// click
btn.addEventListener('click', (e) => {
    console.log('clicked!', e)
})

// double click
btn.addEventListener('dblclick', () => {
    console.log('double clicked!')
})

// mouse over and mouse out
const card = document.querySelector('.card')

card.addEventListener('mouseover', () => {
    card.style.background = '#00c9a7'
    card.style.color = '#0b0f19'
})

card.addEventListener('mouseout', () => {
    card.style.background = '#131929'
    card.style.color = '#e8edf5'
})

// mouse enter and mouse leave (no bubbling)
card.addEventListener('mouseenter', () => {
    console.log('mouse entered card')
})

card.addEventListener('mouseleave', () => {
    console.log('mouse left card')
})
