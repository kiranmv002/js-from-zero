// array-utils.js

export function unique(arr) {
    return [...new Set(arr)]
}

export function flatten(arr) {
    return arr.flat(Infinity)
}

export function chunk(arr, size) {
    const chunks = []
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
    }
    return chunks
}

export function shuffle(arr) {
    const result = [...arr]
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]]
    }
    return result
}

export function groupBy(arr, key) {
    return arr.reduce((groups, item) => {
        const group = item[key]
        if (!groups[group]) groups[group] = []
        groups[group].push(item)
        return groups
    }, {})
}

export function sortBy(arr, key, order = 'asc') {
    return [...arr].sort((a, b) => {
        if (order === 'asc') return a[key] > b[key] ? 1 : -1
        return a[key] < b[key] ? 1 : -1
    })
}

export function sum(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

export function max(arr) {
    return Math.max(...arr)
}

export function min(arr) {
    return Math.min(...arr)
}

export function range(start, end, step = 1) {
    const result = []
    for (let i = start; i < end; i += step) {
        result.push(i)
    }
    return result
}

// default export
export default {
    unique,
    flatten,
    chunk,
    shuffle,
    groupBy,
    sortBy,
    sum,
    max,
    min,
    range
}
