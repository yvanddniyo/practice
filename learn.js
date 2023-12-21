const myFilter = (str) => {
  // let result = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== "!") {
  //     result += str[i];
  //   }
  // }
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

function removeFirstAndLastCharacters(inputString) {
  // Check if the string has at least two characters
  if (inputString.length >= 2) {
    // Use substring to remove the first and last characters
    const result = inputString.substring(1, inputString.length - 1);
    return result;
  } else {
    // If the string has less than two characters, return an error message or handle it accordingly
    return "Error: String has less than two characters";
  }
}

// Example usage:
const originalString = "HelloWorld";
const modifiedString = removeFirstAndLastCharacters(originalString);
console.log(modifiedString); // Output: elloWorl
