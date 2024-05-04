const sumTwo = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {

			console.log(i);
		}
	}

}

const arr = [1, 2, 3, 4, 5]

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
		const c = a * (b * 2n - a);
		console.log(c);
		const d = a * a + b * b;

		if (n % 2 == 0)
			return [c, d];
		else
			return [d, c + d];
	}
}


const divideObj = (str) => {
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		if (obj.hasOwnProperty(str[i])) {
			obj[str[i]] += 1
		}
		else {
			obj[str[i]] = 1
		}
	}
	return obj
}

const result = divideObj("abbbbc")
console.log(result);
