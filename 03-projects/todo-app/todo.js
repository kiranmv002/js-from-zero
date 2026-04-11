// Day 10 - Mini Project: Todo App
// uses everything learned so far:
// arrays, objects, functions, dom, events, local storage

// --- state ---
let todos = JSON.parse(localStorage.getItem('todos')) || []
let currentFilter = 'all'


// --- save to local storage ---
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}
