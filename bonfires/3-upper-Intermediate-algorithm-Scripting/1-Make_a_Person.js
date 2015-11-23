/*  Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.

Here are some helpful links:  Closures  Details of the Object Model  */




// Solution 
var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function() {return fullName.split(" ")[0]};
    this.getLastName = function() {return fullName.split(" ")[1]};
    this.getFullName = function() {return fullName};

    this.setFirstName = function(first) {fullName = first + " " + fullName.split(" ")[1]};
    this.setLastName = function(last) {fullName = fullName.split(" ")[0] + " " + last};
    this.setFullName = function(firstAndLast) {fullName = firstAndLast};
};


var bob = new Person('Bob Ross');
bob.getFullName();

console.log(Object.keys(bob).length) // should return 6.
console.log(bob instanceof Person) //  should return true.
console.log(bob.firstName) //  should return undefined.
console.log(bob.lastName) //  should return undefined.
console.log(bob.getFirstName()) //  should return "Bob".
console.log(bob.getLastName()) //  should return "Ross".
console.log(bob.getFullName()) //  should return "Bob Ross".
console.log(bob.getFullName()) //  should return "Haskell Ross" after bob.setFirstName("Haskell").
console.log(bob.getFullName()) //  should return "Bob Curry" after bob.setLastName("Curry").
console.log(bob.getFullName()) //  should return "Haskell Curry" after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName()) //  should return "Haskell" after bob.setFullName("Haskell Curry").
console.log(bob.getLastName()) //  should return "Curry" after bob.setFullName("Haskell Curry").