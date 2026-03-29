// Day 8 - DOM Basics in JavaScript
// DOM = Document Object Model
// it is the html page represented as javascript objects
// we can read and change the page using javascript


// --- selecting elements ---

// getElementById - select by id
const heading = document.getElementById('heading')
console.log(heading)

// querySelector - select by css selector (most used)
const btn = document.querySelector('#myBtn')
const title = document.querySelector('.title')
const firstP = document.querySelector('p')

// querySelectorAll - select all matching elements
const allBtns = document.querySelectorAll('button')
const allCards = document.querySelectorAll('.card')
console.log(allCards.length)

// getElementsByClassName
const items = document.getElementsByClassName('item')

// getElementsByTagName
const allH2 = document.getElementsByTagName('h2')

// --- reading and changing content ---

// textContent - get or set text
const para = document.querySelector('#para')
console.log(para.textContent)          // reads text
para.textContent = 'updated text'      // sets text

// innerHTML - get or set html
const box = document.querySelector('#box')
box.innerHTML = '<strong>bold text</strong>'

// innerText - only visible text
console.log(para.innerText)

// --- changing styles ---

const card = document.querySelector('.card')

// directly change style
card.style.backgroundColor = '#00c9a7'
card.style.color = '#0b0f19'
card.style.padding = '20px'
card.style.borderRadius = '8px'
newDiv.style.marginTop = '10px'

// add to page
const container = document.querySelector('#container')
container.appendChild(newDiv)     // add at end
container.prepend(newDiv)         // add at beginning

// insert before a specific element
const ref = document.querySelector('#ref')
container.insertBefore(newDiv, ref)

// insertAdjacentHTML - add html string relative to element
container.insertAdjacentHTML('beforeend', '<p>added with insertAdjacentHTML</p>')

