// 24  is Even Length


/*
Write a function called "isEvenLength".
Given a word, "isEvenLength" returns whether the length of the word is even.
var output = isEvenLength('wow');
console.log(output); // --> false
*/

function isEvenLength(word) {
  return word.length % 2 === 0;
}

console.log(isEvenLength('word')) // true
console.log(isEvenLength('coding')) // true
console.log(isEvenLength('three')) // false