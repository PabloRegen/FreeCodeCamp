/*  Find the missing letter in the passed letter range and return it.  If all letters are present in the range, return undefined.

Here are some helpful links:  String.charCodeAt()  String.fromCharCode()  */


// Solution #1
function fearNotLetter(str) {
	var i = str.charCodeAt(0); // declare i equal to character code of 1st str letter
	for (var j = 0; j < str.length; j++) {
		if (str.charCodeAt(j) !== i) { // check if character code of str letters is skipping a character
			return String.fromCharCode(i); // return missing character
		}
		i++
	}
}


// Solution #2
function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {  // comparing actual character to the one it should be if thee was no missing letter
            return String.fromCharCode(str.charCodeAt(0) + i);
        }  
    }
}


// Solution #3
function fearNotLetter(str) {
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i) < str.charCodeAt(i+1) - 1) {  // comparing actual character to the one it should be if thee was no missing letter
            return String.fromCharCode(str.charCodeAt(i+1) - 1);
        }  
    }
}


console.log(fearNotLetter("abce")) // should return "d".
console.log(fearNotLetter("abcdefghjklmno")) //  should return "i".
console.log(fearNotLetter("bcd")) //  should return undefined.
console.log(fearNotLetter("yz")) //  should return undefined.