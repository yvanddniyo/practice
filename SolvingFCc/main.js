const DupNums = [2,3,4]
const arr = [1, 202, 2, 3, 50, 10, 20, 30]
const votes = ["paul", "vuga", "paul","paul", "paul","paul", "vuga", "yvan", "musoni", "yvan", "musoni","yvan", "musoni"]


//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.

// ANSWER
function diffArray(arr1, arr2) {
    const res = arr2.filter(val => !arr1.includes(val));
    const res2 = arr1.filter(val => !arr2.includes(val));
    return [...res, ...res2];
 }
 diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

 //We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// ANSWER
function sumAll(arr) {
let res = []
const sortArr = arr.sort((a, b) => a - b);
const sum = arr.reduce((a, b) => a + b, 0);
const fvalue = sortArr[0] + 1;
const lvalue = sortArr[1];

for(let i = fvalue; i < lvalue; i++) {
  res.push(i)
}
const sum2 = res.reduce((a, b) => a + b, 0)
return sum2 + sum;
}
sumAll([1, 4]);


//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

Input: nums = [2,7,11,15], target = 26
// Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] + nums[i + 1])
    if(nums[i] + nums[i + 1] === target) {
      res.push(i, i + 1)
    }
  }
  return res;
}

const result = twoSum(nums, target)
console.log("answers...>", result)

// function look the duplicate value in the array and return true if yes or false if no
const lookDuplicate = (DupNums) => {
  for (let i = 0; i < DupNums.length; i++) {
    for (let j = 0; j < DupNums.length; j++) {
      if(i !== j && DupNums[i] === DupNums[j]) {
        return true;
      }

    }
  }
  return false;
}

console.log("Duplicate",lookDuplicate(DupNums))

// Function handle Duplication using object to optimize time complexity O(n)

const handleDuplicateObj  = (DupNums) => {
  const existingValue = {};
  console.log("esi", existingValue)

  for( let i = 0; i < DupNums.length; i++) {
    if (!existingValue[DupNums[i]]) {
      existingValue[DupNums[i]] = 1
    }
    else{
      return true
    }
  }
  console.log("es", existingValue)

  return false;
}

console.log("HashMap",handleDuplicateObj(DupNums))

// voting machine or algorithm

const votingAlg = (votes) => {
  const voteObj = {};
  for( let i = 0; i < votes.length; i++) {
    if(voteObj[votes[i]]) {
      voteObj[votes[i]]++
    }
    else {
      voteObj[votes[i]] = 1
    }
  }
 return voteObj
}

console.log("total Votes", votingAlg(votes))

// using recursive to determine the factorial 

const findFactorial = (number) => {
    if (number === 1) {
      return 1
    }
    else{
      return number * findFactorial(number - 1)
    }
}
// factorial of 5 = 5 * 4 *3 * 2 * 1
console.log("Find Factorial of n", findFactorial(10))

// Binary seatch algorithms for searching value within array using O(n) 

const binarySearch = (arr, val)  => {
  const sortedArr = arr.sort((a, b) => a - b)
  console.log("sortedArr" , sortedArr)
  let low = 0;
  let high = sortedArr.length - 1;
  console.log("high", high)
  let mid;
while (high >= low) {
  // mid = low + Math.floor(high - low) / 2
  mid = Math.floor((low + high) / 2)
  console.log("mid", mid)

  if(sortedArr[mid] === val) {
    return mid;
  }

  if(sortedArr[mid] > val) {
    high = mid -1;
  }
   else{
     low = mid + 1;
   }
  
}
 return "Index related value not found...";
}

console.log("binarySearch", binarySearch(arr, 1))