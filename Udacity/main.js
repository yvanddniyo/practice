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
