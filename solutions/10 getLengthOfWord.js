//  10  get length of word


/*
Write a function called "getLengthOfWord".
Given a word, "getLengthOfWord" returns the length of the given word.
*/

const getLengthOfWord = word => word.length;

function getLengthOfWord(word) {
 return word.length;   
}

function getLengthOfWord(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        count++
    }
    return count;
}


console.log(getLengthOfWord('some'))  // 4
console.log(getLengthOfWord('coding'))  // 6
console.log(getLengthOfWord('Thermal'))  // 7