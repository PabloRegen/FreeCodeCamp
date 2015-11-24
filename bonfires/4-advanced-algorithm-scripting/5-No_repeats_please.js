/*  Return the number of total permutations of the provided string that don't have repeated consecutive letters.

For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

Here are some helpful links:  Permutations  RegExp  Heap's algorithm: https://en.wikipedia.org/wiki/Heap%27s_algorithm  */


// Solution #1
function permAlone(str) {

  var regex = /(.)\1/;  // Match any consecutive repeated characters
  var arr = str.split('');
  var permutations = [];
  var tmp;
 
  function swap(index1, index2) {   // Function to swap variables' positions.
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  function generate(int) {  // Generate arrays of permutations using the algorithm.
    if (int === 1) {
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  return permutations.filter(function(string) {
    return !string.match(regex);
  }).length;
}


//console.log(permAlone())// should return a number.
console.log(permAlone('aab'))//  should return 2.
console.log(permAlone('aaa'))//  should return 0.
console.log(permAlone('aabb'))//  should return 8.
console.log(permAlone('abcdefa'))//  should return 3600.
console.log(permAlone('abfdefa'))//  should return 2640.
console.log(permAlone('zzzzzzzz'))//  should return 0.