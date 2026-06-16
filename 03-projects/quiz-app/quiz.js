// Day 18 - Mini Project: Quiz App
// uses classes, arrays, dom, events, timers


// --- questions data ---
const questions = [
    {
        category: 'variables',
        question: 'Which keyword creates a variable that cannot be reassigned?',
        options: ['var', 'let', 'const', 'static'],
        correct: 2
    },
    {
        category: 'data types',
        question: 'What does typeof null return in JavaScript?',
        options: ['"null"', '"undefined"', '"object"', '"boolean"'],
        correct: 2
    },
    {
        category: 'functions',
        question: 'What is the correct arrow function syntax?',
        options: [
            'function => (x) { return x }',
            'const fn = (x) => x',
            'const fn = function(x) => x',
            'arrow fn(x) { return x }'
        ],
        correct: 1
    },
    {
        category: 'arrays',
        question: 'Which method adds an element to the END of an array?',
        options: ['unshift()', 'push()', 'append()', 'add()'],
        correct: 1
    },
    {
        category: 'array methods',
        question: 'Which method creates a NEW array by transforming every element?',
        options: ['forEach()', 'filter()', 'map()', 'reduce()'],
        correct: 2
    },
    {
        category: 'objects',
        question: 'How do you access a property called "name" from object "user"?',
        options: ['user->name', 'user::name', 'user[name]', 'user.name'],
        correct: 3
    },
    {
        category: 'dom',
        question: 'Which method selects the FIRST element matching a CSS selector?',
        options: [
            'getElementById()',
            'querySelector()',
            'getElement()',
            'selectElement()'
        ],
        correct: 1
    },
    {
        category: 'events',
        question: 'Which method is used to listen for events on an element?',
        options: [
            'element.on()',
            'element.listen()',
            'element.addEventListener()',
            'element.attachEvent()'
        ],
        correct: 2
    },
    {
        category: 'async',
        question: 'What does the "await" keyword do?',
        options: [
            'Creates a new Promise',
            'Pauses execution until a Promise resolves',
            'Cancels an async function',
            'Converts a value to a Promise'
        ],
        correct: 1
    },
    {
        category: 'es6',
        question: 'What does the spread operator (...) do?',
        options: [
            'Creates a rest parameter',
            'Spreads elements of an array or object',
            'Declares a new variable',
            'Calls a function asynchronously'
        ],
        correct: 1
    }
]


