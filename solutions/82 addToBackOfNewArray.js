//   82 add to back new array

/*
Write a function called "addToBackNew".

Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
*/

function addToBackOfNew(arr, element) {
    let ar = arr.slice(0)
    ar.push(element);
    return ar  
  }

console.log(addToBackOfNew([1,2], 3)) // [1,2,3];
  
  