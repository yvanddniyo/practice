//function changes from the number to roman
function convertToRoman(num) {
    const romanNumerals = {
       M: 1000,
       CM: 900,
       D: 500,
       CD: 400,
       C: 100,
       XC: 90,
       L: 50,
       XL: 40,
       X: 10,
       IX: 9,
       V: 5,
       IV: 4,
       I: 1,
     };
   
     let result = '';
   
   
     for (let key in romanNumerals) {
       // console.log(romanNumerals[key])
       while (num >= romanNumerals[key]) {
         console.log(num)
         result += key;
         num -= romanNumerals[key];
       }
     }
   
     return result;
   
   }
   
   convertToRoman(7);
   


  //  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

  //  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
   
  //  Write a function which takes a ROT13 encoded string as input and returns a decoded string.
   
  //  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
   

  function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
      if (/[A-Z]/.test(char)) {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
      } else {
        return char;
      }
    });
  }
  
  rot13("SERR PBQR PNZC");



 
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  // Use a regular expression to match valid US phone number formats
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Test the input string against the regex
  return phoneRegex.test(str);
}

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]
const currencyUnitValues = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

let changeDue = cash - price;
let totalCID = 0;

for (let i = 0; i < cid.length; i++) {
  totalCID += cid[i][1];
}
totalCID = parseFloat(totalCID.toFixed(2));

if (totalCID < changeDue) {
  return {status: "INSUFFICIENT_FUNDS", change: []};
} else if (totalCID === changeDue) {
  return {status: "CLOSED", change: cid};
} else {
  let changeArray = [];

  for (let i = cid.length - 1; i >= 0; i--) {
    const denomination = cid[i][0];
    const unitValue = currencyUnitValues[denomination];
    const availableAmount = cid[i][1];
    const maxNumberOfUnits = Math.floor(availableAmount / unitValue);
    let numberOfUnitsToReturn = Math.min(maxNumberOfUnits, Math.floor(changeDue / unitValue));

    if (numberOfUnitsToReturn > 0) {
      const amountToReturn = numberOfUnitsToReturn * unitValue;
      changeDue = parseFloat((changeDue - amountToReturn).toFixed(2));
      changeArray.push([denomination, amountToReturn]);
    }
  }

  if (changeDue === 0) {
    return {status: "OPEN", change: changeArray};
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
}