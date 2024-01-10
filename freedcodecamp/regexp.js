/*   
 NB: The following comments are aligned as the code each arrow means the new block code explanation below, so if you need to know what  code do or 
 how it works you can look this documentation to grasp the meaning correspondingly.

=> Regular expression are used in programming languages to match of string 
   > extract a pattern more than once, you can use the global search flag: g
 > allow us to find multiple same element at whole string.

=> The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
=> Character classes: allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
=> character sets to specify a group of characters to match.
=> you can use the also number and alphabet to match at given string.
=> Negated character sets: create a set of characters that you do not want to match [^].
=> lazy match which finds the smallest possible part of the string that satisfies the regex pattern.( /t[a-z]*?/)
=> The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).


*/

let testStr = "coding is not weaker";
let testIs = /not/;
let result =  testIs.test(testStr);

let selectFav = "i have nice dog and at";
let testAnimal = /Dog|Cat|fish/i // this the value will this look into the string.
let resultAnimal = testAnimal.test(selectFav)

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /Coding/i; 
let resultStr = extractStr.match(codingRegex);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // applied  ignore and global for ignore cases and match globally.
let resultTwinkle = twinkleStar.match(starRegex); 
// [ 'Twinkle', 'twinkle' ]

let exampleStr = "Let's have fun with regular expressions!"; // looking for words that end with (un) within in the string
let unRegex = /.un/; 
let resultDot = unRegex.test(exampleStr);// wildcard character 


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/g;
let resultClass = quoteSample.match(vowelRegex);

let quoteSamples = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let resultAlphabet = quoteSamples.match(alphabetRegex); // this give the alphabet in the string provided above.

let quoteSampless = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let resultNumberAndAlphas = quoteSample.match(myRegex); 

let quoteSampleNegate = "3 blind mice.";
let myRegexNegate = /[^aeiuoe0-9]/ig; // This line of code will return everything within the string but exclude the vowels and numbers.
let negateResult = quoteSampleNegate.match(myRegexNegate); // can also used to check the first word in the string 



let difficultSpelling = "Mississippi";
let myRegexRepeated = /s+/ig; // you can add [+] to find out repeated letter within the string and return it
let resultRepeated  = difficultSpelling.match(myRegexRepeated);

let text = "<h1>Winter is coming</h1>";
let myRegexLazy = /<.1[a-z]*?>/; // Change this line
let resultLazy = text.match(myRegexLazy); // let reCriminals = /C+[a-z]*?/ this line return C in any string.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;  // $ used to search the word at the end of string.
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);  


let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

console.log(resultLazy);  

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let resultUsername = userCheck.test(username);


let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let resultOhStr = ohRegex.test(ohStr);
console.log(result)

// [A-Za-z0-9_] === /w

let shortHand_= /\W/;
let numbers_ = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
// Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters./
 
// /\d/ used to look digit character in string.
// /\D/ used to look non digit in a certain string.
// /\s/g return whitespace btn characters.
// /\S/g return non-whitespace within string.