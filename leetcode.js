// const sumTwo =(arr, target) => {
//     for (let i = 0; i < arr.length; i++){
//         for(let j = 1; j < arr.length; j++){

//             console.log(i);
//         }
//     }
  
//   }
  
//   const arr = [1,2,3,4,5]

// const getFabNum = (n) => {
//     let ans= []
// let goldenR = 1.618;
// let goldenRationPower = Math.pow(goldenR, n)
// let anotherValue = Math.pow(0.628, n)

// const result =  (goldenRationPower - anotherValue)/2.23
// ans.push(result)
// return ans;
// }
// console.log(getFabNum(10000))

function fib(n) {
	if (n == 0)
		return [0n, 1n];
	else {
        const [a, b] = fib(Math.floor(n / 2));
        // console.log([a,b]);
		const c = a * (b * 2n - a);
        console.log(c);
		const d = a * a + b * b;
        // console.log(d);

		if (n % 2 == 0)
			return [c, d];
		else
			return [d, c + d];
	}
}
console.log(fib(9))

