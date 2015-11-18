/*  Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Here are some helpful links:  Arguments object  Array.reduce()  */


// Solution #1
function unite() {
    var arrArg = [].slice.call(arguments);  // Similar to Array.prototype.slice.call(arguments).  Since qty of arguments is unknown, create an array of arguments.
    var newArr = arrArg.reduce(function(a, b) { return a.concat(b); });  // Flatten an array of arrays
    return newArr.filter (function (v, i, a) { return a.indexOf (v) == i; }); // eliminates duplicated items on newArr
}


// Solution #2
function unite() {
    var result = [];

    for (var i = 0; i < arguments.length; i++) {         // Since qty of arguments is unknown, this loop will help checking all of them
        for (var j = 0; j < arguments[i].length; j++) {  // Loops through each argument's elements
            if (result.indexOf(arguments[i][j]) < 0) {   // check if the elements are already on the result array
                result.push(arguments[i][j]);            // if not, pushed them to the result array
            }   
        }
    }
    return result;
}



console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1])) // should return [1, 3, 2, 5, 4].
console.log(unite([1, 3, 2], [1, [5]], [2, [4]])) //  should return [1, 3, 2, [5], [4]].
console.log(unite([1, 2, 3], [5, 2, 1])) //  should return [1, 2, 3, 5].
console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) //  should return [1, 2, 3, 5, 4, 6, 7, 8].