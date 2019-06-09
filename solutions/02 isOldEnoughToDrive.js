//    2   is old enough to drive


/*
Write a function called "isOldEnoughToDrive".
Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.
Notes:
* The legal driving age in the United States is 16.

*/

function isOldEnoughToDrive(age) {
    return age >= 16
}

const isOldEnoughToDrive = age => age >= 16

console.log(isOldEnoughToDrive(15)) // false
console.log(isOldEnoughToDrive(16)) // true