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
