65
/*
Write a function called "removeFromBack".

Given an array, "removeFromBack" returns the given array with its last element removed.

Notes:
* solve this two ways, once with pop, once with splice.

*/

function removeFromBack(arr) {
  arr.pop();
  return arr
}
const removeFromBack = arr => {
  arr.pop();
  return arr
}
function removeFromBack(arr) {
  arr.splice(-1,1)
  return arr;
}
function removeFromBack(arr) {
  arr.splice(-1,1)
  return arr;
}
console.log(removeFromBack([1, 2, 3])); //[1,2]