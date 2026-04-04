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


// --- keyboard events ---

const input = document.querySelector('#input')

// keydown - fires when key is pressed
input.addEventListener('keydown', (e) => {
    console.log('key pressed:', e.key)
    console.log('key code:', e.code)
})

// keyup - fires when key is released
input.addEventListener('keyup', (e) => {
    console.log('value now:', input.value)
})

// listen for specific key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('escape pressed')
    }
    if (e.key === 'Enter') {
        console.log('enter pressed')
    }
})


// --- form events ---

const form = document.querySelector('#myForm')

// submit event
form.addEventListener('submit', (e) => {
    e.preventDefault()   // stops page from reloading
    console.log('form submitted')

    const nameInput = document.querySelector('#name')
    console.log('name entered:', nameInput.value)
})

// input event - fires on every keystroke
const nameField = document.querySelector('#name')
nameField.addEventListener('input', (e) => {
    console.log('typing:', e.target.value)
})

// change event - fires when value changes and user leaves field
nameField.addEventListener('change', (e) => {
    console.log('changed to:', e.target.value)
