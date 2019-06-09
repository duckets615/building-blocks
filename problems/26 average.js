// 25    average


/*
Write a function called "average".
Given two numbers, "average" returns their average.
*/

/* BONUS - write a function to find the average no matter how many numbers */

// function average(num1, num2) {
//   return (num1 + num2) / 2
// }

// const average = (num1, num2) => (num1 + num2) / 2;

// Bonus
function average() {
    return Array.from(arguments).reduce((total, value) => total += value) / 2
}

console.log(average(10, 2));
console.log(average(20, 10));
console.log(average(5,5));

/////  bonus  /////

console.log(average(20,10,45,7,89,1));
