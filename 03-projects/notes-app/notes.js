// Day 20 - Mini Project: Notes App
// uses classes, localStorage, DOM, events, modules pattern


// --- config ---
const COLORS = [
    { name: 'teal', value: '#00c9a7' },
    { name: 'blue', value: '#4f8ef7' },
    { name: 'purple', value: '#a78bfa' },
    { name: 'pink', value: '#f472b6' },
    { name: 'orange', value: '#fb923c' },
    { name: 'yellow', value: '#fbbf24' },
]

const TAG_COLORS = {
    work: { bg: 'rgba(79,142,247,0.1)', color: '#4f8ef7' },
    personal: { bg: 'rgba(244,114,182,0.1)', color: '#f472b6' },
    learning: { bg: 'rgba(0,201,167,0.1)', color: '#00c9a7' },
    ideas: { bg: 'rgba(251,146,60,0.1)', color: '#fb923c' },
}


// --- Note class ---
class Note {
    constructor(title, content, category, color) {
        this.id = Date.now()
        this.title = title || 'untitled'
        this.content = content
        this.category = category
        this.color = color
        this.pinned = false
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    get formattedDate() {
        const now = new Date()
        const diff = now - new Date(this.updatedAt)
        const mins = Math.floor(diff / 60000)
        const hours = Math.floor(diff / 3600000)
        const days = Math.floor(diff / 86400000)

        if (mins < 1) return 'just now'
        if (mins < 60) return `${mins}m ago`
        if (hours < 24) return `${hours}h ago`
        return `${days}d ago`
    }
}

