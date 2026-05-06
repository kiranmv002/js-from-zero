// Day 13 - Mini Project: Calculator
// uses dom manipulation, events, conditionals
// and everything learned so far


// --- state ---
let currentValue = '0'
let previousValue = ''
let operator = null
let shouldResetDisplay = false
let history = []


// --- display elements ---
const displayValue = document.getElementById('displayValue')
const expression = document.getElementById('expression')
const historyEl = document.getElementById('history')


// --- update display ---
function updateDisplay(value) {
    // limit display length
    if (value.length > 10) {
        const num = parseFloat(value)
        if (!isNaN(num)) {
            displayValue.textContent = parseFloat(num.toPrecision(8)).toString()
            return
        }
    }
    displayValue.textContent = value
}


// --- handle number input ---
function handleNumber(value) {
    if (shouldResetDisplay) {
        currentValue = value
        shouldResetDisplay = false
    } else {
        if (currentValue === '0' && value !== '.') {
            currentValue = value
        } else {
            // max 10 digits
            if (currentValue.replace('.', '').replace('-', '').length >= 10) return
            currentValue += value
        }
    }
    updateDisplay(currentValue)
}

