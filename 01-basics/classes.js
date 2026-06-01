// Day 17 - Classes and OOP in JavaScript
// OOP = Object Oriented Programming
// classes are blueprints for creating objects
// introduced in ES6


// --- basic class ---

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return `hey i am ${this.name} and i am ${this.age} years old`
    }

    isAdult() {
        return this.age >= 18
    }
}

const kiran = new Person('Kiran', 19)
const ravi = new Person('Ravi', 17)

console.log(kiran.greet())       // hey i am Kiran and i am 19 years old
console.log(kiran.isAdult())     // true
console.log(ravi.isAdult())      // false
console.log(kiran.name)          // Kiran


// --- class with more methods ---

class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner
        this.balance = balance
        this.transactions = []
    }

    deposit(amount) {
        if (amount <= 0) {
            return 'amount must be positive'
        }
        this.balance += amount
        this.transactions.push({ type: 'deposit', amount, date: new Date().toLocaleDateString() })
        return `deposited ₹${amount}. balance: ₹${this.balance}`
    }

    withdraw(amount) {
        if (amount <= 0) return 'amount must be positive'
        if (amount > this.balance) return 'insufficient balance'
        this.balance -= amount
        this.transactions.push({ type: 'withdrawal', amount, date: new Date().toLocaleDateString() })
        return `withdrew ₹${amount}. balance: ₹${this.balance}`
    }

    getStatement() {
        console.log(`\n=== account: ${this.owner} ===`)
        this.transactions.forEach(t => {
            const sign = t.type === 'deposit' ? '+' : '-'
            console.log(`${t.date} | ${t.type} | ${sign}₹${t.amount}`)
        })
        console.log(`balance: ₹${this.balance}`)
    }
}

const account = new BankAccount('Kiran', 1000)
console.log(account.deposit(500))
console.log(account.withdraw(200))
console.log(account.withdraw(2000))
account.getStatement()


// --- getters and setters ---

class Student {
    constructor(name, marks) {
        this.name = name
        this._marks = marks   // _ means private by convention
    }

    // getter
    get marks() {
        return this._marks
    }

    // setter with validation
    set marks(value) {
        if (value < 0 || value > 100) {
            console.log('marks must be between 0 and 100')
            return
        }
        this._marks = value
    }

    get grade() {
        if (this._marks >= 90) return 'A+'
        if (this._marks >= 80) return 'A'
        if (this._marks >= 70) return 'B'
        if (this._marks >= 60) return 'C'
        return 'F'
    }

    get isPassed() {
        return this._marks >= 50
    }
}

const student = new Student('Kiran', 85)
console.log(student.marks)      // 85
console.log(student.grade)      // A
console.log(student.isPassed)   // true

student.marks = 95
console.log(student.grade)      // A+

student.marks = 150             // marks must be between 0 and 100


// --- static methods ---
// belong to the class not the instance
// called on the class directly

class MathHelper {
    static add(a, b) { return a + b }
    static subtract(a, b) { return a - b }
    static multiply(a, b) { return a * b }
    static divide(a, b) {
        if (b === 0) return 'cannot divide by zero'
        return a / b
    }
    static isEven(n) { return n % 2 === 0 }
    static clamp(value, min, max) { return Math.min(Math.max(value, min), max) }
}

console.log(MathHelper.add(10, 5))        // 15
console.log(MathHelper.divide(10, 0))     // cannot divide by zero
console.log(MathHelper.isEven(4))         // true
console.log(MathHelper.clamp(150, 0, 100))  // 100

