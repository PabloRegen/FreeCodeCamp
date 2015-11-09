/*  Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Here are some helpful links:  String.replace(),  String.toLowerCase()  */


// Solution #1: Regex and comparing strings
function palindrome(str) {
    var x = str.replace(/[^\w]|_/g, '').toLowerCase(); // eliminates all punctuation, _ and spacing by replacing them with an empty string. Lower cases.
	var y = x.split('').reverse().join('');
    return x === y;
}

// Note: can't compare arrays the same way as comparing strings. Therefore converting the strings to arrays by spiltting does not work.
// Refer to http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript


// Solution #2: Regex and loop through string
function palindrome(str) {
    str = str.replace(/\W|_/g, '').toLowerCase();

    for (i = 0; i < Math.floor(str.length/2); i++) {  // check 1st half against 2nd half of the string
        if (str[i] !== str[str.length -1 - i]) {
            return false;
        }
    }
    return true;
}


// Solution #3: Similar to Solution #2. Similar Regex
function palindrome(str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();

    for (var i = 0, len = str.length - 1; i < len/2; i++) {  // check 1st half against 2nd half of the string
        if(str[i] !== str[len - i]) {
            return false;
        }
    }
    return true;
}


//  Note: Another possible Regex: str.toLowerCase().replace(/[^a-z0-9]/g, ''); --> Replace every character that is not a lower case letter or number. 
  

console.log(palindrome("racecar"))
console.log(palindrome("RaceCar")) 
console.log(palindrome("race CAR"))
console.log(palindrome("racecar1"))