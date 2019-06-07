//  84 Valid Credentials

/*
Write a function called "areValidCredentials".

Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the 
password is at least 8 characters long. Otherwise it returns false.

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true
*/

   

function areValidCredentials(name, password) { 
    // code here
}


console.log(areValidCredentials('Tom', '1234567891')) // false
console.log(areValidCredentials('Thomas', '1234567891')) // true
console.log(areValidCredentials('Vicktor', '67891')) // false
console.log(areValidCredentials('Sarah', 'ax876!@214X')) // true