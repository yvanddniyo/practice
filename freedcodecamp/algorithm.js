
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }

//   Where do I Belong
//   Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
  
//   For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
  
//   Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

  function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) return i;
    }
  
    return arr.length;
  }

  // Functional Programming Course
  // INPUT -> OUTPUT -> OUTPUT
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);
// Only change code above this line


                      //CALLBACKS
// Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array

                    // FRST CLASS fUNCTION
// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.
                  // High order Function
 // The functions that take a function as an argument, or return a function as a return value, are called higher order functions.
                  // lambda
// When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTeaa = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTeaa(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTeaa(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


// Refactor the global variable in the functions

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
 let newArr = [...arr]
  newArr.push(bookName);
  return newArr;
}

function remove(arr, bookName) {
  let newArr = [...arr]
 
  if ( newArr.indexOf(bookName) >= 0) {

    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;

    }
}

console.log(remove(['fjfdndv', 'jfvndfjvnfdj', 'hf'], "hf"));

                          //Implement map on a Prototype {how map is build under the hood.}
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
    for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
    }
  // Only change code above this line
  return newArray;
};

// this Function perform the filtering and maping value of the movies
const ratings  = watchList.filter(rating => rating.imdbRating > 8.0);
const filteredList  = ratings.map(({Title: title, imdbRating: rating}) => ({title, rating}))

console.log(filteredList)

// how the filter is build
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
    newArray.push(this[i])
    }
  }
  return newArray;
};
