// how to make return a string without using methods

const myFilter = (str) => {
  let resultStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "!") {
      resultStr += str[i];
    }
  }
  // return result;

  const result = str.split("");
  const remove = result.filter((char) => {
    return char !== "!";
  });

  return remove.join("");
  console.log(remove);
};

console.log(myFilter("hello ! yvan ! i hope !"));

function addFive(inputNumber) {
  if (typeof inputNumber === "number") {
    const result = inputNumber + 5;
    return result;
  } else {
    return "Error: Input is not a number";
  }
}

const originalNumber = 10;
const newNumber = addFive(originalNumber);
console.log(newNumber);

const  removeFirstAndLastCharacters = (inputString) => {
  if (inputString.length >= 2) {
    const result = inputString.substring(1, inputString.length - 1);
    return result;
  } else {
    return "Error: String has less than two characters";
  }
}

const originalString = "HelloWorld";
const modifiedString = removeFirstAndLastCharacters(originalString);
console.log(modifiedString); 


const removeFcharacter = (str) =>{ 
  if (str.length <= 2) {
    return "string must more than two character."
  }
return str.slice(1, -1)
 
}

console.log(removeFcharacter("yvan"))

const retuernPureString = (str) => {
// return str.replace('!', ) 
let rst = '';
for (let i = 0; i < str.length; i++) {
  if (str[i] !== '!') {
    rst+=str[i]
  }
}
return rst
}

console.log(retuernPureString("ivan!you"))

const filterFunction = (str) => {
 let arr = []
 for (let i = 0; i < str.length; i++) {
  arr.unshift(str[i])
 }
 return arr.join('')
}
console.log(filterFunction("hello"))