/**
 * Here is the some change and concept which needed in function 
 * 
*/
function f (a,b) {
 return a + b;
}
const fa = function(a, b){
return a + b;
}
//Invoked Function Expression (IFE)
const ife = ((a, b) =>{
 return a + b ;
})(3, 5)
console.log(ife)

/**
 * Powerfull feature in js can  be able to create a function within another function.
 */
 const  add = () => { 
 function addCall(a, b) {
     return a + b;
 }
 return addCall
 }
 /**
  * Hoisting is where the function called before being used.
  */
  const addHoisting = () => {
    return addOn;
    function addOn (a, b){
        return a + b;
    }
  }// this is only works for the "Function", not allow function.
  const addCall = addHoisting()
  console.log(addCall(3, 3));
/**
 * write function that alway return "HELLO WORLD"
*/
const createHelloworld = function() { // create the anonymous function.
    return function(...args) {
        return "Hello World"
    }
}
/**
 * What is the closure is the combination of the function and it's environments.
 */

const closureAdd = (a) => {
    function add(b) {
        return a + b;
    }
    return add
} // this is the closure can be called as normal function.

/**
 * Omit function
 */
const addOmit  = (a, b) => a + b;

/**
 * Rest arguments
 */

const restAdd = (...args) => {
 return args[0] + args [1]
}
const restAdds= restAdd(4, 5, 5)
console.log(restAdds)

const create = () => {
    return (...args) => {
        return "Hello World"
    }
}
const asr = create("h") 

const helloWorld = (...args) => {
    return "HelloWORLD"
}

console.log(helloWorld(122112121))