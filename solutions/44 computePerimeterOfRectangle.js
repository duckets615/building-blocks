//  48   compute perimeter of rectangle

/*
Write a function called "computePerimeterOfARectangle".
Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.
var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
*/

function computePerimeterOfARectangle(length, width) {
  return length * 2 + width * 2
}

console.log(computePerimeterOfARectangle(5,2)) // 14 
console.log(computePerimeterOfARectangle(10,4)) // 28
