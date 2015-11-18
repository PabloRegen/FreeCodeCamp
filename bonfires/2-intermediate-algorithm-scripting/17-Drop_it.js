/*  Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

Here are some helpful links:  Arguments object  Array.shift()  */


// Solution #1
function drop(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];
}


// Solution #2
function drop(arr, func) {
    for (var i = 0, j = arr.length; i < j; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}


console.log(drop([1, 2, 3, 4], function(n) {return n >= 3;}))// should return [3, 4].
console.log(drop([1, 2, 3], function(n) {return n > 0; }))// should return [1, 2, 3].
console.log(drop([1, 2, 3, 4], function(n) {return n > 5;}))// should return [].
console.log(drop([1, 2, 3, 7, 4], function(n) {return n >= 3}))// should return [3, 7, 4].