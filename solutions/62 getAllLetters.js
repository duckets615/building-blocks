62
/*
Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word. 

Notes:
* If given an empty string, it should return an empty array.

*/

function getAllLetters(str) {
  return str.split('');
}

const getAllLetters = str => str.split('');

console.log(getAllLetter('Radagast')) // ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
