// 29 square


/*
Write a function called "square".
Given a number, "square" should return the square of the given number.
var output = square(5);
console.log(output); // --> 25
*/

function square(num) {
  return num * num
}

function square(num) {
    return Math.pow(num,2)
}

const square = num => num ** 2

console.log(square(5)); // 25
console.log(square(10)); // 100
console.log(square(3));  // 9
