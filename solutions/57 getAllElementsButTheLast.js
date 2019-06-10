//  57  get All Elements But Last

/*
Write a function called "getAllElementsButLast".

Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

*/

function getAllElementsButLast(array) {
  return array.slice(0, array.length - 1)
}

console.log(getAllElementsButLast([1, 2, 3, 4])) // [1,2,3]