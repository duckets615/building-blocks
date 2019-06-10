//  54  get elements after

/*
Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.
 
Solve two ways, one with slice, one with filter

*/

const getElementsAfter = (array,n) => array.filter((ele, index) => index > n)

function getElementsAfter(array, n) {
    return array.filter((ele, index) => index > n)
}

const getElementsAfter = (array,n) => array.slice(n+1);

function getElementsAfter(array, n) {
    return array.slice(n+1);
}

console.log(getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2)) // ['d','e']
