// 143  Odd without modulo

/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether it is Odd. 

Notes:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(8);
console.log(output); // --> true
*/

function isOddWithoutModulo(num) {
  return num / 2 * 2 !== num
}

console.log(isOddWithoutModulo(8)); // false;
console.log(isOddWithoutModulo(3)); // true;
