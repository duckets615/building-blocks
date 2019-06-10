//  56   get all elements but the first

/*
Write a function called "getAllElementsButFirst".

Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

*/

const getAllElementsButFirst = array => array.slice(1)

function getAllElementsButFirst(array) {
  return array.slice(1)
}

const getAllElementsButFirst = array => array.filter((ele,index) => index > 0)

function getAllElementsButFirst(array) {
    return array.filter((ele,index) => index > 0)
}

console.log(getAllElementsButFirst([1, 2, 3, 4])) // [2,3,4]
