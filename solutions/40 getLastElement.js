// 40  get last element

/*
Write a function called "getLastElement".
Given an array, "getLastElement" returns the last element of the given array.
Notes:
* If the given array has a length of 0, it should return 'undefined'.

*/

const getLastElement = array => array.length === 0 ? undefined : array.pop();
const getLastElement = array => array.length === 0 ? undefined : array[array.length - 1]

function getLastElement(array) {
  return array.length === 0 ? undefined : array[array.length - 1]
}
function getLastElement(array) {
  if (array.length === 0) {
      return undefined;
  } else {
      return array.pop()
    }
}

console.log(getLastElement([1, 2, 3, 4, 5])) // 5
console.log(getLastElement([12, 53, 14, 35])) // 35