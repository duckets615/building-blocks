//  38   get nth element



/*
Write a function called "getNthElement".
Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
Notes:
* If the array has a length of 0, it should return 'undefined'.
*/

function getNthElement(array, n) {
    return array[n];
}

const getNthElement = (array, n) => array[n];

function getNthElement(array,n) {
    for (let i = 0; i < array.length; i++) {
        if (i === n) return array[i]
    }
}

console.log(getNthElement([1, 3, 5], 1)) // 3
console.log(getNthElement([1, 3, 5, 7, 3, 4], 3)) // 7
