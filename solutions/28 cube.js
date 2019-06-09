// 28  cube


/*
Write a function called "cube".
Given a number, "cube" returns the cube of that number.
var output = cube(3);
console.log(output); // --> 27
*/

function cube(num) {
  return Math.pow(num,3);
}

function cube(num) {
  return num ** 3
}

function cube(num) {
    return num * num * num;
}

console.log(cube(3)); // 27
console.log(cube(2)); // 8
console.log(cube(7)); // 343

