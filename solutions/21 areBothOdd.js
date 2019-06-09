//  21  are both odd


/*
Write a function called "areBothOdd".
Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

*/
const areBothOdd = (num1, num2) => num1 % 2 !== 0 && num2 % 2 !== 0

function areBothOdd(num1, num2) {
    return num1 % 2 !== 0 && num2 % 2 !== 0
}

function areBothOdd(num1, num2) {
    return num1 % 2 !== 0 && num2 % 2 !== 0 ? true : false
}



console.log(areBothOdd(7,9));// true
console.log(areBothOdd(3,6));// false