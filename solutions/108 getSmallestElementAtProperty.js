/*
Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined. 
* If there is no property at the key, it should return undefined.
*/

function getSmallestElementAtProperty(obj, key) {
    if (!Array.isArray(obj.key) || obj.key === []) return undefined;     
    return Math.min(...obj[key])  
}

function getSmallestElementAtProperty(obj, key) {
    if (!Array.isArray(obj.key)) return undefined; 
    if (obj.key === []) return undefined;     
    return Math.min(...obj[key])  
}

const getSmallestElementAtProperty = obj => Array.isArray(!obj.key) || obj.key === [] ? undefined : obj.key.sort((a,b) => a - b)[0]

var obj = {
  key: [2, 1, 5]
};
console.log(getSmallestElementAtProperty(obj, obj.key));

  