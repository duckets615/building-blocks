//  16   is greater than


/*
Write a function called "isGreaterThan".
Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

*/

function isGreaterThan(num1, num2) {
  return num2 > num1
}

const isGreaterThan = (num1, num2) => num2 > num1;

console.log(isGreaterThan(10,15)) // true
console.log(isGreaterThan(10,9)) // false
