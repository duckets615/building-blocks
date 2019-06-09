// 23 isOddLength

/*
Write a function called "isOddLength".
Given a word, "isOddLength" returns whether the length of the given word is odd.
var output = isOddLength('special');
console.log(output); // --> true
*/

function isOddLength(word) {
    return word.length % 2 !== 0;
  }

  console.log(isOddLength('word')) // false
  console.log(isOddLength('code')) // false
  console.log(isOddLength('three')) // true