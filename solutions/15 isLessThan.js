//  15   is less than


/*
Write a function called "isLessThan".
Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

*/

function isLessThan(num1, num2) {
  return num2 < num1
}

const isLessThan = (num1, num2) => num2 < num1
 
console.log(isLessThan(10, 8)); // true
console.log(isLessThan(52, 64)); // false
console.log(isLessThan(5, 5)); // false


