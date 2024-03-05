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
sayYo({
    name: 'john',
    age: 40
});
function sayYes(person) {
    console.log(`Hi ${person.name}`);
}
sayYes({
    name: 'John',
    age: 48,
}); // Hi John
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
