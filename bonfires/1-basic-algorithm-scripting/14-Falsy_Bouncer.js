/*  Remove all falsy values from an array.  Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:  Boolean Objects & Array.filter()  */


// Solution #1: The filter method returns a new array containing all the elements for which the function returns True
function bouncer(arr) {
    return arr.filter(Boolean); 
}


// Solution #2
function bouncer(arr) {
    return arr.filter(function (x) {
    	return Boolean(x);
    });
}


// Solution #3: Truthy values return True therefore are included in the newly returned array. Falsy values return False and are filtered out
function bouncer(arr) {
    return arr.filter(function(x) {
        return x;
    });
}


console.log(bouncer([7, "ate", "", false, 9])) // should return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])) // should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])) // should return [].

/*
Since Boolean constructor is also a function, it returns either true for ‘truthy’ argument or false for ‘falsy’ argument.

Examples:
Boolean(0); // false
Boolean(true); // true
Boolean(1); // true
Boolean(""); // false
Boolean("false"); // true. "false" is a regular, non-empty string

Refer to:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/


