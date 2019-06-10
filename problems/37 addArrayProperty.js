//   37 add array property


/*
Write a function called "addArrayProperty".
Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.
addArrayProperty(myObj, 'myProperty', myArray);
*/

function addArrayProperty(obj, key, arr) {
   // code here
}

var myObj = {};
var myArray = [1, 3];

console.log(addArrayProperty(myObj, 'myProperty', myArray));
console.log(myObj.myProperty); // --> [1, 3]
