//   138 findShortestWord

/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfThreeWords(word1, word2, word3) {
    let array = [word1, word2, word3];
    return array.sort((a,b) => a.length - b.length)[0]    
}

function findShortestOfThreeWords(word1, word2, word3) { 
    if (word1.length < word2.length && word1.length < word3.length) return word1
    if (word2.length < word3.length && word2.length < word1.length) return word2
    if (word3.length < word2.length && word3.length < word1.length) return word3
}

const findShortestOfThreeWords = (word1, word2, word3) => word1.length < word2.length ? word1.length < word3.length ? word1 : word3 : word2.length < word3.length ? word2 : word3

console.log(findShortestOfThreeWords('a', 'two', 'three')); // a
console.log(findShortestOfThreeWords('code', 'bootcamp', 'pre')); // three

