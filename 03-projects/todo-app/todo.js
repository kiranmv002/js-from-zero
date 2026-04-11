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

// --- toggle done ---
function toggleDone(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, done: !todo.done }
        }
        return todo
    })

    saveTodos()
    render()
}


// --- delete todo ---
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id)
    saveTodos()
    render()
}


// --- clear done todos ---
function clearDone() {
    todos = todos.filter(todo => !todo.done)
    saveTodos()
    render()
}

// --- filter todos ---
function getFiltered() {
    if (currentFilter === 'active') return todos.filter(t => !t.done)
    if (currentFilter === 'done') return todos.filter(t => t.done)
    return todos
}


// --- update stats ---
function updateStats() {
    const total = todos.length
    const done = todos.filter(t => t.done).length
    const active = total - done

    const statsText = document.getElementById('statsText')
    statsText.textContent = `${active} active · ${done} done · ${total} total`
}
// --- render todos ---
function render() {
    const list = document.getElementById('todoList')
    const filtered = getFiltered()

    updateStats()

    if (filtered.length === 0) {
        const messages = {
            all: { icon: '📝', text: 'no tasks yet. add one above!' },
            active: { icon: '✅', text: 'no active tasks. all done!' },
            done: { icon: '🎯', text: 'no completed tasks yet.' }
        }
        const msg = messages[currentFilter]
        list.innerHTML = `
            <div class="empty">
                <span>${msg.icon}</span>
                ${msg.text}
            </div>
        `
        return
    }

    list.innerHTML = filtered.map(todo => `
        <div class="todo-item ${todo.done ? 'done' : ''}" data-id="${todo.id}">
            <button class="check-btn" onclick="toggleDone(${todo.id})">
                ${todo.done ? '✓' : ''}
            </button>
            <span class="todo-text">${todo.text}</span>
            <span class="priority ${todo.priority}">${todo.priority}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">✕</button>
        </div>
    `).join('')
}
