

58 /*
Write a function called "removeFromFront".

Given an array, "removeFromFront" returns the given array with its first element removed.

Notes:
* You should be familiar with the method 'shift'.


*/

function removeFromFront(arr) {
  arr.shift();
  return arr;
}
const removeFromFront = arr => arr.slice(1)

console.log(removeFromFront([1,2,3,4])); // [2,3,4]