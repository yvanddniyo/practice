"use strict";
let sport = 'football';
let id = 5;
// type data in TypeScript
//number, bigInt, symbols, string, undefined, null, boolean => primitive data type of typescript
// primitive data type are immutable, can not be altered
// Example
let str = 'Danny';
str.toLowerCase();
console.log(str); // Danny - the string method didn't mutate the string
let arr = [1, 3, 5, 7]; // the array method mutated the array
arr.pop();
console.log(arr);
let ids = 5; // TS knows it's a number
let firstname = 'danny'; // TS knows it's a string
let hasDog = true; // TS knows it's a boolean
//hasDog = 'yes'; // ERROR
//A union type is a variable that can be assigned more than one type
let age;
age = 5;
age = 'five';
// Reference Types
// In JavaScript, almost "everything" is an object. In fact (and confusingly), strings, numbers and booleans can be objects if defined with the new keyword:
let hisName = new String('Danny');
console.log(hisName);
// reference types are Arrays, Objects and Functions
// If a PRIMITIVE type is assigned to a variable, we can think of that variable as containing the primitive value. Each primitive value is stored in a unique location in memory.
let x = 2;
let y = 1;
x = y;
y = 100;
console.log(x); // 1 (even though y changed to 100, x is still 1)
// If we have two variables, x and y, and they both contain primitive data, then they are completely independent of each other:
let point1 = { x: 1, y: 1 };
let point2 = point1;
point1.y = 100;
console.log(point2.y); // 100 (point1 and point2 refer to the same memory address where the point object is stored)
// In type script you can define the data type an array can contain
let idss = [1, 2, 3, 4]; // can only contain numbers
let names = ['hello', 'world'];
let optional = [true, false];
let books = [
    { name: 'Every thing is Fucked', author: 'Mark Manson' },
    { name: 'Every thing is Fucked', author: 'Mark Manson' },
];
let arrs = ['hello', 4, true];
idss.push(6);
//  ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
// you can make an array union for data type 
let person = ['Danny', 1, true];
person[0] = 100;
// person[1] = {name: 'Danny'} // Error - person array can't contain objects
// A tuple is an array with fixed size and known datatypes
let personn = ['Danny', 1, true];
// person[0] = 100; // Error - Value at index 0 can only be a string
// OBJECT IN TYPESCRIPT
let anObject;
anObject = {
    name: 'Danny',
    location: 'RW',
    isProgrammer: true
};
let student1 = {
    name: 'ck',
    school: 'ks',
    isCollege: false
};
let student2 = {
    name: 'c9',
    school: 'kv',
    isCollege: false
};
let sayStuff = {
    sayHi: function (name) {
        return `Hi ${name}`;
    },
    sayBye: (name) => `Bye ${name}`,
};
console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg'));
// Define a function called circle that takes a diam variable of type number, and returns a string
const circle = (diam) => {
    return 'The  circumference is' + Math.PI * diam;
};
// // Using explicit typing 
const circle1 = (diam) => {
    return 'The  circumference is' + Math.PI * diam;
};
const add = (a, b, c) => {
    console.log(c);
    return a + b;
};
console.log(5, 4, 'I could pass a number, string, or nothing here!');
// Function  that return void means it return nothing
const logMessage = (msg) => {
    console.log('this is the message: ' + msg);
};
logMessage('TypeScript is superB');
// using function signature
let sayHello;
sayHello = (name) => {
    console.log('Hello' + name);
};
sayHello('Danny');
// Exericeses for Function
const addTwoNums = (a, b) => {
    return `adding ${a} and ${b} equal to ${a + b}`;
};
addTwoNums(100, 200);
//using ANY behave like javascript in the code
let ag = '100';
ag = 100;
ag = [2, 4, 6];
const person1 = {
    name: 'John',
    id: 1
};
const person2 = {
    name: 'Peter',
    id: 2
};
const sayHell = (person) => {
    return 'Hi ' + person.name;
};
const sayGoodbye = (person) => {
    return 'seeya ' + person.name;
};
// console.log(sayGoodbye(person1))
// non-null assertion operator (!)
// Here we are telling TypeScript that we are certain that this anchor tag exists
const link = document.querySelector('a');
console.log(link.href);
// targeting class and id 
const form = document.getElementById('signup-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
});
console.log(form.method); // post 
