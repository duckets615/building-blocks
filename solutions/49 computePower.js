// 49  compute power

/*
Write a function called "computePower".
Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 

*/

function computePower(num, exponent) {
  return num ** exponent;
}
function computePower(num, exponent) {
  return Math.pow(num,exponent);
}

const computePower = (num, exponent) => num ** exponent
const computePower = (num, exponent) => num ** exponent

console.log(computePower(2,3)) // 8
console.log(computePower(4,5)) // 1024