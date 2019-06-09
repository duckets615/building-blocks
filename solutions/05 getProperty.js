// 05  get property


/*
Write a function called "getProperty".
Given an object and a key, "getProperty" returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.
*/

var obj = {
  key: 'value'
};

function getProperty(obj, key) {
    return obj.key
}

const getProperty = obj => obj.key

console.log(getProperty(obj, 'key')) // value;