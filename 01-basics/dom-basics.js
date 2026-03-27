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
