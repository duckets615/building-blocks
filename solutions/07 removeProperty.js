//  07   remove property


/*
Write a function called "removeProperty".
Given an object and a key, "removeProperty" removes the given key from the given object.

*/

var obj = {
    name: 'Sam',
    age: 20
}

function removeProperty(obj, key) {
    delete obj[key]
    return obj
  }

const removeProperty = obj => delete obj['name']

console.log(removeProperty(obj, 'name'));
