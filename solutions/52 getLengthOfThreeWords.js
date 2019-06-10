//  52   get length of three words


/*
Write a function called "getLengthOfThreeWords".
Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.

*/
function getLengthOfThreeWords(word1, word2, word3) {
    return Array.from(arguments).map(word => word.length).reduce((total, value) => total += value);
}

function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length
}

const getLengthOfThreeWords = (word1, word2, word3) => word1 + word2 + word3

console.log(getLengthOfThreeWords('some', 'other', 'words')) // 14
console.log(getLengthOfThreeWords('web', 'developer', 'computer')) // 20