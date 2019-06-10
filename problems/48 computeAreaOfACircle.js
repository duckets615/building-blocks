//  48  compute area of a circle

/*
Write a function called "computeAreaOfACircle".
Given the radius of a circle, "computeAreaOfACircle" returns its area.

Round the answer to a whole number
*/

function computeAreaOfACircle(radius) {
  return Math.round(Math.PI * (radius ** 2))
}
function computeAreaOfACircle(radius) {
  return Math.round(Math.PI * (Math.pow(radius,2)))
}
function computeAreaOfACircle(radius) {
  return Math.round(Math.PI * (radius * radius))
}
const computeAreaOfACircle = radius => Math.round(Math.PI * (radius ** 2))
const computeAreaOfACircle = radius => Math.round(Math.PI * (Math.pow(radius,2)))
const computeAreaOfACircle = radius => Math.round(Math.PI * (radius * radius))

console.log(computeAreaOfACircle(4)) // 50
console.log(computeAreaOfACircle(7)) // 154