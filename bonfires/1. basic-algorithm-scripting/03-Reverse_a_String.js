/*  Reverse the provided string.  You may need to turn the string into an array before you can reverse it.  Your result must be a string.

Here are some helpful links:  Global String Object,  String.split(),  Array.reverse(),  Array.join()  */


// Solution #1: Need to convert string to array because the reverse method does not work on strings
function reverseString(str) {
    return str.split('').reverse().join('');
}


// Solution #2
function reverseString(str) {
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}


console.log(reverseString('hello')); // --> olleh