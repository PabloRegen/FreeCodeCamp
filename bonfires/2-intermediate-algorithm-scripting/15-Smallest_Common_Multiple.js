/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.  */


// Solution #1
function smallestCommons(arr) {
    if (arr === undefined) return 0; // solves case there is no array to calculate

    arr.sort(function(a, b) {return a - b;}); // sorting so 1st arr number is the smallest
  
    for (var i = arr[1], j = max(arr); i < j; i++) { // max function call. i starts at arr[1] becasue the smallest common multiple will have to be >= biggest arr number
        for (var k = arr[0]; k <= arr[1]; k++) {
            var temp = true;
            if (i % k !== 0) { // i is not multiple of k
                temp = false;
                break;
            }
        }
        if (temp) {return i;}
    }
}

// multiply among range of numbers within arr to calculate the maximum number needed to be tried on the smallestCommons function
function max(arr) {
    var y = 1;
    for (var x = arr[0]; x <= arr[1]; x++) {y *= x;}
    return y;
}


// Solution #2: while loop
function smallestCommons(arr) {
    if (arr === undefined) return 0; // solves case there is no array to calculate

    arr.sort(function(a, b) {return a - b;}); // sorting so 1st arr number is the smallest
  
    var i = arr[1];  //  i starts at arr[1] becasue the smallest common multiple will have to be >= biggest arr number
    while (true) {
        for (var k = arr[0]; k <= arr[1]; k++) { // loop through min to max and all values in between within arr
            var temp = true;
            if (i % k !== 0) { // i is not multiple of k
                temp = false;
                i++
                break;
            }
        }
        if (temp) {return i;}
    }
}



console.log(smallestCommons())// should return a number.
console.log(smallestCommons([1, 5]))// should return 60.
console.log(smallestCommons([5, 1]))// should return 60.
console.log(smallestCommons([1, 13]))// should return 360360.