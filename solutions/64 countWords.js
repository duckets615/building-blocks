64
/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its 
value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.


*/

function countWords(str) {
  let obj = {};
  if (str.length === 0) return {};
  let ar = str.split(' ');
  for (let i = 0; i < ar.length; i++) {
    if (!obj[ar[i]]) {
      obj[ar[i]] = 1
    } else {
      obj[ar[i]]++;
    }
  }
  return obj
}

console.log(countWords('ask a bunch get a bunch')) // {ask: 1, a: 2, bunch: 2, get: 1}