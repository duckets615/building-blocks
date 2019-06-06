// 143  even without modulo

/*
Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even. 

Notes:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/

function isEvenWithoutModulo(num) {
  return num / 2 * 2 === num
}

console.log(isEvenWithoutModulo(8)); // true
console.log(isEvenWithoutModulo(3)); // even
