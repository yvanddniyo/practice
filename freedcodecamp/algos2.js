// question that seek and destroy

function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    // console.log(valsToRemove)
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3)


  // adding spinalCase in words
  function spinalCase(str) {
  let x = str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
  console.log(x)
  return x
}

spinalCase('This Is Spinal Tap');


// search and replace

function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);

  return str;

}

// DNA pairing 
function pairElement(str) {
  const pairings = { A: "T", T: "A", C: "G", G: "C" };

  const result = str.split("").map(char => [char, pairings[char]]);

  return result;
}
pairElement("GCG");

// check missing letter in alphabet
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
   // Check if the next letter in the range is not the expected consecutive letter
   if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
     // Return the missing letter
     return String.fromCharCode(str.charCodeAt(i) + 1);
   }
 }

 // If no missing letter is found, return undefined
 return undefined;
}

fearNotLetter("abce");

// sorted UNION 
function uniteUnique(arr) {
const finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    // Loops through the array at hand
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Alternative
function uniteUnique(arr) {
  const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// sum all odd number factorial
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
let result = 0;
while (currNumber <= num) {
  if (currNumber % 2 !== 0) {
    result += currNumber;
  }
  currNumber += prevNumber;
  prevNumber = currNumber - prevNumber;
}

return result;

}

sumFibs(4);

// return all number that is primes number 
function sumPrimes(num) {
  let primes = [];
for (let i = 2; i <= num; i++) {
  if (primes.every((prime) => i % prime !== 0))
    primes.push(i);
}
return primes.reduce((sum, prime) => sum + prime, 0);

}

sumPrimes(10);