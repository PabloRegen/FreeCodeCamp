/*  Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. 
If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!

Here are some helpful links:  Array.reduce()  */


// Solution #1
function pairwise(arr, arg) {
    var sum = 0;

    for (var i = 0; i < arr.length - 1; i++) { // loop from 0 to 1 before end
        for (var j = 1; j < arr.length; j++) { // loop from 1 to end
            if (i < j && arr[i] + arr[j] === arg) {
                sum += i + j;
                arr[i] = undefined; // to avoid reusing these number while keeping the length of arr constant 
                arr[j] = undefined;
            }
        }
    }
    return sum;
}


console.log(pairwise([1, 4, 2, 3, 0, 5], 7))// should return 11.
console.log(pairwise([1, 3, 2, 4], 4))//  should return 1.
console.log(pairwise([1,1,1], 2))//  should return 1.
console.log(pairwise([0, 0, 0, 0, 1, 1], 1))//  should return 10.
console.log(pairwise([], 100))//  should return 0.