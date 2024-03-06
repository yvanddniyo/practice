"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHi = void 0;
function sayHi() {
    console.log('Hello there!');
}
exports.sayHi = sayHi;
function sayYo(person) {
    console.log(`Hi ${person.name}`);
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
function sayNo(person) {
    console.log(`Hi ${person.name}`);
}
sayNo({
    name: 'yvan', age: 29
});
const bear = {
    name: 'Winner',
    honey: true
};
class Human {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    format() {
        return this.username.toLocaleLowerCase();
    }
}
let person1;
let person2;
person1 = new Human('Danny', 'password123');
person2 = new Human('Jane', 'TypeScripter1990');
console.log(person1.format()); // danny
// (T) => type parameter
function logLengths(a) {
    a.forEach(El => {
        console.log(El.length);
    });
}
let arr = [
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
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
console.log(ResourceType.BOOK); // 0
console.log(ResourceType.AUTHOR); // 1
// By default, enums are number based – they store string values as numbers. But they can also be strings:
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Right"] = "Right";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
})(Direction || (Direction = {}));
console.log(Direction.Right); // Right
console.log(Direction.Down); // Down
function getSpeedRatio(v) {
    if (v.type === 'Train') {
        return v.topSpeed / v.carriages;
    }
    return v.topSpeed / v.wingSpan;
}
let bigTrain = {
    type: 'Train',
    topSpeed: 100,
    carriages: 20,
};
console.log(getSpeedRatio(bigTrain)); // 5
