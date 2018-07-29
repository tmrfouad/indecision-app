class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is '${this.major}'.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        greeting += this.homeLocation ? ` I am visiting from ${this.homeLocation}.` : '';
        return greeting;
    }
}

const person = new Traveler('Tamer Fouad', 35, 'Cairo');
const otherPerson = new Traveler();

console.log(person);
console.log(person.getGreeting());
console.log(person.getDescription());

console.log(otherPerson);
console.log(otherPerson.getGreeting());
console.log(otherPerson.getDescription());
