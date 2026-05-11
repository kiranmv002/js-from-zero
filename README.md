# js-from-zero ⚡

learning javascript from scratch. pushing code every day.
no fancy stuff, just me actually writing code instead of watching tutorials.

---

## 📝 what i have done so far

### ✅ day 1 — variables
file → 01-basics/variables.js

- learned the difference between var, let and const.
- var is old and causes weird bugs so just avoid it.
- let is for values that change, const is for values that dont. 
- also learned all basic data types like number, string, boolean, null and undefined.
- template literals are way cleaner than joining strings with + signs.

### ✅ day 2 — functions
file → 01-basics/functions.js

- learned different ways to write functions in javascript.
- function declarations can be called before they are defined because of hoisting.
- function expressions store a function inside a variable.
- arrow functions are the modern and cleaner way to write functions.
- default parameters are useful when you want a fallback value if nothing is passed.
- higher order functions take other functions as arguments which is used a lot in js.

### ✅ day 3 — loops
file → `01-basics/loops.js`

- for loop — when you know how many times to repeat
- while loop — when condition decides how many times
- do while loop — runs at least once
- for of loop — loop over arrays
- for in loop — loop over object keys
- break — stops loop early
- continue — skips current iteration
- forEach — cleaner way to loop arrays
- practical examples — sum of array, find even numbers


### ✅ day 4 — conditionals
file → `01-basics/conditionals.js`

- if, if else, if else if else
- nested if statements
- switch statement with break and default
- ternary operator — short if else in one line
- logical operators — && || !
- nullish coalescing ?? operator
- optional chaining ?. operator
- practical examples — grade calculator, login check


### ✅ day 5 — arrays basics
file → `01-basics/arrays-basics.js`

- creating arrays and accessing elements by index
- array length and last element
- push, pop, unshift, shift — add and remove
- indexOf, lastIndexOf, includes — searching
- slice and splice — getting parts of array
- concat and spread operator — combining arrays
- sort, reverse, join, flat — useful methods
- forEach and for of — looping arrays
- practical examples — sum, average, max, min, remove duplicates

### ✅ day 6 — objects basics
file → `01-basics/objects-basics.js`

- creating objects and accessing with dot and bracket notation
- adding, updating, deleting properties
- Object.keys, Object.values, Object.entries
- methods inside objects using this keyword

### ✅ day 7 — array methods
file → `01-basics/array-methods.js`

- map — transform every element into something new
- filter — keep only elements that pass condition
- reduce — reduce whole array to single value
- find — get first element matching condition
- findIndex — get index of first match
- some — true if at least one passes
- every — true only if all pass
- chaining — combine methods together
- practical examples — student marks calculator

### ✅ day 8 — dom basics
files → `02-dom/dom-basics.js` `02-dom/index.html`

- getElementById, querySelector, querySelectorAll
- reading and changing textContent, innerHTML
- changing styles directly with javascript
- classList — add, remove, toggle, contains
- reading and setting attributes
- creating new elements with createElement
- appendChild, prepend, insertBefore
- removing elements with remove and removeChild
- traversing DOM — parent, children, siblings
- practical examples — change colors, add classes

### ✅ day 9 — dom events
files → `02-dom/dom-events.js` `02-dom/index.html`

- addEventListener — the main way to listen for events
- click, dblclick, mouseover, mouseout, mouseenter, mouseleave
- keyboard events — keydown, keyup, specific keys
- form events — submit, input, change, focus, blur
- event object — target, tagName, clientX, clientY
- event bubbling and stopPropagation
- event delegation — one listener for all children
- window events — scroll, resize, load, DOMContentLoaded
- removeEventListener and once option
- practical examples — character counter, password toggle

### ✅ day 10 — mini project: todo app
files → `03-projects/todo-app/index.html` `03-projects/todo-app/todo.js`

- built a full todo app using everything learned so far
- add tasks with low medium high priority
- mark tasks as done with animated checkbox
- delete tasks with one click
- filter by all active done
- stats showing active done and total count
- clear all done tasks at once
- tasks saved in localStorage — stay after page refresh
- empty state messages for each filter
- enter key to add tasks quickly

### ✅ day 11 — local storage
files → `02-dom/local-storage.js` `02-dom/local-storage.html`

- setItem getItem removeItem clear
- storing objects and arrays with JSON stringify and parse
- safe reading with null handling
- checking storage size
- practical examples:
  - theme preference that persists on refresh
  - counter that remembers its value
  - auto save form data as you type
  - recently viewed items with max 5
- sessionStorage — clears when tab closes

### ✅ day 12 — es6+ features
file → `01-basics/es6.js`

- let and const vs var
- template literals with ${}
- arrow functions — all variations
- default parameters
- array and object destructuring
- nested destructuring
- destructuring in function params
- spread operator — arrays and objects
- rest parameters
- short circuit && and ||
- nullish coalescing ??
- optional chaining ?.
- enhanced object literals
- for of and for in loops
- practical example combining all features

### ✅ day 13 — mini project: calculator
files → `03-projects/calculator/index.html` `03-projects/calculator/calculator.js`

- built a full calculator from scratch
- add subtract multiply divide operations
- AC clears everything
- plus minus toggle and percentage
- calculation history saved below buttons
- click history item to reuse result
- full keyboard support — numbers operators enter escape backspace
- division by zero shows error
- floating point precision handled
- max 10 digit display limit

---

## 📊 progress

| day   | topic                             | status   |
|-------|-----------------------------------|----------|
| day 1 | variables and data types          | ✅ done | 
| day 2 | functions                         | ✅ done |
| day 3 | loops                             | ✅ done |
| day 4 | conditionals                      | ✅ done |
| day 5 | arrays basics                     | ✅ done |
| day 6 | objects basics                    | ✅ done |
| day 7 | array methods                     | ✅ done |
| day 8 | dom basics                        | ✅ done |
| day 9 | dom events                        | ✅ done |
| day 10 | mini project — todo app          | ✅ done |
| day 11 | local storage                    | ✅ done |
| day 12 | es6 features                     | ✅ done |
| day 13 | mini project — calculator        | ✅ done |

---

day 12 done. es6 makes javascript so much cleaner 💪
