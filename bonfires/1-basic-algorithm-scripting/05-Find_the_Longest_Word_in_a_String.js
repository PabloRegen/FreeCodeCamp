/*  Return the length of the longest word in the provided sentence.  Your response should be a number.

Here are some helpful links:  String.split(),  String.length   */ 


// Solution #1
function findLongestWord(str) {
    var longest = 0;          // will store the longest word
    var arr = str.split(' '); // convert string to array of words

    for (var i = 0; i < arr.length; i++) { // loop thru the array's words
        if (arr[i].length > longest) {     // if a word is longer than the value stored on longest 
            longest = arr[i].length;       // new value of longest = length of this word
        }
    }
    return longest;
}


// Solution #2
function findLongestWord(str) {
    var longest = '';
    var arr = str.split(' ');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest.length
}


// Solution #3: map method
function findLongestWord(str) {
    var longest = '';
    var arr = str.split(' ').map(function(w) {
        if (w.length > longest.length) {
            longest = w;
        }
    });
    return longest.length;
}


// Solution #4: reduce method
function findLongestWord(str) {
    return str.split(' ').reduce(function(a, b) {
        return a.length > b.length ? a : b;
    }).length;
}


//console.log(findLongestWord()) // should return a number.
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) //  should return 6.
console.log(findLongestWord("May the force be with you")) //  should return 5.
console.log(findLongestWord("Google do a barrel roll")) //  should return 6.
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow")) //  should return 8.
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology")) //  should return 19.