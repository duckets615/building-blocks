//  33  is person old enough to drink


/*
Write a function called "isPersonOldEnoughToDrink".
Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.
*/

var obj = {
    age: 45
};
var obj2 = {
    age: 20
};

function isPersonOldEnoughToDrink(person) {
    return person.age >= 21
}

console.log(isPersonOldEnoughToDrinkAndDrive(obj)) // true
console.log(isPersonOldEnoughToDrinkAndDrive(obj2)) // false