//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.The returned array should be created such that returnedArray[i] = fn(arr[i], i). Please solve it without the built-in Array.map method.
function mapFn(arr: number[], fn: (n: number, i: number) => number): number[] {
  const ar:number[] = [];
  for (let i = 0; i < arr.length; i++) {
  ar.push(fn(arr[i], i))
  }
  
  // Or
  
  // we can also implement going like this
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i )
  }
  return ar;
};


// under hood of the map built in function map works.

function map<TIn, TOut>(
  arr: readonly TIn[],
  fn: (element: TIn, index: number ) => TOut
): TOut[] {
  const res: TOut[] = [];

  for(let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i))
  }

  return res;
}

//Implementing mapping using spread syntax looks satisfying, and follows the functional programming principle of immutability, but the downside is that we are re-copying the result each time, so this solution has quadratic complexity. However it still gets accepted by LeetCode because of the small input sizes:

const mapSpread = <TIn, TOut>(
  arr: readonly TIn[],
  fn: (element: TIn, index: number)=> TOut,
): TOut[] => arr.reduce((res: TOut[], element, index) => [...res, fn(element, index)], []);

/// This implementation demonstrates how to use a higher-order function (in this case, fn) to filter elements in an array based on a specific condition. It also shows how to use the push method to add elements to a new array.
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  let filtA: number[] = [];
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
         filtA.push(arr[i]);
      }
  }
  return filtA;
};

// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

type Fnn = (accum: number, curr: number) => number
function reduce(nums: number[], fn:Fnn, init: number) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i]);
    }
    return val;
}