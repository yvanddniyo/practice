//Forgetting to handle the null or undefined cost many company million dollar which means could have handled well in the typescript.(A billion dollar mistake...)

console.log("Hello, world")

function greeting  (person: string, date: Date) {
    console.log(`Hello, ${person}, today is ${date.toDateString()}!`)
}

greeting("Yvan", new Date())

// primitive type: string, number and booleans
// array in typescript: string[] or Array<number> or Array<string>
// T<U> this another type of array but we will cover it when we go to the generics.

let obj: any = { x : 0 }
obj.foo()
obj()
obj.bar = 100

function getFavNumber (): number {
    return 42;
}

function getPoint (pnt: { x: number, y: number}) {
    console.log("value of the x point is that ", pnt.x)
    console.log("value of the y point is that ", pnt.y)
}
getPoint({ x : 7, y : 8})

function printName ( names: { first: string, last?: string}) {

    if (names.last !== undefined) {
        console.log("last name", names.last.toUpperCase())
        //OK
    }
    // OR

    console.log("last name", names.last?.toUpperCase())
}

// UNION TYPE
function printId (id: string | number) {
    if (typeof id === "string") {
        return {"id": id.toUpperCase()}
    } else {
        return id
    }
}
printId("1243");

/// another example with the of the Arrays

const welcomePeople = (arr: string[] | string) => {
    if(Array.isArray(arr)){
        console.log("Hello " +  arr.join(" and "));
    }
    console.log("string info", arr.toLocaleString())
}
//Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// The distinction between the interface and type alias

interface Animal {
    bear: string
}

interface Lion extends Animal {
    carnovals: string[]
}

