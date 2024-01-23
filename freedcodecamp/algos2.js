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

//this code of a certain 
function steamrollArray(arr) {
  return arr.toString().replace(',,', ',').split(',')
     .map(sol => { 
     if (sol == '[object Object]'){
       return {}
     }
     else if (isNaN(sol)) {
       return sol
     }
     else {
       return parseInt(sol)
     }
    })
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

  // change word from binary to the text 

  const changeFromBin = (str) => {
    const sp = str.split(' ')
    const arr = []
    for(let i = 0; i < sp.length; i++) {
      arr.push(String.fromCharCode(parseInt(sp[i], 2)))
    }
    return join('');
  }

// FreeCodeCamp 
function addTogether() {
  const [f, s] = arguments

  if (typeof (f) === 'number') {
    if (typeof (s)=== 'number') return f + s;
  if (arguments.length === 1) return (s) => addTogether(f,s)
  }
}
// Contructor 
const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};
//Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').



//Map the Debris
// According to Kepler's Third Law, the orbital period  T
// of two point masses orbiting each other in a circular or elliptic orbit is:

// T=2πa3μ−−−√

// a
// is the orbit's semi-major axis
// μ=GM
// is the standard gravitational parameter
// G
// is the gravitational constant,
// M
// is the mass of the more massive body.
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
}
      for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }
    return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// Another solution
function orbitalPeriod(arr) {
  var GM = 398600.4418
  var earthRadius = 6367.4447
  
  for (let i in arr) {
    var orbitsLengthPower3 = Math.pow((arr[i].avgAlt + earthRadius), 3)
    var rightHand = Math.pow((orbitsLengthPower3 / GM), 0.5)
    var orbitalPer = Math.round(2 * Math.PI * rightHand)
    arr[i] = {name: arr[i].name, orbitalPeriod: orbitalPer}
  }
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])