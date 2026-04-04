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
})

// focus and blur
nameField.addEventListener('focus', () => {
    nameField.style.borderColor = '#00c9a7'
})

nameField.addEventListener('blur', () => {
    nameField.style.borderColor = '#1e2740'
})


// --- event object ---
// e or event contains info about what happened

document.addEventListener('click', (e) => {
    console.log('clicked element:', e.target)
    console.log('element type:', e.target.tagName)
    console.log('click position x:', e.clientX)
    console.log('click position y:', e.clientY)
})


// --- event bubbling ---
// events bubble up from child to parent

const parent = document.querySelector('#parent')
const child = document.querySelector('#child')

parent.addEventListener('click', () => {
    console.log('parent clicked')
})

child.addEventListener('click', (e) => {
    e.stopPropagation()   // stops bubbling to parent
    console.log('child clicked')
})


// --- event delegation ---
// attach one listener to parent instead of many to children
// very useful for dynamic lists

const list = document.querySelector('#list')

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done')
        console.log('clicked item:', e.target.textContent)
    }
})


// --- window events ---

// scroll
window.addEventListener('scroll', () => {
    console.log('scrolled to:', window.scrollY)
})

// resize
window.addEventListener('resize', () => {
    console.log('window width:', window.innerWidth)
})

// load - fires when page fully loads
window.addEventListener('load', () => {
    console.log('page fully loaded')
})

// DOMContentLoaded - fires when html is parsed
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready')
})


// --- removing event listeners ---

function handleClick() {
    console.log('clicked')
}

btn.addEventListener('click', handleClick)

// remove after 5 seconds
setTimeout(() => {
    btn.removeEventListener('click', handleClick)
    console.log('listener removed')
}, 5000)


// --- once option ---
// listener fires only once then removes itself

btn.addEventListener('click', () => {
    console.log('this only fires once')
}, { once: true })


// --- practical example ---
// simple character counter for a textarea

const textarea = document.querySelector('#message')
const counter = document.querySelector('#counter')
const maxChars = 150

if (textarea && counter) {
    textarea.addEventListener('input', () => {
        const remaining = maxChars - textarea.value.length

        counter.textContent = `${textarea.value.length} / ${maxChars}`

        if (remaining < 20) {
            counter.style.color = '#ff6b6b'
        } else {
            counter.style.color = '#6b7a99'
        }

        if (textarea.value.length > maxChars) {
            textarea.value = textarea.value.substring(0, maxChars)
        }
    })
}


// --- practical example ---
// toggle password visibility

const passwordInput = document.querySelector('#password')
const toggleBtn = document.querySelector('#togglePass')

if (passwordInput && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'
            toggleBtn.textContent = 'hide'
        } else {
            passwordInput.type = 'password'
            toggleBtn.textContent = 'show'
        }
    })
}
