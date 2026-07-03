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

export function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    return clean === clean.split('').reverse().join('')
}

export function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}

export function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
}

export function countOccurrences(str, char) {
    return str.split(char).length - 1
}

export function removeSpaces(str) {
    return str.replace(/\s+/g, '')
}

// default export — the main thing this module does
export default function formatName(firstName, lastName) {
    return `${capitalize(firstName)} ${capitalize(lastName)}`
}
