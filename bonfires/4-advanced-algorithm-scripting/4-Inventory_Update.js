/*  Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. 

Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

Here are some helpful links:  Global Array Object  */


// Solution #1
function inventory(arr1, arr2) {

    if (!(arr1 || arr2)) {return []}; // In case one of the 2 arrays or both of them do not exist

    var result = arr1; // new array to be modified and to be added arrays from items on arr2 that do not exist on arr1

    // loop through arr1 & arr2 to add items from arr2 to result in case they belong to both arr1 & arr2
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i][1] === arr2[j][1]) {
                result[i][0] += arr2[j][0];
                break;
            }
        }
    }

    // loop through arr2 and result. If the item on arr2 does not exist on result add it.
    for (var k = 0; k < arr2.length; k++) {
        var flag = false;
        for (var l = 0; l < result.length; l++) {
            if (arr2[k][1] === result[l][1]) {
                flag = true;
                break;
            }
        }
        if (!flag) { // if flag is false then the item does not exist on result and is being added
            result.push(arr2[k]);
            flag = false;
        }
    }

    return result.sort(function(a, b) {return a[1] > b[1] ? 1 : -1;}); // sort the result array in alphabetical order. 
}

/* 
Another way of sorting: check http://stackoverflow.com/questions/5435228/sort-an-array-with-arrays-in-it-by-string
function Comparator(a,b){
if (a[1] < b[1]) return -1;
if (a[1] > b[1]) return 1;
return 0;
}
myArray = myArray.sort(Comparator);
*/


console.log(inventory())// should return an array.
console.log(inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length)
// should return an array with a length of 6.
console.log(inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
//  should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
console.log(inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []))
//  should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
console.log(inventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
//  should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
console.log(inventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]))
//  should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].