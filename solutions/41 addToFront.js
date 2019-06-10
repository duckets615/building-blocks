//  41  add To Front


/*
Write a function called "addToFront".
Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.
Notes: 

****  do this two ways,  use splice and unshift

*/

function addToFront(arr, element) {
    arr.unshift(element);
    return arr
}

function addToFront(arr, element) {
    arr.splice(0,0, element);
    return arr
}

console.log(addToFront([1, 2], 3)) // [3,1,2];
console.log(addToFront(['a', 'b', 'c'], 'z')) // ['z','a','b','c'];

