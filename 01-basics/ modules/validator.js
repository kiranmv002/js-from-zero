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
