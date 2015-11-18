/*  Flatten a nested array. You must account for varying levels of nesting.

Here are some helpful links:  Array.isArray()  */

// NOTE: The Array.isArray() method returns true if an object is an array, false if it is not.


// Solution #1: Recursive. map method
function steamroller(arr) {
    x = arr.reduce(function(a, b) {return a.concat(b)}, []); // Flatten the array of arrays only once

    arr.map(function(e) {
      if (Array.isArray(e)) {
        steamroller(x) // if there is still an array within the exterior array then it calls the function itself
      }
    });
    return x;
}


// Solution #2: Recursive. Foor loop
function steamroller(arr) {
    x = arr.reduce(function(a, b) {return a.concat(b)}, []); // Flatten the array of arrays only once

    for (var i = 0; i < x.length; i++) {
        if (Array.isArray(x[i])) {
          steamroller(x) // if there is still an array within the exterior array then it calls the function itself
        }
    }
    return x;
}


console.log(steamroller([["a"], ["b"]])) // should return ["a", "b"].
console.log(steamroller([[["a"]], [["b"]]])) // should return ["a", "b"].
console.log(steamroller([1, [2], [3, [[4]]]])) // should return [1, 2, 3, 4].
console.log(steamroller([1, [], [3, [[4]]]])) // should return [1, 3, 4].
console.log(steamroller([1, {}, [3, [[4]]]])) // should return [1, {}, 3, 4].
