//  12   is greater than ten


/*
Write a function called "isGreaterThanTen".
Given a number, "isGreaterThanTen" returns whether it is greater than 10.

*/

function isGreaterThanTen(num) {
  return num > 10;
}

const isGreaterThanTen = num => num > 10;

console.log(isGreaterThanTen(11)) // true
console.log(isGreaterThanTen(10)) // false