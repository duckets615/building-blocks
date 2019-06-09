//  09 get full name;

/*
Write a function called "getFullName".
Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
*/

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName
}


console.log(getFullName('Joe', 'Smith')) // 'Joe Smith'
console.log(getFullName('Adam', 'Doe')) // 'John Doe'