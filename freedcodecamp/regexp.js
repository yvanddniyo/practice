/*   
 NB: The following comments are aligned as the code each arrow means the new block code explanation below, so if you need to know what  code do or 
 how it works you can look this documentation to grasp the meaning correspondingly.

=> Regular expression are used in programming languages to match of string 
   > extract a pattern more than once, you can use the global search flag: g
 > allow us to find multiple same element at whole string.

=> The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
=> Character classes: allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
=> character sets to specify a group of characters to match.
*/

let testStr = "coding is not weaker";
let testIs = /not/;
let result =  testIs.test(testStr);

let selectFav = "i have nice dog and at";
let testAnimal = /Dog|Cat|fish/i // this the value will this look into the string.
let resultAnimal = testAnimal.test(selectFav)

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /Coding/i; // Change this line
let resultStr = extractStr.match(codingRegex);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // applied  ignore and global for ignore cases and match globally.
let resultTwinkle = twinkleStar.match(starRegex); // Change this line
// [ 'Twinkle', 'twinkle' ]

let exampleStr = "Let's have fun with regular expressions!"; // looking for words that end with (un) within in the string
let unRegex = /.un/; // Change this line
let resultDot = unRegex.test(exampleStr);// wildcard character 
console.log(resultDot); 

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/g;
let resultClass = quoteSample.match(vowelRegex);

let quoteSamples = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let resultAlphabet = quoteSamples.match(alphabetRegex); // this give the alphabet in the string provided above.

console.log(resultAlphabet); // 

