

59 
/*
Write a function called "removeFromBackOfNew".

Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.

*/

function removeFromBackOfNew(arr) {
  return arr.slice(0, arr.length - 1);  
}

console.log(removeFromBackOfNew([1,2,3,4])); // [1,2,3]