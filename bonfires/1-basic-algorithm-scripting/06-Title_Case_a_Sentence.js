/*  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Here are some helpful links: String.charAt()  */


// Solution #1: map method
function titleCase(str) {
	return str.split(' ').map(function(w) {
		return w[0].toUpperCase() + w.slice(1).toLowerCase();  // w[0] is similar to w.charAt(0) and to w.slice(0,1)
	}).join(' ');
}


// Solution #2: for loop
function titleCase(str) {
	var arr = str.split(' ');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase(); // arr[i][0] is similar to arr[i].charAt(0)
	}
	return arr.join(' ');
}


//console.log(titleCase()) // should return a string.
console.log(titleCase("I'm a little tea pot")) //  should return "I'm A Little Tea Pot".
console.log(titleCase("sHoRt AnD sToUt")) //  should return "Short And Stout".
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) //  should return "Here Is My Handle Here Is My Spout".