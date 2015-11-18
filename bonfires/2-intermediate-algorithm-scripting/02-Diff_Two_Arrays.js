/*  Compare two arrays and return a new array with any items not found in both of the original arrays.

Here are some helpful links:  Comparison Operators  Array.slice()  Array.filter()  Array.indexOf()  Array.concat()  */


// Solution #1
function diff(arr1, arr2) {
    var x = arr1.filter(function(w1) {return arr2.indexOf(w1) < 0;});  // keeps only the items on arr1 that are not found on arr2
    var y = arr2.filter(function(w2) {return arr1.indexOf(w2) < 0;});  // keeps only the items on arr2 that are not found on arr1
    return x.concat(y);
}


// Solution #2: SImilar to Solution #1 but in one line
function diff(arr1, arr2) {
    return arr1.filter(function(w1) {return arr2.indexOf(w1) < 0;}).concat(arr2.filter(function(w2) {return arr1.indexOf(w2) < 0;}));
}


// Solution #3: Similar to Solution #1 but also eliminates duplicates items on concatenated array
function diff(arr1, arr2) {
    var x = arr1.filter(function(w1) {return arr2.indexOf(w1) < 0;});
    var y = arr2.filter(function(w2) {return arr1.indexOf(w2) < 0;}); 
    return x.concat(y).reduce(function(a,b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;},[]); // eliminates duplicated items on newArr
}


// Solution #4: NOTE: does not work if repeated items are not next to each other
function diff(arr1, arr2) {
    var newArr = [];

    // loop thru arr1 to compare to arr2. If item not found it is pushed to newArr
    for (var x = 0; x < arr1.length; x++) { // Can loop using for (var x in arr1)
        if (arr2.indexOf(arr1[x]) < 0) {
            newArr.push(arr1[x]);
        }
    }
 
    // loop thru arr2 to compare to arr1. If item not found it is pushed to newArr
    for (var x = 0; x < arr2.length; x++) { // Can loop using for (var x in arr2)
        if (arr1.indexOf(arr2[x]) < 0) {
            newArr.push(arr2[x]);
        }   
    }
  
  // loop thru newArr to eliminate repeated items. NOTE: does not work if repeated items are not next to each other
    var newArr2 = [];
    for (var x = 0; x < newArr.length; x++) {
  	    if (newArr[x] !== newArr[x+1]) {
  		      newArr2.push(newArr[x]);
  	    }
    }
    return newArr2;
}


// Solution #5: NOTE: does not work if repeated items are not next to each other
function diff(arr1, arr2) {  
    return arr1.concat(arr2).filter(function(w) { 
        return !(arr1.indexOf(w) >= 0 && arr2.indexOf(w) >= 0);
    });
}


// Solution #6
function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  function test(w) {
    if (arr1.indexOf(w) < 0 || arr2.indexOf(w) < 0) {
      return w;
    }
  }
  
  return newArr.filter(test);
}


//console.log(diff()) // should return an array.
console.log(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) // should return ["pink wool"]
console.log(diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //  should return ["pink wool", "diorite"].
console.log(diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])) //  should return [].
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5])) //  should return [4].
console.log(diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4])) //  should return ["piglet", 4].
console.log(diff([], ["snuffleupagus", "cookie monster", "elmo"])) //  should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diff([1, "calf", 3, "piglet"], [7, "filly"])) //  should return [1, "calf", 3, "piglet", 7, "filly"].

