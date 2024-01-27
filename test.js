


// RemoveExclamationMarks which removes all exclamation marks from a given string
// Input: String s
// Output: String S
// Eg: "I have! some! exclamation(!)!".removeExclamation() == "I have some exclamation()"


// function RemoveExclamationMarks (s) {
//    const divideString = s.split('');
//    for (let i = 0; i < s.lenght; i++ ) {
//     if (i === "!") {
//       return null;
//     }
//    }
    
// }
//   RemoveExclamationMarks ("I have! some! exclamation(!)!"
//   console.log(RemoveExclamationMarks ("I have! some! exclamation(!)!"))



// "Given an array of integers, Write a function that finds the sum of odd elements.
// For example, if the array [1,2,3] so return 4.”

function summation (arr) {
  let result = 0
   
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] % 2 !== 0) {
      result += arr[i]
    }
  }
  return result;
}
// console.log(summation([1,2,3]))

const countdown = (number)=> {
 if (number === 0) {
  return;
 } else {
  console.log(number);
  countdown(number-1)
 }
}
console.log(countdown(3))