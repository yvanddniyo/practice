import { sayHi } from "./typescript";

// CLASSES IN TYPESCRIPT
class Person{
    name: string;
    isCool: false;
    pets: number;
   
   constructor(n: string, c: boolean, p: number) {
     this.name = n;
     this.isCool = false;
     this.pets = p
   }
   sayHello() {
       return `Hi, my name is ${this.name} and i have ${this.pets} pets`
   }
   }
   
   const persons = new Person('Yvan', false, 0)
   console.log(persons.sayHello());
   
   class Persona {
    readonly name: string; // This property is immutable - it can only be read
    private isCool: boolean; // Can only access or modify from methods within this class
    protected email: string; // Can access or modify from this class and subclasses
    public pets: number; // Can access or modify from anywhere - including outside the class
  
    constructor(n: string, c: boolean, e: string, p: number) {
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
    programmingLanguages: string[];
  
    constructor(
      name: string,
      isCool: boolean,
      email: string,
      pets: number,
      pL: string[]
    ) {
      // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
      super(name, isCool, pets);
      this.programmingLanguages = pL;
    }
  }