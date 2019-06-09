// 30 compute average length of words


/*
Write a function called "computeAverageLengthOfWords".
Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
*/

function computeAverageLengthOfWords(word1, word2) {
    return Array.from(arguments).map(ele => ele.length).reduce((total, value) => total += value) / 2
}

function computeAverageLengthOfWords(word1, word2) {
    return (word1.length + word2.length) / 2
}


console.log(computeAverageLengthOfWords('lambda', 'school')); // 6
console.log(computeAverageLengthOfWords('computer', 'developments')); // 10

