/*  Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Here are some helpful links: Array.push()  */


// Solution #1: nested for loops
function chunk(arr, size) {  
	var tempArray = [];
	var resultArray = [];

	for (var i = 0; i < arr.length; i+= size) {
		for (var j = i; j < i + size; j++) {
			if (j >= arr.length) {
				break; 
			} else {
				tempArray.push(arr[j]);
			}
		}
		resultArray.push(tempArray);
		//console.log('tempArray: ' + tempArray, 'resultArray: ' + resultArray);	
		tempArray = [];
	}
	return resultArray;
}
// NOTE for solution #1: could use a counter within the for loop instead of the nested loop


// Solution #2: for loop & slice method
function chunk(arr, size) {  
  var newArr = [];

  for (var i = 0; i < arr.length; i+= size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}


// Solution #3: Similar to Solution #2
function chunk(arr, size) {  
  var newArr = [];

  for (var i = 0; i < arr.length; i) {
    newArr.push(arr.slice(i, i+= size));  // i+= size also increments i within the loop
  }
  return newArr;
}


console.log(chunk(["a", "b", "c", "d"], 2)); // should return [["a", "b"], ["c", "d"]].
console.log(chunk([0, 1, 2, 3, 4, 5], 3)); // should return [[0, 1, 2], [3, 4, 5]].
console.log(chunk([0, 1, 2, 3, 4, 5], 2)); // should return [[0, 1], [2, 3], [4, 5]].
console.log(chunk([0, 1, 2, 3, 4, 5], 4)); // should return [[0, 1, 2, 3], [4, 5]].

console.log(chunk([0,1,2,3,4,5,6,7,8,9], 2)); // should return [[0,1], [2,3], [4,5], [6,7], [8, 9]]
console.log(chunk([0,1,2,3,4,5,6,7,8,9], 3)); // should return [[0,1,2], [3,4,5], [6,7,8], [9]]