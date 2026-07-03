// validator.js
// a module for validating common inputs

export function isEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

export function isPhone(phone) {
    const regex = /^\+?[\d\s\-]{10,}$/
    return regex.test(phone)
}

export function isURL(url) {
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}

export function isStrongPassword(password) {
    return {
        hasMinLength: password.length >= 8,
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecial: /[!@#$%^&*]/.test(password),
        isStrong: password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password)
    }
}

export function isEmpty(value) {
    if (value === null || value === undefined) return true
    if (typeof value === 'string') return value.trim() === ''
    if (Array.isArray(value)) return value.length === 0
    if (typeof value === 'object') return Object.keys(value).length === 0
    return false
}

export function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value)
}

export function inRange(value, min, max) {
    return value >= min && value <= max
}

// default export — validate a form object
export default function validateForm(fields) {
    const errors = {}

    Object.entries(fields).forEach(([key, value]) => {
        if (isEmpty(value)) {
            errors[key] = `${key} is required`
        }
    })

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}
