/*
  86  find Min Length Of Three Words

Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/


const findMinLengthOfThreeWords = (word1, word2, word3) => Array.from(arguments).map(ele => ele.length).sort((a,b) => a - b)[0]

function findMinLengthOfThreeWords(word1, word2, word3) {
  let short = null;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length < short || short === null) short = arguments[i].length;
  }
  return short;
}

function findMinLengthOfThreeWords(word1, word2, word3) {
  return array = [word1,word2,word3].map(ele => ele.length).sort((a,b) => a - b)[0]; 
}

console.log(findMinLengthOfThreeWords('computer', 'mac', 'laptop')) // 3
console.log(findMinLengthOfThreeWords('aaaaaaaaaa', 'bbb', 'c')) // 3

