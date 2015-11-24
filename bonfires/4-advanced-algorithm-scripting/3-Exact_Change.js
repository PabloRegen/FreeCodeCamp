/*  Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Here are some helpful links:  Global Object  */


// Solution #1
function drawer(price, cash, cid) {
  var vuelto = []; // Empty array to fill with coin and bills arrays
  var currency = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100]; // array contains values for each bill and coin
  var changeDue = cash - price; // change due to customer
  var cidTotal = 0; // initializing counter for total money on drawer according to cid

  // find out total money on drawer by looping through cid
  for (var j = 0; j < cid.length; j++) {cidTotal += cid[j][1];}
  cidTotal = +cidTotal.toFixed(2); // forcing to 2 decimals for total money on drawer

  if (changeDue > cidTotal) {return "Insufficient Funds";} // Case 1: When there's not enough money on drawer to pay change due to customer

  if (changeDue === cidTotal) {return "Closed";}           // Case 2: When there's just enough money on drawer to pay change due to customer

  for (var i = currency.length -1; i >= 0; i--) {          // Case 3: When there's enough money on drawer to pay change due to customer
    if (changeDue > currency[i] && cid[i][1] > 0) {
  	  if (changeDue >= cid[i][1]) {
  	    changeDue = +(changeDue - cid[i][1]).toFixed(2);
  	    vuelto.push([cid[i][0], cid[i][1]]);
  	  } else { 
  	    cid[i][1] = +(Math.floor(changeDue / currency[i]) * currency[i]).toFixed(2);
  	    changeDue = +(changeDue - Math.floor(changeDue / currency[i]) * currency[i]).toFixed(2);
  	    vuelto.push([cid[i][0], cid[i][1]]);
  	  }
    }
  }
  return changeDue === 0 ? vuelto : "Insufficient Funds";
}



console.log(drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))
// should return an array.
console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// should return a string.
console.log(drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// should return a string.
console.log(drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))
// should return [["QUARTER", 0.50]].
console.log(drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))
// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// should return "Insufficient Funds". 
console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// should return "Insufficient Funds".
console.log(drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// should return "Closed".