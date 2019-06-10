// 53  joinArrays


/*
Write a function called "joinArrays".
Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2". 
You should be familiar with the "concat" method for this problem.
*/

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}


console.log(joinArrays([1, 2], [3, 4])) // [1,2,3,4]
