// Day 18 - Mini Project: Quiz App
// uses classes, arrays, dom, events, timers


// --- questions data ---
const questions = [
    {
        category: 'variables',
        question: 'Which keyword creates a variable that cannot be reassigned?',
        options: ['var', 'let', 'const', 'static'],
        correct: 2
    },
    {
        category: 'data types',
        question: 'What does typeof null return in JavaScript?',
        options: ['"null"', '"undefined"', '"object"', '"boolean"'],
        correct: 2
    },
    {
        category: 'functions',
        question: 'What is the correct arrow function syntax?',
        options: [
            'function => (x) { return x }',
            'const fn = (x) => x',
            'const fn = function(x) => x',
            'arrow fn(x) { return x }'
        ],
        correct: 1
    },
    {
        category: 'arrays',
        question: 'Which method adds an element to the END of an array?',
        options: ['unshift()', 'push()', 'append()', 'add()'],
        correct: 1
    },
    {
        category: 'array methods',
        question: 'Which method creates a NEW array by transforming every element?',
        options: ['forEach()', 'filter()', 'map()', 'reduce()'],
        correct: 2
    },
    {
        category: 'objects',
        question: 'How do you access a property called "name" from object "user"?',
        options: ['user->name', 'user::name', 'user[name]', 'user.name'],
        correct: 3
    },
    {
        category: 'dom',
        question: 'Which method selects the FIRST element matching a CSS selector?',
        options: [
            'getElementById()',
            'querySelector()',
            'getElement()',
            'selectElement()'
        ],
        correct: 1
    },
    {
        category: 'events',
        question: 'Which method is used to listen for events on an element?',
        options: [
            'element.on()',
            'element.listen()',
            'element.addEventListener()',
            'element.attachEvent()'
        ],
        correct: 2
    },
    {
        category: 'async',
        question: 'What does the "await" keyword do?',
        options: [
            'Creates a new Promise',
            'Pauses execution until a Promise resolves',
            'Cancels an async function',
            'Converts a value to a Promise'
        ],
        correct: 1
    },
    {
        category: 'es6',
        question: 'What does the spread operator (...) do?',
        options: [
            'Creates a rest parameter',
            'Spreads elements of an array or object',
            'Declares a new variable',
            'Calls a function asynchronously'
        ],
        correct: 1
    }
]


// --- quiz class ---
class Quiz {
    constructor(questions) {
        this.questions = this.shuffle([...questions])
        this.currentIndex = 0
        this.score = 0
        this.correctCount = 0
        this.wrongCount = 0
        this.answered = false
        this.timer = null
        this.timeLeft = 15
        this.totalTime = 0
        this.startTime = null
    }

    get currentQuestion() {
        return this.questions[this.currentIndex]
    }

    get isLastQuestion() {
        return this.currentIndex === this.questions.length - 1
    }

    get progress() {
        return ((this.currentIndex) / this.questions.length) * 100
    }

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    }

    answer(index) {
        if (this.answered) return false
        this.answered = true

        const timeTaken = 15 - this.timeLeft
        this.totalTime += timeTaken

        clearInterval(this.timer)

        const isCorrect = index === this.currentQuestion.correct

        if (isCorrect) {
            this.score += Math.max(10, 20 - timeTaken)
            this.correctCount++
        } else {
            this.wrongCount++
        }

        return isCorrect
    }

    next() {
        if (this.isLastQuestion) return false
        this.currentIndex++
        this.answered = false
        this.timeLeft = 15
        return true
    }

    get avgTime() {
        return Math.round(this.totalTime / this.questions.length)
    }
}


// --- quiz instance ---
let quiz = new Quiz(questions)

const letters = ['A', 'B', 'C', 'D']


// --- render question ---
function renderQuestion() {
    const q = quiz.currentQuestion

    document.getElementById('questionNum').textContent =
        `question ${quiz.currentIndex + 1} of ${quiz.questions.length}`
    document.getElementById('correctCount').textContent =
        `${quiz.correctCount} correct`
    document.getElementById('scoreDisplay').textContent = quiz.score
    document.getElementById('progressFill').style.width = quiz.progress + '%'
    document.getElementById('category').textContent = q.category
    document.getElementById('questionText').textContent = q.question
    document.getElementById('feedback').className = 'feedback'
    document.getElementById('nextBtn').className = 'next-btn'

    const optionsEl = document.getElementById('options')
    optionsEl.innerHTML = q.options.map((opt, i) => `
        <button class="option" onclick="selectAnswer(${i})">
            <div class="option-letter">${letters[i]}</div>
            <span>${opt}</span>
        </button>
    `).join('')

    startTimer()
}


// --- timer ---
function startTimer() {
    quiz.timeLeft = 15
    updateTimerDisplay()

    quiz.timer = setInterval(() => {
        quiz.timeLeft--
        updateTimerDisplay()

        if (quiz.timeLeft <= 0) {
            clearInterval(quiz.timer)
            timeUp()
        }
    }, 1000)
}

function updateTimerDisplay() {
    const fill = document.getElementById('timerFill')
    const text = document.getElementById('timerText')
    const percent = (quiz.timeLeft / 15) * 100

    fill.style.width = percent + '%'
    text.textContent = quiz.timeLeft

    fill.className = 'timer-fill'
    if (quiz.timeLeft <= 5) fill.classList.add('danger')
    else if (quiz.timeLeft <= 8) fill.classList.add('warning')
}

function timeUp() {
    quiz.answered = true
    disableOptions()
    showCorrectAnswer()

    const feedback = document.getElementById('feedback')
    feedback.textContent = `⏰ time up! the answer was: ${quiz.currentQuestion.options[quiz.currentQuestion.correct]}`
    feedback.className = 'feedback wrong'

    quiz.wrongCount++
    showNextBtn()
}


// --- select answer ---
function selectAnswer(index) {
    if (quiz.answered) return

    const isCorrect = quiz.answer(index)
    const options = document.querySelectorAll('.option')
    const feedback = document.getElementById('feedback')

    disableOptions()
    showCorrectAnswer()

    options[index].classList.add(isCorrect ? 'correct' : 'wrong')

    document.getElementById('scoreDisplay').textContent = quiz.score
    document.getElementById('correctCount').textContent = `${quiz.correctCount} correct`

    if (isCorrect) {
        feedback.textContent = '✅ correct! well done.'
        feedback.className = 'feedback correct'
    } else {
        feedback.textContent = `❌ wrong. correct answer: ${quiz.currentQuestion.options[quiz.currentQuestion.correct]}`
        feedback.className = 'feedback wrong'
    }

    showNextBtn()
}
