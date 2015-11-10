/*  Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.
*/


// Solution #1: map & apply methods
function largestOfFour(arr) {
    return arr.map(function(w) {
        return Math.max.apply(null, w);  // finds the maximum element in a numeric array. See Function.prototype.apply() on MDN
    }); 
}


// Solution #2: map & reduce methods
function largestOfFour(arr) {
    return arr.map(function(w) {
        return w.reduce(function(a, b){  // returns the biggest number within each sub-array
      		return a >= b ? a : b;
    	});
    }); 
}


// Solution #3: map and sort methods
function largestOfFour(arr) {
	var result = [];

	// sort each of arr sub-arrays
	arr.map(function(w) {
		return w.sort(function(a,b) {
			  	if (a > b) {return 1;}
  				if (a < b) {return -1;}
  				return 0;
		});
	});
	// push gratest value to result array
	for (i in arr) {
		result.push(arr[i][arr.length - 1]);
	} 
	return result;
}


// Solution #4: map & sort methods
function largestOfFour(arr) {
	// sort each of arr sub-arrays
	arr.map(function(w) {
		return w.sort(function(a,b) {
			  	if (a > b) {return 1;}
  				if (a < b) {return -1;}
  				return 0;
		});
	});

	return arr.map(function(c) {
		return c[arr.length - 1];
	});
}


// Solution #5: Similar to solution #4 but uses only 1 map method
function largestOfFour(arr) {
    return arr.map(function(w) {
        return w.sort(function(a,b) {
                  if (a > b) {return 1;}
                  if (a < b) {return -1;}
                  return 0;
        })[arr.length - 1];  // Or [w.length - 1]
    });
}


// Solution #6
function largestOfFour(arr) {
    var z = [0,0,0,0];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (z[i] < arr[i][j]) {
                z[i] = arr[i][j];
            }
        }
    }
    return z;
}


//console.log(largestOfFour()) // should return an array.
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])) // should return [27,5,39,1001].
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])) // should return [9, 35, 97, 1000000].