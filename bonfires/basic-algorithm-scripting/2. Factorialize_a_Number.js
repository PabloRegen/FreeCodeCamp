/*  Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!  For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Here are some helpful links:  Arithmetic Operators  */


// Solution #1: Use Recursion
function factorialize(num) {
	if (num < 2) {return 1;}
	return num * factorialize(num - 1);
}


// Solution #2: Foor loop. Works but modifies value of num
function factorialize(num) {
	if (num < 2) {return 1;}

	for (var i = num - 1; i > 1; i--) {
		num *= i;
	}
	return num
}


// Solution #3: Similar to solution #2 but does not modify value of num
function factorialize(num) {
	var factorial = 1;

	for (var i = num; i > 1; i--) {
		factorial *= i;
	}
	return factorial;
}


// Solution #4: While loop
function factorialize(num) {
	var factorial = 1;

	while (num > 1) {
		factorial *= num;
		num--;
	}
	return factorial;
}


console.log(factorialize(5));