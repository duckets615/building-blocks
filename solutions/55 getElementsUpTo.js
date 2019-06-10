// 53 get elements up to 

/*
Write a function called "getElementsUpTo".

Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.

solve with slice, then solve with filter


*/
const getElementsUpTo = (array,n) => array.filter((ele, index) => index < n) 

function getElementsUpTo(array, n) {
    return array.filter((ele, index) => index < n)  
}

const getElementsUpTo = (array,n) => array.slice(0, n) 

function getElementsUpTo(array, n) {
    return array.slice(0,n)
}

console.log(getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)) // ['a','b','c']
  
  