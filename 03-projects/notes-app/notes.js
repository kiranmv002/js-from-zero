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


// --- NotesApp class ---
class NotesApp {
    constructor() {
        this.notes = this.load()
        this.currentFilter = 'all'
        this.searchQuery = ''
        this.editingId = null
        this.selectedColor = COLORS[0].value
    }

    load() {
        const saved = localStorage.getItem('notes-app')
        return saved ? JSON.parse(saved) : this.getDefaultNotes()
    }

    save() {
        localStorage.setItem('notes-app', JSON.stringify(this.notes))
    }

    getDefaultNotes() {
        return [
            {
                id: 1,
                title: 'welcome to notes app!',
                content: 'click + new note to create your first note. you can pin search filter and delete notes.',
                category: 'personal',
                color: '#00c9a7',
                pinned: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                title: 'javascript learning goals',
                content: 'complete js-from-zero repo\nlearn React basics\nbuild more projects\npractice DSA daily',
                category: 'learning',
                color: '#4f8ef7',
                pinned: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]
    }

    add(title, content, category, color) {
        const note = new Note(title, content, category, color)
        this.notes.unshift(note)
        this.save()
        return note
    }

    update(id, title, content, category, color) {
        const note = this.notes.find(n => n.id === id)
        if (note) {
            note.title = title || 'untitled'
            note.content = content
            note.category = category
            note.color = color
            note.updatedAt = new Date()
            this.save()
        }
    }
