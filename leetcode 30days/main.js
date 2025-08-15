/**
 * Here is the some change and concept which needed in function 
 * 
*/
function f (a, b) {
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
    return "Hello World"
}

/**
 * 
 * Given an integer n return a counter function. This Counter function initially return n and then return 1 more than the previous value every subsquent time  it is called(n, n+1, n+2)
 */
 // Functional programming 

const createCounter =  (n) => {
  return function() {
    return n++
  }
}
 
// using the class to implement this counter OOP
class Counter {
    constructor(n) {
        this.n = n
    }
    increment() {
        return this.n++
    }
}
const counter =  new Counter(10)

/**
 * 
 Write a function createCounter. it should accept an initial integer init. It should return a object  withe three functions.
 The three functions are:
 - increment() increases the current value by 1 and then return it.
 - descrement() reduce the current value by 1 and the return it.
 - reset() set the current value to init and then return it.
 */

 const createCounterII = (n) => {
   let counter;
    return function() {
        const countReset = n
        const counterIncrement = ++n;
        const counterDecrement =  n -= 2;

        counter = [ answers = {
            increment: counterIncrement, 
            reset: countReset, 
            decrement: counterDecrement}]
        return counter 
    }
 }
 // Another method to resolve this 
 var createCounter2 = function(init) {
    let count = init;

    function increment() {
      return ++count;
   }

   function reset() {
       count = init
      return count
   }
   
   function decrement() {
      return --count;
   }

      return {
           increment: increment, 
           reset: reset, 
           decrement: decrement
       }
   }

   //OOP of this function

   class Counter2 {
    constructor(init) {
        this.init =  init
        this.count = init
    }
    increment() {
        return ++this.count
    }
    reset() {
        return this.count
    }
    decrement() {
        return --this.count
    }
    // return = {increment, reset, decrement}
   }
const counter2 = new Counter2(20)



 const counters = createCounterII(10)
 console.log(counter2.increment()) 
 console.log(counter2.reset()) 
 console.log(counter2.decrement()) 

 const expect = (val) => {
    
    toBe:(expected) => {
        if (val ===  expected) {
            return true;
        }
        else {
            throw new Error("Not Equal")
        }
    }
    notToBe: (expected) => {
        if (val !== expected) {
            return true
        }
        else {
            throw new Error("Equal")
        }
    }
 }

 console.log(() => expect(5).toBe(5))


 //This problem teaches us how to build a prefix sum array, which is a valuable tool that, in the future, you can use to solve more complex problems efficiently
 const runningSumArr = [1, 2, 3, 4, 5]
 const runningSum = (runningSumArr) => {
    let result = [runningSumArr[0]];
    for (let i = 1; i < runningSumArr.length; i++) {
        result.push((runningSumArr[i] + result[i - 1]))
    }
    console.log("solution", result);
    return result;
 }
 runningSum(runningSumArr)
 const accounts = [[1,5],[7,3],[3,5]]

// searching wealth pesron on the leetcode question...

 function maximumWealth(accounts) {
    let mostWeilthPerson = [];
        const mappedAccount = (account) => {
        const accountVal = account.reduce((acc, sum) => (
            acc + sum
        ), 0)
        mostWeilthPerson.push(accountVal)
    
    }
    const calculatingWealth =  accounts.map(mappedAccount)
    console.log("title", Math.max(...mostWeilthPerson));
    return Math.max(...mostWeilthPerson)
 };
// FizzBuzz problem interview 
 maximumWealth(accounts)
 let n = 3
 function fizzBuzz(n) {
    let answerFizzBuzz = [];
    for (let i = 1; i <= n; i++) {
        console.log("nn", i)
        if (i % 3 === 0 && i % 5 === 0) {
            answerFizzBuzz.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
             answerFizzBuzz.push("FIzz");
        }
        else if (i % 5 === 0 ) {
             answerFizzBuzz.push("Buzz");
        }
        else {
            answerFizzBuzz.push(i.toString());
        }

    }
    console.log("....", answerFizzBuzz)
    return answerFizzBuzz;
};

fizzBuzz(n)


// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

function canConstruct(ransomNote, magazine) {
 for ( let i = 0; i < ransomNote.length; i++){
    const r = ransomNote.charAt(i);
    const matchingIndex = magazine.indexOf(r);
    console.log("matchingINDEX", matchingIndex);
    
    if (matchingIndex === -1) {
        return false;
    }

    magazine = magazine.substring(0, matchingIndex) + magazine.substring(matchingIndex + 1);
 }
 return true
};

console.log("lllll", canConstruct("aa", "ab"))


// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    
// };





// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.



