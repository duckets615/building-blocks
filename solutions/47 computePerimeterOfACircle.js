//  47  compute perimeter of a circle

/*
Write a function called "computePerimeterOfACircle".
Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.

use a Math.object method pi to find the perimeter and round to return a whole number

*/

function computePerimeterOfACircle(radius) {
   return Math.round(2 * Math.PI * radius)
}

console.log(computePerimeterOfACircle(4)) // 25
console.log(computePerimeterOfACircle(7)) // 44