//Forgetting to handle the null or undefined cost many company million dollar which means could have handled well in the typescript.(A billion dollar mistake...)
console.log("Hello, world");
function greeting(person, date) {
    console.log("Hello, ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greeting("Yvan", new Date());
// primitive type: string, number and booleans
// array in typescript: string[] or Array<number> or Array<string>
// T<U> this another type of array but we will cover it when we go to the generics.
var obj = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
function yourName(name) {
    console.log("Hello " + name.toUpperCase() + "!!");
}
yourName(42);
