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
