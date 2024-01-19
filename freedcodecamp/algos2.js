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