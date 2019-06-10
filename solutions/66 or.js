66
/*
Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.

Notes:
* Do not use the || operator.
* Use ! and && operators instead.


*/

function or(expression1, expression2) {
  expression1 === false && expression2 === false ? false : true
}
const or = (expression1, expression2) => expression1 === false && expression2 === false ? false : true

console.log(or(true, false));
console.log(or(false, false));
