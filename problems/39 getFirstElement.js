//  39  get first element;

/*
Write a function called "getFirstElement".
Given an array, "getFirstElement" returns the first element of the given array.
Notes:
* If the given array has a length of 0, it should return undefined.
*/

function getFirstElement(array) {
    return array[0];
}

function getFirstElement(array) {
    return array.shift();
}

const getFirstElement = (array) => array[0];

const getFirstElement = (array) => array.shift();

console.log(getFirstElement([1, 2, 3, 4, 5])) // 1
console.log(getFirstElement([12, 53, 14, 35])) // 12

