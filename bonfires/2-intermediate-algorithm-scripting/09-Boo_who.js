/*  Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.

Here are some helpful links:  Boolean Objects (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)  */


// Solution #1
function boo(bool) {
  return bool === true || bool === false
}


// Solution #2
function boo(bool) {
  return typeof bool === 'boolean';
}


console.log(boo(true)) // should return true.
console.log(boo(false)) //  should return true.
console.log(boo([1, 2, 3])) //  should return false.
console.log(boo([].slice)) //  should return false.
console.log(boo({ "a": 1 })) //  should return false.
console.log(boo(1)) //  should return false.
console.log(boo(NaN)) //  should return false.
console.log(boo("a")) //  should return false.

