export function sayHi () {
    console.log('Hello there!')
}

interface Person {
    name: string,
    age: number
}

function sayYo(person: Person){
    console.log(`Hi ${person.name}`)
}

// sayYo({
//     name: 'john',
//     age: Human
// // applying the type alias

// type Person4 = {
//     name: string;
//     age: number;
//   };
  
//   function sayYes(person: Person4) {
//     console.log(`Hi ${person.name}`);
//   }
  
//   sayYes({
//     name: 'John',
//     age: 48,
//   }); // Hi John

  //  an object type could be defined anonymously

  function sayNo (person: {name: string; age: number}) { 
    console.log(`Hi ${person.name}`);
  }

  sayNo({
    name: 'yvan', age: 29
  })

  // INTERFACE CAN BE EXTENDABLE 
   
  interface Animal {
    name: string
  }

  interface Bear extends Animal {
    honey: boolean
  }

  const bear: Bear = {
    name: 'Winner',
    honey: true
  }

  interface HasFormatter {
    format() : string
  }
  class Human implements HasFormatter {
    constructor(public username: string, protected password: string) {}

    format() {
        return this.username.toLocaleLowerCase()
    }
  }
  let person1: HasFormatter;
let person2: HasFormatter;

person1 = new Human('Danny', 'password123');
person2 = new Human('Jane', 'TypeScripter1990');

console.log(person1.format()); // danny

// GENERICS :  allow you to create a component that can work over a variety of types, rather than a single one, which helps to make the component more reusable

interface hasLength {
    length: number
}
 // (T) => type parameter

function logLengths<T extends hasLength>(a:T[]){
    a.forEach(El => {
       console.log(El.length) 
    });
}
let arr =  [
    'This string has a length prop',
    ['This', 'arr', 'has', 'length'],
    { material: 'plastic', length: 30 },
  ];
  logLengths(arr);
// 29
// 4
// 30

// Generics with interfaces



  
// Enums in TypeScript
// Enums are a special feature that TypeScript brings to JavaScript. Enums allow us to define or declare a collection of related values, that can be numbers or strings, as a set of named constants.

enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON,
  }
  console.log(ResourceType.BOOK); // 0
console.log(ResourceType.AUTHOR); // 1

// By default, enums are number based – they store string values as numbers. But they can also be strings:

enum Direction {
    Up = 'Up',
    Right = 'Right',
    Down = 'Down',
    Left = 'Left',
  }
  console.log(Direction.Right); // Right
  console.log(Direction.Down); // Down

//   Narrowing in TypeScript
// In a TypeScript program, a variable can move from a less precise type to a more precise type. This process is called type narrowing

interface Vehicle {
    topSpeed: number;
  }
  
  interface Train extends Vehicle {
    type:'Train'
    carriages: number;
  }
  
  interface Plane extends Vehicle {
    type: 'Plane'
    wingSpan: number;
  }
  
  type PlaneOrTrain = Plane | Train;
  
  function getSpeedRatio(v: PlaneOrTrain) {
    if (v.type === 'Train') {
        return v.topSpeed / v.carriages
    }
    return v.topSpeed / v.wingSpan
  }
  let bigTrain: Train = {
    type: 'Train',
    topSpeed: 100,
    carriages: 20,
  };
  
  console.log(getSpeedRatio(bigTrain)); // 5