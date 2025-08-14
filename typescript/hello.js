//Forgetting to handle the null or undefined cost many company million dollar which means could have handled well in the typescript.(A billion dollar mistake...)
console.log("Hello, world");
// function greeting  (person: string, date: Date) {
//     console.log(`Hello, ${person}, today is ${date.toDateString()}!`)
// }
// greeting("Yvan", new Date())
// primitive type: string, number and booleans
// array in typescript: string[] or Array<number> or Array<string>
// T<U> this another type of array but we will cover it when we go to the generics.
// let obj: any = { x : 0 }
// obj.foo()
// obj()
// obj.bar = 100
// function getFavNumber (): number {
//     return 42;
// }
function getPoint(pnt) {
    console.log("value of the x point is that ", pnt.x);
    console.log("value of the y point is that ", pnt.y);
}
getPoint({ x: 7, y: 8 });
function printName(names) {
    var _a;
    if (names.last !== undefined) {
        console.log("last name", names.last.toUpperCase());
        //OK
    }
    // OR
    console.log("last name", (_a = names.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// UNION TYPE
function printId(id) {
    if (typeof id === "string") {
        return { "id": id.toUpperCase() };
    }
    else {
        return id;
    }
}
printId("1243");
/// another example with the of the Arrays
var welcomePeople = function (arr) {
    if (Array.isArray(arr)) {
        console.log("Hello " + arr.join(" and "));
    }
    console.log("string info", arr.toLocaleString());
};
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var pt = new Point();
console.log("pt", pt);
var GoodMorning = /** @class */ (function () {
    function GoodMorning() {
        this.name = "yvan";
    }
    return GoodMorning;
}());
