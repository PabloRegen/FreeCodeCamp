/* Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). */


// Solution #1
function find(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			return arr[i];
		}
	}
}


// Solution #2
function find(arr, func) {
    return arr.filter(function(i) { 
        return func(i); 
    })[0]; //returns the first element of the returned array filtered by applying the function provided
}


// Solution #3
function find(arr, func) {
    return arr.filter(func)[0]; //returns the first element of the returned array filtered by applying the function provided
}



console.log(find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))// should return 8.
console.log(find([1, 3, 5, 9], function(num) { return num % 2 === 0; }))// should return undefined.