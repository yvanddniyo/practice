export default function linear_search (haystack: number[], needle: number):boolean {
  for(let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
} // this code has time complexity of O(n

export const binary_search = (haystack: number[], needle: number): boolean => {
  let lower = 0;
  let high = haystack.length;
  let middle: number;
  let val: number;

  while(lower < high) {
    middle =  Math.floor(lower + (high - lower) / 2);
    val = haystack[middle]

    if ( val === needle) {
      return true;
    }
    else if (val > needle) {
       high = middle
    }
    else {
      lower = middle + 1
    }
  }
  return false;
}

// crystall ball problem most asked in ld
export const crystal_ball = (breaks: boolean[]):number => {
  const jumpBreak = Math.floor(Math.sqrt(breaks.length));

  let i = jumpBreak;
  for(; i < breaks.length; i +=jumpBreak) {
    if (breaks[i]) {
      break;
    }
  }


  i -= jumpBreak;

  for (let j = 0; j < breaks.length && i < breaks.length; ++j, ++i) {
      if (breaks[i]){
        return i;
      }
  }

  return -1;
}


//Finding the duplicate return yes or no if you find it in an array.
// This question took Olog(n) as the time complexity.

const DuplicateValue = (nums: number[]) => {
  const sortNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortNums.length; i++) {
    if (nums[i] === nums[i + 1]){
      return true;
    }
  }
  return false;
}

// here is the approach of the O(n)

const duplicate = (nums: number[])=> {
 const newSet = new Set(nums)
 return newSet.size !== nums.length;
}

const Dv = [2,3, 4, 3,7];
DuplicateValue(Dv);

//The compose function takes an array of functions and returns a new function that applies each function in the array, from right to left, to the input value. This is useful when we want to apply a series of transformations to some input data.

// syntax
type F = (x: number) => number;

const  compose = (func: F[]) => {
   if (func.length === 0){
    return (x: number) => x
   }
   return func.reduceRight((currFn, prevFn) => (x) => prevFn(currFn(x)))
} 

//Allow One Function Call 
//Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

const once = (fn:Function):OnceFn => {
  let hasBeenCalled = false;
  let result:number; 

  return (...args) =>  {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    }
    return undefined; // this look redudant but it makes less time complexity
  }
}

//ONELINE ANSWER
const onceOnline = (fn:Function) => {
  let isExecuted = false;
  return (...args) => (isExecuted ? undefined : ((isExecuted = true), fn(...args)));
};


// call
once((a:number, b:number, c:number) => a + b + c)