/*  Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.

Here are some helpful links:  Array.reduce()  Symmetric Difference  */


// Solution #1
function sym(args) {
  var arrArg = [].slice.call(arguments); // Since qty of arguments is unknown, create an array of arguments
  // define variables to be used
  var x,
      y,
      newArr,
      arg0 = arguments[0];

  for (var i = 0; i < arrArg.length - 1; i++) {
    x = arg0.filter(function(z) {return arrArg[i+1].indexOf(z) < 0});  // keeps only the items on arg0 that are not found on the next argument
    y = arrArg[i+1].filter(function(z) {return arg0.indexOf(z) < 0});  // keeps only the items on the next argument that are not found on arg0

    newArr = x.concat(y).reduce(function(a,b) {if (a.indexOf(b) < 0) a.push(b); return a;},[]);  // eliminates duplicated items on the concatenated newArr
    arg0 = newArr; // Need to use the newly created newArr as the array arg0 to be process by x 
  }
  return newArr
}


console.log(sym([1, 2, 3], [5, 2, 1, 4]))// should return [3, 5, 4].
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))// should return [1, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))// should return [1, 4, 5].