// 06   add property

/*
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

*/

function addProperty(obj, key) {
    obj[key] = true;    
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // true