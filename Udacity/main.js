/**
 * Course of the Udacity
 */
const richard = { status: "He's looking a job"}
const agent =  new Proxy(richard, {})
console.log(agent.status);

function* getEmployee() {
console.log("function start to run")
let teamOfEmployee = [
    'Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'
]

for (const employee of teamOfEmployee) {
    yield employee;
}
}
const generatorIterator = getEmployee()
 let result = generatorIterator.next()
console.log(result.value)
generatorIterator.next().value
generatorIterator.next().value

// Transpiling code

class Students {
    constructor(name, major) {
        this.name =  name,
        this.major = major
    }
    displayInfo() {
        console.log(`${this.name} is a ${this.major} student`)
    }
}

const richards = new Students("Richart", "Music")
const james = new Students ("James", "Electrical student")

// babel ES6  -d ES5: build
