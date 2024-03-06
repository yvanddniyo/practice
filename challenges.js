//1. Prime Numbers 


const getPrimeNum =(num) =>{
	if (num < 2) {
		return false
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false
		}
	}
	return true
}

const arraysPrime = (arr) => {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		if (getPrimeNum(arr[i])) {
			result.push(arr[i])
		}
	} 
	return result;
}
const arr = [1,2,3,4,5,7,8,9]
// console.log(arraysPrime(arrray));


// 2.   => Palindrome

const palindrome =(str) => {
  return str === str.split('').reverse().join('')
}
console.log(palindrome('ye'))

// 3.SECOND CHALLENGES  => ARRAY REVERSING

const reverseArray = (arr) => {
  let newArr = [];
  arr.map((num) => {
    newArr.unshift(num)
  })
  return newArr

}
console.log(reverseArray([1,2,3,4,5,6]));

// 4. THIRD CHALLENGES => 

const reverseInplaceArray = (arr2) => {
    let arr1 = []
    for(let i = 0; i < arr2.length; i++) {
    newArr.unshift(arr2[i])
  }
  return newArr

}


// 5. FIVE CHALLENGES

const makeObjects = (arrs) =>{
  const objectContainer =  {
   M:[],
   F: []
  }
  for(let i = 0; i < arrs.length; i++) {
    const removeSpaces = arrs[i].split(',').map(itm => itm.trim())
    const [fullName, ages, gender] = removeSpaces;
    const [f, l] = fullName.split(' ')
   if(gender === 'male') {
    objectContainer.M.push({[f]: {secondName: l, ages: parseInt(ages)}})
   }
   else if (gender === 'female'){
    objectContainer.F.push({[f]: {secondName: l, ages: parseInt(ages)}})
   }
  }
  return objectContainer
}

const entr = 
["Patrick wyne, 30, male", "lil wyne, 32, male","Eric mimi, 21, female","Dodos deck, 21,male","Alian Dwine, 22, male","Patrick wyne, 33, male","Patrick wyne, 10,male0","Patrick wyne, 40,male"]
const result = makeObjects(entr);
console.log(JSON.stringify(result, null, 2))



// {
//   females: [Eric: {'second-name':mimi, age:21}], 
// males: [' patrick': {'second-name':wyne, age:30},lil: {second-name:wyne, age:30}]
// }


// solution


