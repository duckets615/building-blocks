//    135   compute Factorial Of N
/*
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24
*/

function computeFactorialOfN(n) {
    let factorial = 1
  for (let i = 1; i <= n; i++) {
    factorial = i * factorial
  }  
  return factorial
};

function computeFactorialOfN(n) {
  return n === 0 ? 1 : n * computeFactorialOfN(n-1)  
};

console.log(computeFactorialOfN(3)) // 6
console.log(computeFactorialOfN(4)) // 24
console.log(computeFactorialOfN(6)) // 720
