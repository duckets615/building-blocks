//   11    get length of two words


/*
Write a function called "getLengthOfTwoWords".
Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
*/

const getLengthOfTwoWords = (word1, word2) => word1.length + word2.length;

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length
}
console.log(getLengthOfTwoWords('word', 'computer')) // 12
console.log(getLengthOfTwoWords('coding', 'software')) // 14

////  unknown # of words ////
function getLengthOfTwoWords() {
   return Array.from(arguments).map(word => word.length).reduce((total, value) => total += value);
}

console.log(getLengthOfTwoWords('word', 'computer', 'coding', 'software')) // 26