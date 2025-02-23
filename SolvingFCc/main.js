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
