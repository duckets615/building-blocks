/*
Write a function called "addToFrontOfNew".

Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array,
 with the given element added to the front.

Important: It should be a NEW array instance, not the original array instance, 


var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); --> [1, 2]
*/

function addToFrontOfNew(arr, element) {
    arr.slice(0)
    arr.unshift(element)
    return arr;     
  }
  
console.log(addToFrontOfNew([2,3,4,5], 1))
console.log(addToFrontOfNew([1,2], 3))