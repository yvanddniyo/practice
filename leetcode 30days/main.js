/**
 * write function that alway return "HELLO WORLD"
 */

const createHelloworld = function() {
    return function(...args) {
        return "Hello World"
    }
}