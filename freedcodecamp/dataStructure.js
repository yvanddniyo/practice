// splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of items in the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(3, 2);
let newArray = array.splice(2, 2);// this return the array of remove elements in the array. 
// return let array =[today, was, great]

// you can use splice to  remove and add at the same time.

function myArray (arr) {
    return arr.splice(0,2,3,4)
}
console.log(myArray([1,2,3,4,5]));

// slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).

// Slice is used to copy the whole array and return remove value.


// Below function look function that hasn't element and add it to the newArr
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i <arr.length; i++) {
      // console.log(arr[i][0])
      if(arr[i].indexOf(elem) === -1) {
        newArr.push(arr[i])
      }
    }
    // Only change code above this line
    return newArr;
  }
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


//   get an array throught the Object

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(users)
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));