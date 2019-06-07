//  77  remove number values

/*
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
*/

function removeNumberValues(obj) {
  for (var k in obj) {
      if (typeof obj[k] === 'number') delete obj[k];
  }
  return obj;
}

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
}; 

console.log(removeNumberValues(obj)); // {b: "remaining"};
