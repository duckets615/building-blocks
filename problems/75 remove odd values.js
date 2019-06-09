//  75 Remove Odd Values      tags: object, iteration, delete, dataTypes

/*
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
*/

function removeOddValues(obj) {
    for (var k in obj) {
        if (obj[k] % 2 !== 0) delete obj[k];
    }
    return obj;
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};

console.log(removeOddValues(obj));

  