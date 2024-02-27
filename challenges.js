//1. Prime Numbers 

const primeEachNum = (n) => {
    if (n <=1) {
        return false
    }
    if ( n % 2 === 0) {
        return n
    }
}

const primeNum = (arrs) => {
    for (let i = 1; i < arrs.length; i++) {
        console.log(arrs[i])
    }
    
}
console.log(primeNum([1,2,3,4,5,6,7,8,9]))


// 2.   => Palindrome

const palindrome =(str) => {
  return str === str.split('').reverse().join('')
}
console.log(palindrome('ye'))

// 2.SECOND CHALLENGES  => ARRAY REVERSING

const reverseArray = (arr) => {
  let newArr = [];
  arr.map((num) => {
    newArr.unshift(num)
  })
  return newArr

}
console.log(reverseArray([1,2,3,4,5,6]));

// 3. THIRD CHALLANGES => 

const reverseInplaceArray = (arr2) => {
    let arr1 = []
    for(let i = 0; i < arr2.length; i++) {
    newArr.unshift(arr2[i])
  }
  return newArr

}