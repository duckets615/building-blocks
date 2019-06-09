//   137    get Longest Of Three Words
/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.
*/

function getLongestOfThreeWords(word1, word2, word3) {
    return Array.from(arguments).sort((a,b) => a.length - b.length)[0]    
}

function getLongestOfThreeWords(word1, word2, word3) {
    return word1.length >= word2.length ? word1.length >= word3.length ? word1 : word3 : word2.length >= word3.length ? word2 : word3 
}

function getLongestOfThreeWords(word1, word2, word3) {
    if (word1.length >= word2.length && word1.length >= word3.length) return word1
    if (word2.length >= word1.length && word2.length >= word3.length) return word2
    if (word3.length >= word2.length && word3.length >= word1.length) return word3
}

console.log(getLongestOfThreeWords('these', 'three', 'words')) // these

