61
/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

*/
const countCharacter = str => str.split('').filter(letter => letter === char).length

function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++
  }
  return count;
}

function countCharacter(str, char) {
  return str.split('').filter(letter => letter === char).length
}


console.log(countCharacter('I am a hacker', 'a')); // 3