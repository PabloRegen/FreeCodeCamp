/*  Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Here are some helpful links: Global String Object  */


// Solution #1: for loop
function repeat(str, num) {
    var newStr = '';
    for (var i = num; i > 0; i--) {
        newStr += str;
    }
    return newStr;
}


// Solution #2: while loop
function repeat(str, num) {
    var newStr = '';
    while (num > 0) {
        newStr += str;
        num--
    }
    return newStr;
}


// Solution #3: Recursive
function repeat(str, num) {
  return num > 0 ?  str + repeat(str, num - 1) : '';
}


console.log(repeat("*", 3)) // should return "***".
console.log(repeat("abc", 3)) // should return "abcabcabc".
console.log(repeat("abc", 4)) // should return "abcabcabcabc".
console.log(repeat("abc", 1)) // should return "abc".
console.log(repeat("*", 8)) // should return "********".
console.log(repeat("abc", -2)) // should return "".