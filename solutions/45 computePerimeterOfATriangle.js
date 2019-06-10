//  45   compute Perimeter of a triangle


/*
Write a function called "computePerimeterOfATriangle".
Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter.

*/

const computePerimeterOfATriangle = (side1,side2,side3) => side1 + side2 + side3

function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3
}

function computePerimeterOfATriangle(side1, side2, side3) {
    return Array.from(arguments).reduce((total, value) => total += value);
}

console.log(computePerimeterOfATriangle(6,4,10)) // 20
