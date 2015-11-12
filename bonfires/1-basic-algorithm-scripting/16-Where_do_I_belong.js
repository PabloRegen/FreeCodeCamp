/*  Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).

Here are some helpful links:  Array.sort()  */


// Solution #1
function where(arr, num) {
	arr.sort(function(a, b) {return a - b;}); // sorts array numerically
	for (var i = 0; i < arr.length; i++) {
		if (num <= arr[i]) {
			return i;	
		}
	}
	return arr.length;  // Or return i
}


// Solution #2
function where(arr,num) {
    arr.push(num);
    arr.sort(function(a, b) {
    	return a - b;
    });
    return arr.indexOf(num);
}


// Solution #3: Similar to solution #2 but in one less line
function where(arr,num) {
    arr.push(num);
    return arr.sort(function(a, b) {
    	return a - b;   // or return a < b ? -1 : a > b ? 1 : 0;
    }).indexOf(num);
}


console.log(where([10, 20, 30, 40, 50], 35)) // should return 3.
console.log(where([10, 20, 30, 40, 50], 30)) //  should return 2.
console.log(where([40, 60,], 50)) //  should return 1.
console.log(where([5, 3, 20, 3], 5)) //  should return 2.
console.log(where([2, 20, 10], 19)) //  should return 2.
console.log(where([2, 5, 10], 15)) //  should return 3.