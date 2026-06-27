// string-utils.js

export function capitalize(str) {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function capitalizeWords(str) {
    return str.split(' ').map(capitalize).join(' ')
}

export function truncate(str, maxLength, suffix = '...') {
    if (str.length <= maxLength) return str
    return str.slice(0, maxLength - suffix.length) + suffix
}

export function countWords(str) {
    return str.trim().split(/\s+/).filter(Boolean).length
}
