/*  Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3. */


// Solution #1
function sumFibs(num) {
    var arrFib = []; // declare array to receive the numbers to be added
    var fib1 = 0;
    var fib2 = 1;
    var fibSum = 0;
	
    while (fibSum <= num) {
      	fibSum = fib1 + fib2;  // reassign value to next value in the fib sequence
      	fib1 = fib2;           // swap values
      	fib2 = fibSum; 
      	arrFib.push(fibSum);   // push values to array
    }

    // filter out value bigger than num if any and odd values. Then add all remaining values
    return arrFib.filter(function(w) {return w <= num  && w % 2 !== 0}).reduce(function(a, b) {return a + b}) + 1;
    // The line above is similar to write the 2 lines below:
    // arrFib = arrFib.filter(function(w) {return w <= num  && w % 2 !== 0});
    // return arrFib.reduce(function(a, b) {return a + b}) + 1;
}


// Solution #2
function sumFibs(num) {
    var fib1 = 0;
    var fib2 = 1;
    var result = 0;

    while (fib2 <= num) {
        if (fib2 % 2 !== 0) {result += fib2;} // add valid values to result
        fib2 += fib1;        // reassign value to next value in the fib sequence
        fib1 = fib2 - fib1;  // swap values
    }

    return result;
}


// Solution #3
function sumFibs(num) {
    var fib1 = 1, 
    	fib2 = 1, 
    	result = 0;

    if (num === 1 || num === 2) return 1;

    for (var i = 0; i <= num; i = fib1 + fib2) { // i is the fibonacci < num
        fib1 = fib2;   // swap values
        fib2 = i;      // reassign value to next value in the fib sequence
        if (i % 2 !== 0) result += i; // Filters out even numbers
    }

    return result;
}


console.log(sumFibs(1)) // should return a number.
console.log(sumFibs(1000)) //  should return 1785.
console.log(sumFibs(4000000)) //  should return 4613732.
console.log(sumFibs(4)) //  should return 5.
console.log(sumFibs(75024)) //  should return 60696.
console.log(sumFibs(75025)) //  should return 135721.