/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string (""). 
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

function getLongestWordOfMixedElements(arr) {
  return arr.filter(ele => typeof ele === 'string').map(ele => ele = ele.toString()).sort((a,b) => a.length + b.length)[0]
}

console.log(getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]))
