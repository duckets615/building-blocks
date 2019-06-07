/*
Write a function called "getLargestNumberAmongMixedElements". 

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

const getLargestNumberAmongMixedElements = arr => arr.length === 0 ? [] : arr.filter(ele => typeof ele === 'number').sort((a,b) => b - a)[0];


function getLargestNumberAmongMixedElements(arr) {
  return  arr.length === 0 ? [] : arr.filter(ele => typeof ele === 'number').sort((a,b) => b - a)[0];
}


console.log(getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]))
