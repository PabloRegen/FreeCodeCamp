/*  Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Here are some helpful links:  Closures  Arguments object  */


// Solution #1
function add() {
	  var x = arguments[0],
		    y = arguments[1];

	  if (typeof x === 'number' && typeof y === 'number') {return x + y}	

	  if (arguments.length === 1 && typeof x === 'number') {
	      return function(y) {
		        if (typeof y === 'number') {
		    	      return x + y;
		        }
        };
    }
}



console.log(add(2, 3))// should return 5.
console.log(add(2)(3))// should return 5.
console.log(add("http://bit.ly/IqT6zt"))// should return undefined.
console.log(add(2, "3"))// should return undefined.
console.log(add(2)([3]))// should return undefined.