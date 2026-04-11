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

// --- create todo object ---
function createTodo(text, priority) {
    return {
        id: Date.now(),
        text,
        priority,
        done: false,
        createdAt: new Date().toLocaleDateString()
    }
}


// --- add todo ---
function addTodo() {
    const input = document.getElementById('todoInput')
    const prioritySelect = document.getElementById('prioritySelect')

    const text = input.value.trim()
    const priority = prioritySelect.value

    if (!text) {
        input.focus()
        input.style.borderColor = '#ff6b6b'
        setTimeout(() => input.style.borderColor = '#1e2740', 1000)
        return
    }

    const todo = createTodo(text, priority)
    todos.unshift(todo)   // add to beginning

    saveTodos()
    render()

    input.value = ''
    input.focus()
}


