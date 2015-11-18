/* Sum all the prime numbers up to and including the provided number. A prime number is defined as having only two divisors, 1 and itself. The provided number may not be a prime.  

Here are some helpful links:  For Loops  Array.push()  */


// Solution #1
function sumPrimes(num) {
    var prime = 0;  // Declare variable to sum all the prime numbers

    for (var i = 2; i <= num; i++) {  // for loop from 2 till num. By definition prime numbers are grater than 1, therefore the loop starts at 2.

        var temp = true;
        for (var j = 2; j < i; j++) { // nested for loop between 2 and i - 1 (num - 1). A prime number will not be divisible by any of these
            if (i % j === 0) {        // if i % j === 0 then i is not prime
                temp = false;
                break;
            }
        }
        if (temp) {prime += i;}
    }
    return prime;
}


console.log(sumPrimes())// should return a number.
console.log(sumPrimes(10))// should return 17.
console.log(sumPrimes(977))// should return 73156.