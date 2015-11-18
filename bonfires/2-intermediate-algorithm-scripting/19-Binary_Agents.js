/*  Return an English translated sentence of the passed binary string. The binary string will be space separated.

Here are some helpful links:  String.charCodeAt()  String.fromCharCode()  */


// Solution #1: Using parseInt(string, radix);
/* From MDN: Radix: an integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string. 
Specify 10 for the decimal numeral system commonly used by humans. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. 
Different implementations produce different results when a radix is not specified. */
function binaryAgent(binaryString) {
	  var sentence = [];

	  for (var i = 0; i < binaryString.split(' ').length; i++) {
	      sentence.push(String.fromCharCode(parseInt(binaryString.split(' ')[i], 2))); // 2nd parameter in parseInt (radix) specifies numerical system being used (2 for binary) 
	  }
	  return sentence.join('');
}


// Solution #2: Similar to solution #1 but better explained in more lines
function binaryAgent(binaryString) {
    var sentence = [];

    for (var i = 0, j = binaryString.split(' '); i < j.length; i++) {
        var decimal = parseInt(j[i], 2);
        var charCode = String.fromCharCode(decimal);
        sentence.push(charCode);
    }
    return sentence.join('');
}


console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))// should return "Aren't bonfires fun!?"
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))// should return "I love FreeCodeCamp!"