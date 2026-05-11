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


// --- handle decimal ---
function handleDecimal() {
    if (shouldResetDisplay) {
        currentValue = '0.'
        shouldResetDisplay = false
        updateDisplay(currentValue)
        return
    }
    if (!currentValue.includes('.')) {
        currentValue += '.'
        updateDisplay(currentValue)
    }
}


// --- handle operator ---
function handleOperator(op) {
    if (operator && !shouldResetDisplay) {
        calculate()
    }

    previousValue = currentValue
    operator = op
    shouldResetDisplay = true

    const opSymbols = { '+': '+', '-': '−', '*': '×', '/': '÷' }
    expression.textContent = `${previousValue} ${opSymbols[op]}`
}


// --- calculate result ---
function calculate() {
    if (!operator || !previousValue) return

    const prev = parseFloat(previousValue)
    const curr = parseFloat(currentValue)
    let result

    switch (operator) {
        case '+': result = prev + curr; break
        case '-': result = prev - curr; break
        case '*': result = prev * curr; break
        case '/':
            if (curr === 0) {
                currentValue = 'Error'
                updateDisplay('Error')
                expression.textContent = ''
                operator = null
                shouldResetDisplay = true
                return
            }
            result = prev / curr
            break
        default: return
    }

    // round to avoid floating point issues
    result = parseFloat(result.toPrecision(10))

    // save to history
    const opSymbols = { '+': '+', '-': '−', '*': '×', '/': '÷' }
    const historyEntry = `${previousValue} ${opSymbols[operator]} ${currentValue} = ${result}`
    addToHistory(historyEntry)

    expression.textContent = `${previousValue} ${opSymbols[operator]} ${currentValue} =`
    currentValue = result.toString()
    operator = null
    shouldResetDisplay = true

    updateDisplay(currentValue)
}


// --- clear ---
function clear() {
    currentValue = '0'
    previousValue = ''
    operator = null
    shouldResetDisplay = false
    expression.textContent = ''
    updateDisplay('0')
}


// --- toggle sign ---
function toggleSign() {
    if (currentValue === '0' || currentValue === 'Error') return
    currentValue = currentValue.startsWith('-')
        ? currentValue.slice(1)
        : '-' + currentValue
    updateDisplay(currentValue)
}


// --- percentage ---
function handlePercent() {
    if (currentValue === 'Error') return
    const num = parseFloat(currentValue)
    currentValue = (num / 100).toString()
    updateDisplay(currentValue)
}


// --- history ---
function addToHistory(entry) {
    history.unshift(entry)
    if (history.length > 10) history.pop()
    renderHistory()
}
