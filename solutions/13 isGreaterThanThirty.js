//  13  is greater than 30


/*
Write a function called "isLessThan30".
Given a number, "isLessThan30" returns whether the given number is less than 30.

*/

function isLessThan30(num) {
  return num > 30
}

const isLessThan30 = num => num > 30;

console.log(isLessThan30(30)) // false
console.log(isLessThan30(31)) // true