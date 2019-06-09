//  132  convert score to grade


/*
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
*/

function convertScoreToGrade(score) {
    if (score > 100 || score < 0) return 'Invalid Score'  
    if (score >= 90) return 'A'
    if (score >= 80) return 'B'
    if (score >= 70) return 'C'
    if (score >= 60) return 'D'
    if (score <= 59) return 'F'  
}

console.log(convertScoreToGrade(99)) // 'A'
console.log(convertScoreToGrade(85)) // 'B'
console.log(convertScoreToGrade(72)) // 'C'
console.log(convertScoreToGrade(58)) // 'F'
console.log(convertScoreToGrade(101)) // 'Invalid Score'






