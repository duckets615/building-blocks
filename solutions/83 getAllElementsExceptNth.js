//  83 get all elements except Nth

/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

*/

function getAllElementsButNth(array, n) {
    array.splice(n,1);
    return array
}

console.log(getAllElementsButNth(['a', 'b', 'c'], 1)); // --> ['a', 'c']
console.log(getAllElementsButNth(['cat', 'dog', 'bird', 'fish'], 1)); // --> [cat', 'bird', 'fish']
console.log(getAllElementsButNth(['a', 'b', 'c', 'e','f'], 4)); // --> ['a','b', 'c', 'e']
  