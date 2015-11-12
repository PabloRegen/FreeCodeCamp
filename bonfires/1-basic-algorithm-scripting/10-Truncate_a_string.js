/*  Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

Here are some helpful links: String.substr() String.slice()  */


// Solution #1
function truncate(str, num) {
	return str.length > num ? str.substr(0, num - 3) + "..." : str;
}

// MY NOTE: Do not use slice in this case. Slice will return portion of the string in certain range when num - 3 < 0 because it starts counting from the end of the string.


console.log(truncate('0123456789', -5));
console.log(truncate('0123456789', 0));
console.log(truncate('0123456789', 2));
console.log(truncate('0123456789', 3));
console.log('---------');
console.log(truncate('0123456789', 4));
console.log(truncate('0123456789', 5));
console.log(truncate('0123456789', 6));
console.log(truncate('0123456789', 7));
console.log(truncate('0123456789', 8));
console.log(truncate('0123456789', 9));
console.log('---------');
console.log(truncate('0123456789', 10));
console.log(truncate('0123456789', 15));
