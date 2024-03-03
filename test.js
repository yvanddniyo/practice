


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


function fibonacci(n) {
  var arr = [[0], [1]];
  for (var i = 2; i <= n; i++){
    arr.push(add(arr[i - 1], arr[i - 2]));
  }
  return arr[n];
}
function convert(arr, length){
  for(let i = 0; i < length; i++){
    if(arr[i] === undefined){
      arr[i] = 0;
    }
  }
  return arr;
}



function organizePeopleData(peopleArray) {
  const organizedData = {
      females: [],
      males: []
  };

  peopleArray.forEach(person => {
      const [fullName, age, gender] = person.split(',').map(item => item.trim());
      const [firstName, secondName] = fullName.split(' ');

      const personInfo = {
          'second-name': secondName,
          'age': parseInt(age)
      };

      if (gender.toLowerCase() === 'female') {
          organizedData.females.push({ [firstName]: personInfo });
      } else if (gender.toLowerCase() === 'male') {
          organizedData.males.push({ [firstName]: personInfo });
      }
  }); 

  return organizedData;
}

const formattedArray = [
  "Patrick wyne, 30, male",
  "lil wyne, 32, male",
  "Eric mimi, 21, female",
  "Dodos deck, 21, male",
  "Alian Dwine, 22, male",
  "Patrick wyne, 33, male",
  "Patrick wyne, 10, male",
  "Patrick wyne, 40, male"
];

const result = organizePeopleData(formattedArray);
console.log(result);