// math-utils.js
// named exports — export multiple things from one file

export function add(a, b) {
    return a + b
}

export function subtract(a, b) {
    return a - b
}

export function multiply(a, b) {
    return a * b
}

export function divide(a, b) {
    if (b === 0) return 'cannot divide by zero'
    return a / b
}

export function power(base, exp) {
    return Math.pow(base, exp)
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max)
}

export function average(...nums) {
    return nums.reduce((a, b) => a + b, 0) / nums.length
}

export const PI = 3.14159265

export const E = 2.71828182
