67
/*
Write a function called "isEitherEvenOrAreBoth7".

Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

*/

function isEitherEvenOrAreBoth7(num1, num2) {
   return num1 % 2 === 0 || num2 % 2 === 0 ? true : num1 === 7 && num2 === 7 ? true : false
}
  
function isEitherEvenOrAreBoth7(num1, num2) {
  if (num1 % 2 === 0) return true;
  if (num2 % 2 === 0) return true;
  if (num1 === 7 && num2 === 7) return true;
  return false;
}

const isEitherEvenOrAreBoth7 = (num1, num2) => num1 % 2 === 0 || num2 % 2 === 0 ? true : false


console.log(isEitherEvenOrAreBoth7(3, 7)) // false

console.log(isEitherEvenOrAreBoth7(2, 3)) // true
