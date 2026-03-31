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


// --- working with classes ---

const element = document.querySelector('.box')

// add a class
element.classList.add('active')

// remove a class
element.classList.remove('hidden')

// toggle - adds if not there, removes if already there
element.classList.toggle('dark')

// check if class exists
console.log(element.classList.contains('active'))   // true


// --- reading and changing attributes ---

const link = document.querySelector('a')

// read attribute
console.log(link.getAttribute('href'))

// set attribute
link.setAttribute('href', 'https://github.com/kiranmv002')
link.setAttribute('target', '_blank')

// remove attribute
link.removeAttribute('title')


// --- creating new elements ---

// create element
const newDiv = document.createElement('div')
newDiv.textContent = 'i was created with javascript'
newDiv.classList.add('new-card')
newDiv.style.padding = '16px'
newDiv.style.background = '#00c9a7'
newDiv.style.borderRadius = '8px'
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


// --- removing elements ---

const oldDiv = document.querySelector('#old')
oldDiv.remove()   // removes from page

// remove a child
const parent = document.querySelector('#parent')
const child = document.querySelector('#child')
parent.removeChild(child)


// --- traversing the DOM ---
// moving between related elements

const list = document.querySelector('#list')

// parent
console.log(list.parentElement)

// children
console.log(list.children)
console.log(list.firstElementChild)
console.log(list.lastElementChild)

// siblings
const item = document.querySelector('.item')
console.log(item.nextElementSibling)
console.log(item.previousElementSibling)


// --- practical example ---
// change all paragraph colors on page

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((p, index) => {
    p.style.color = index % 2 === 0 ? '#00c9a7' : '#9aaac4'
})

// add a class to every other list item
const listItems = document.querySelectorAll('li')
listItems.forEach((item, index) => {
    if (index % 2 === 0) {
        item.classList.add('even')
    }
})

// count how many elements have a class
const activeItems = document.querySelectorAll('.active')
console.log('active items:', activeItems.length)
