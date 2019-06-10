//  42  add To Back

/*
Write a function called "addToBack".
Given an array and an element, "addToBack" returns the given array with the given element added to the end.

*/

function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

console.log(addToBack([1, 2], 3)) // [1,2,3];
console.log(addToBack(['a', 'b', 'c'], 'z')) // [a','b','c','z'];