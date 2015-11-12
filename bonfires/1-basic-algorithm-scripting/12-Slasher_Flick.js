/*
Return the remaining elements of an array after chopping off n elements from the head. The head meaning the beginning of the array, or the zeroth index

Here are some helpful links:  Array.slice() & Array.splice()  */



// Solution #1: slice method
function slasher(arr, howMany) {
    return arr.slice(howMany);  // returns elements after and including howMany
}


// Solution #2: splice method
function slasher(arr, howMany) {
    arr.splice(0,howMany); // removes elements from 0 to but not including howMany
    return arr;  // return the remaining elements of the array
}
// NOTE: if I wrote return arr.splice(0,howMany) instead it would have returned just the removed elements from 0 to but not including howMany



console.log(slasher([1, 2, 3], 2)) // should return [3].
console.log(slasher([1, 2, 3], 0)) //  should return [1, 2, 3].
console.log(slasher([1, 2, 3], 9)) //  should return [].
console.log(slasher([1, 2, 3], 4)) //  should return [].