/*  Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.

Here are some helpful links:  Roman Numerals  Array.splice()  Array.indexOf()  Array.join()  */


// Solution #1
function convert(num) {
	var str = num.toString();

	var d_1_9 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
	var d_10_99 = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
	var d_100_999 = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
	var d_1000_9999 = ['', 'M', 'MM', 'MMM', 'MMMM', 'MMMMM', 'MMMMMM', 'MMMMMMM', 'MMMMMMMM', 'MMMMMMMMM'];
	
	var w = d_1_9[str[str.length-1]];
	var x = d_10_99[str[str.length-2]];
	var y = d_100_999[str[str.length-3]];
	var z = d_1000_9999[str[str.length-4]];

	if (str.length === 1) {return w}
	else if (str.length === 2) {return x + w}
	else if (str.length === 3) {return y + x + w}
	else {return z + y + x + w}
}


// Solution #2
function convert(num) {  
    var r = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (num >= decimals[i]) {
            r += roman[i];
            num -= decimals[i];
        }
    }
    return r;
}


console.log(convert(5)) // should return "V".
console.log(convert(9)) //  should return "IX".
console.log(convert(12)) //  should return "XII".
console.log(convert(16)) //  should return "XVI".
console.log(convert(29)) //  should return "XXIX".
console.log(convert(44)) //  should return "XLIV".
console.log(convert(45)) //  should return "XLV"
console.log(convert(68)) //  should return "LXVIII"
console.log(convert(83)) //  should return "LXXXIII"
console.log(convert(97)) //  should return "XCVII"
console.log(convert(99)) //  should return "XCIX"
console.log(convert(500)) //  should return "D"
console.log(convert(501)) //  should return "DI"
console.log(convert(649)) //  should return "DCXLIX"
console.log(convert(798)) //  should return "DCCXCVIII"
console.log(convert(891)) //  should return "DCCCXCI"
console.log(convert(1000)) //  should return "M"
console.log(convert(1004)) //  should return "MIV"
console.log(convert(1006)) //  should return "MVI"