/*  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Here are some helpful links:  Arguments object & Array.filter()  */


// Solution #1: converting arguments from function call to an array
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments); // Similar to [].slice.call(arguments) declares an array args which values are all the arguments from the destroyer function call
    args.slice(1); // deletes arr (which is args[0]) from the args array
    return arr.filter(function(e) {
        return args.indexOf(e) < 0; // returns all elements (e) from arr array that are not found on args
    });
}


// Solution #2: using for loop to create array from arguments
function destroyer(arr) {
	var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args[i-1] = arguments[i];    // or args.push(arguments[i])
    }
    return arr.filter(function(e) { 
        return args.indexOf(e) < 0;
    });
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // should return [1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)) // should return [1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)) // should return [1].
console.log(destroyer([2, 3, 2, 3], 2, 3)) // should return [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)) // should return ["hamburger"].