"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CLASSES IN TYPESCRIPT
class Person {
    constructor(n, c, p) {
        this.name = n;
        this.isCool = false;
        this.pets = p;
    }
    sayHello() {
        return `Hi, my name is ${this.name} and i have ${this.pets} pets`;
    }
}
const persons = new Person('Yvan', false, 0);
console.log(persons.sayHello());
class Persona {
    constructor(n, c, e, p) {
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p;
    }
    sayMyName() {
        console.log(`Your not Heisenberg, you're ${this.name}`);
    }
}
const person3 = new Persona('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Fine
person1.name = 'James'; // Error: read only
//   console.log(person1.isCool); // Error: private property - only accessible within Person class
//   console.log(person1.email); // Error: protected property - only accessible within Person class and its subclasses
//   console.log(person1.pets); // Public property - so no problem
class Programmer extends Person {
    constructor(name, isCool, email, pets, pL) {
        // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
        super(name, isCool, pets);
        this.programmingLanguages = pL;
    }
}
