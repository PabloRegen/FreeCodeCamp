/*  We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.

Here are some helpful links:  Math.max()  Math.min()  Array.reduce()  */


// Solution #1
function sumAll(arr) {
	var total = 0;
	for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
		total += i;
	}
    return total;
}


// Solution #2: For loop & Reduce method
function sumAll(arr) {
	var newArr = [];
	for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
		newArr.push(i);
	}
	return newArr.reduce(function(a, b) {return a + b;});  // Or on ES6: return newArr.reduce((a, b) => a + b);
}


// Solution #3: While loop & Reduce method
function sumAll(arr) {
	var newArr = [];
	var i = Math.min(arr[0], arr[1]);
	while (i <= Math.max(arr[0], arr[1])) {
		newArr.push(i);
		i++
	}
	return newArr.reduce(function(a, b) {return a + b;});
}


//console.log(sumAll()) // should return a number.
console.log(sumAll([1, 4])) // should return 10.
console.log(sumAll([4, 1])) // should return 10.
console.log(sumAll([5, 10])) // should return 45.
console.log(sumAll([10, 5])) // should return 45.