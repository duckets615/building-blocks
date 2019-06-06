//64
// function countWords(str) {
//   // your code here
//   /* START SOLUTION */
//   var object = {};
//   if (!str) {return object}
//   else {array = str.split(' ');}
  
//   for (var i = 0; i<array.length; i++){
//     var word = array[i];
//     if (object[word]){
//       object[word]++
//     } else {
//       object[word] = 1;
//     }
//   }
//   return object;
//   /* END SOLUTION */
// }

// countWords('ask a bunch get a a a a a a a a bunch'); 




//66
// function or(expression1, expression2) {
//   // your code here
//   /* START SOLUTION */
//   return !(!expression1 === true && !expression2 === true);
//   /* END SOLUTION */
// }

// or(false, true)




//68
// function isEitherEvenAndLessThan9(num1, num2) {
//   // your code here
//   /* START SOLUTION */
//   if ((num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9)){
//     return true;
//   } else {
//     return false;
//   }
//   /* END SOLUTION */
// }




//69
// function extend(obj1, obj2) {
//   // your code here
//   /* START SOLUTION */
//   for (var key in obj1) {
//     for (var kee in obj2) {
//       if (key === kee){
//         console.log(kee);
//       }
//     }
//     obj1[kee] = obj2[kee];
//   }
//   return obj1;
//   /* END SOLUTION */
// }

// var obj1 = {
//   a: 1,
//   b: 2
// };
// var obj2 = {
//   b: 4,
//   c: 3
// };

// extend(obj1, obj2);




//73
// function removeOddValues(obj) {
//   // your code here
//   /* START SOLUTION */
//   for (var key in obj){
//     if (obj[key] % 2 === 0){
//       delete obj[key];
//     }
//   }
//   return obj;
//   /* END SOLUTION */
// }

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeOddValues(obj);
// console.log(obj); // --> { a: 2, c: 4 }




//74
// function removeEvenValues(num, obj) {
//   // your code here
//   /* START SOLUTION */
//   for (var key in obj) {
//     if (obj[key] % 2 === 0){
      
//     }
//   }
//   return obj;
//   /* END SOLUTION */
// }

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeEvenValues(obj);
// console.log(obj); // --> { b: 3 }




//79
// function convertDoubleSpaceToSingle(str) {
//   // your code here
//   /* START SOLUTION */
//   return str.split('  ').join(' ');
//   /* END SOLUTION */
// }

// var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"




//81
// function addToFrontOfNew(arr, element) {
//   // your code here
//   /* START SOLUTION */
// return [element, ...arr];
// // or return [element].concat(arr);
//   /* END SOLUTION */
// }

// var input = [1, 2];
// var output = addToFrontOfNew(input, 3);
// console.log(output);
// console.log(input);


// function findMaxLengthOfThreeWords(word1, word2, word3) {
//   // your code here
//   /* START SOLUTION */
//   var array = [word1.length, word2.length, word3.length]
//   return array.sort[array.length-1];
//   /* END SOLUTION */
// }



//88 review it




//89
// function select(arr, obj) {
//   var finalObject = {};
//   for (var i=0; i<arr.length; i++){
//     var eachLetter = arr[i];
    
//     for (var key in obj){
//       var value = obj[key];
      
//       if (key === eachLetter){
//         finalObject[key] = value;
//       }
//     }
//   }
//   return finalObject;
// }

// var arr = ['a', 'c', 'e'];
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// var output = select(arr, obj);
// console.log(output);




//90 com back review
// function getElementsLessThan100AtProperty(obj, key) {
//   // your code here
//   /* START SOLUTION */
//   var array = [];
//   var value = obj[key];
//   if (Array.isArray(value)){
//     for (var i = 0; i < value.length; i++){
//       if (value[i] < 100){
//         array.push(value[i]);
//       }
//     }
//   }
//   return array;
//   /* END SOLUTION */
// }

// var obj = {
//   key: [1000, 20, 50, 500]
// };

// getElementsLessThan100AtProperty(obj, 'key');




//92
// function getElementsGreaterThan10AtProperty(obj, key) {
//   // your code here
//   /* START SOLUTION */
//   var array = [];
//   if (Array.isArray(obj[key])){
//     obj[key].forEach(value => {
//       if (value > 10){
//         array.push(value);
//       }
//     });
//   }
//   return array;
//   /* END SOLUTION */
// }




//93
// function removeElement(array, discarder) {
//   var finalArray = [];
//   array.filter(element => {
//     if (element !== discarder){
//       finalArray.push(element);
//     }
//   });
//   return finalArray;
// }




//98
// function getOddLengthWordsAtProperty(obj, key) {
//   var newArray = [];
//   if (Array.isArray(obj[key])){
//     for (var i = 0; i < obj[key].length; i++){
//       var element = obj[key][i];
//       if(element.length % 2 !== 0){
//         newArray.push(element);
//       }
//     }
//   }
//   return newArray;
// }

// var obj = {
//       array: ["It", "is", "gone", 'rebel']
// };

// var output = getOddLengthWordsAtProperty(obj, 'array');
// console.log(output);




//99
// function computeAverageOfNumbers(nums) {
//   var avg = 0;
//   if(nums.length){
//     nums.map(element => avg+= element);
//     return avg/nums.length;
//   }
//   return avg;
// }

// var input = [1,2,3,4,5];
// var output = computeAverageOfNumbers(input);
// console.log(output);




//100
// function computeAverageOfNumbers(nums) {
//   if(!nums.length) {
//     return 0;
//   }
//   return nums.reduce((a,b) => a + b ,0) / nums.length;
// }

// function getAverageOfElementsAtProperty(obj, key) {
//   if (Array.isArray(obj[key]) && obj[key].length){
//     return obj[key].reduce((a,b) => a + b, 0)/ obj[key].length;
//   }
//   return 0;
// }




//101
// function getEvenLengthWordsAtProperty(obj, key) {
//   var array = [];
//   if (Array.isArray(obj[key])){
//     array = obj[key].filter(element => element.length % 2 === 0);
//   }
//   return array;
// }




//103
// function getSquaredElementsAtProperty(obj, key) {
//   // your code here
//   /* START SOLUTION */
//   if (Array.isArray(obj[key]) && obj[key].length){
//     return obj[key].map(num => num*num);
//   }
//   return [];
//   /* END SOLUTION */
// }

// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSquaredElementsAtProperty(obj, 'key');
// console.log(output); // --> [4, 1, 25]




//108
// function getSmallestElementAtProperty(obj, key) {
//   // your code here
//   /* START SOLUTION */
//   if (Array.isArray(obj[key]) && obj[key].length){
//     var smallest = obj[key][0];
//     for (var i = 0; i < obj[key].length; i++){
//       if(obj[key][i] < smallest){
//         smallest = obj[key][i];
//       }
//     }
//   }
//   return smallest;
// }


// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSmallestElementAtProperty(obj, 'key');
// console.log(output); // --> 1




//112
// function squareElements(arr) {
//   // your code here
//   return arr.map(num => num*num);
// }
//var output = squareElements([1, 2, 3]); 
//console.log(output); // --> [1, 4, 9]



// function computeProductOfAllElements(arr) {
//   // your code here
//   var product = 1;
//   if (arr.length > 1){}{
//     for (var i=0; i<arr.length; i++){
//       product *= arr[i];
//   }
//   return product;
//   }
// }


// function computeProductOfAllElements(arr) {
//   // your code here
//   var res = 0;
//   if (arr.length) {
//     res = 1;
//     arr.forEach( num => res*=num )
//   }
//   return res;
  
// }

// var output = computeProductOfAllElements([1,2,3,4]);
// console.log(output);


// function getLengthOfShortestElement(arr) {
//   // your code here
//   if (arr.length < 1) return 0 ;
  
//   return arr.map(num => num.length).sort()[0];
// }



//117
// function getLongestElement(arr) {
//   // your code here
//   if (arr.length){
//     var longest = arr[0];
//     for (var i=0; i<arr.length; i++){
//       if (arr[i].length > longest.length){
//         longest = arr[i];
//       }
//     }
//     return longest;
//   }
//   return [];
// }




//118
// function findSmallestElement(arr) {
//   if (arr.length){
//     var smallest = arr[0];
//     arr.filter(num => {
//       if(num < smallest){
//         smallest = num;
//       }
//     })
//     return smallest;
//   }
//   return 0;
// }

// // or the classic case of sort smallest
// function findSmallestElement(arr) {
//   // your code here
//   if (arr.length){
//     return arr.sort(function(a, b){
//       return a - b;
//     })[0];
//   }
//   return 0;
// }

// findSmallestElement([-1,1])




//119
// function findShortestElement(arr) {
//   // your code here
//   return arr.sort(function(a, b){
//     return a.length-b.length;
//   })[0];
// }

// findShortestElement(['hi', 'y', 'n']);




//120
// function getLargestElement(arr) {
//   // your code here
//   if(array.length){
//     return arr.sort(function(a, b){
//       return b - a;
//     })[0];
//   }
// }




//121
// function computeSumOfAllElements(arr) {
//   // your code here
//   return arr.reduce((a,b) => a+b, 0);
// }




//123
// function getStringLength(string) {
//   // your code here
//   if (string) {
//     return 1 + getStringLength(string.slice(1));
//   }
//   else {
//     return 0;
//   }
// }

// getStringLength('yona');




//125
// function joinArrayOfArrays(arr) {
//   // your code here
//   var result = [];
//   //base case
//   if (!arr.length){
//     return result;
//   }
//   //recursive
//   return result.concat(arr[0], joinArrayOfArrays(arr.slice(1)));
// }

// joinArrayOfArrays([1,[2,[3,6]],4])




//126
// function getProductOfAllElementsAtProperty(obj, key) {
//   // your code here
//   if (Array.isArray(obj[key]) && obj[key].length){
//     var times = 1;
//     obj[key].forEach(num => times*=num);
//     return times;
//   }
//   return 0;
// }
// //or
// function getProductOfAllElementsAtProperty(obj, key) {
//   // your code here
//   var times = 0;
//   if (Array.isArray(obj[key]) && obj[key].length) {
//     times = obj[key].reduce((prev,curr) => prev*curr); 
//   }
//   return times;
// }
// var obj = {
//   key: [1, 2, 3, 4]
// };
// var output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24f




//126
// function sumDigits(num) {
//   // your code here
//   counter = 0;
//   var numArray = num.toString().split('');
//   for (var i = 0; i < numArray.length; i++){
//       if (numArray[i] === '-'){
//         counter-= Number(numArray[i+1]);
//         numArray.splice(0,1);
//       } else {
//         counter+= Number(numArray[i]);
//       }
//   }
//   return counter;
//   //console.log(Number('-' + '3'))
// }

// var output = sumDigits(-316);
// console.log(output); // --> 4




//127
// function getSumOfAllElementsAtProperty(obj, key) {
//   // your code here
//   if(Array.isArray(obj[key]) && obj[key].length){
//     return obj[key].reduce((a,b) => a + b, 0);
//   }
//   return 0;
// }




//128
// function findShortestWordAmongMixedElements(arr) {
//   // your code here
//   var stringArr = [];
  
//   if (arr.length){
//     for (var i = 0; i < arr.length; i++){
//       if (typeof arr[i] !== 'number'){
//         stringArr.push(arr[i]);
//       }
//     }
    
//     if (stringArr.length){
//       var smallest = stringArr[0].length;
//         for (var j = 0; j < stringArr.length; j++){
//         if (stringArr[j].length < smallest){
//           smallest = stringArr[j].length;
//           return stringArr[j];
//         }
//       }
//     } else {
//       return '';
//     }
//   } else {
//     return '';
//   }
// }

// //or

// function findShortestWordAmongMixedElements(arr){
//   if (!arr.length){ 
//     return '';
//   }
//   var stringArray = arr.filter(element => typeof element === 'string');
//   if (!stringArray){
//     return '';
//   } else {
//     return stringArray.sort((a,b) => a.length - b.length)[0];
//   }
// }
// findShortestWordAmongMixedElements([4, 'two', 2, 'three', 'i']);
// findShortestWordAmongMixedElements([1, 2, 4])




//130
// function getLongestWordOfMixedElements(arr) {
//   // your code here
//   if(!arr.length){
//     return '';
//   }
//   var stringArray = arr.filter(element => typeof element === 'string');
//   if (!stringArray.length){
//     return '';
//   } else {
//     return stringArray.sort((a,b) => b.length - a.length)[0];
//   }
// }

// var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 'word'




//129
// function findSmallestNumberAmongMixedElements(arr) {
//   // your code here
//   if (!arr.length){
//     return 0;
//   }
//   var numArray = arr.filter(element => typeof element === 'number');
//   if(!numArray.length){
//     return 0;
//   } else {
//     return numArray.sort((a,b) => a-b)[0];
//   }
// }

// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4




//130
// function findSmallestNumberAmongMixedElements(arr) {
//   let result = 0;
//   if(arr.length>0){
//     arr.forEach((e) => {
//       if(typeof e === 'number'){
//         if(!result){
//           result = e;
//         } else if(e<result){
//           result = e;
//         }
//       }
//     })
//   }
//   return result;
// }




//131
// function getLargestNumberAmongMixedElements(arr) {
//   // your code here
//   if (!arr.length){
//     return 0;
//   }
//   var numArray = arr.filter(element => typeof element === 'number');
//   if (!numArray.length){
//     return 0;
//   } else {
//     return numArray.sort((a,b) => b - a)[0];
//   }
// }

// getLargestNumberAmongMixedElements(["word"]);




//132
// function computeSummationToN(n) {
//   // your code here
//   //base case
//   if (n === 0){
//     return 0;
//   }
//   //recursive
//   return n + computeSummationToN(n - 1);
// }




//135
// function computeFactorialOfN(n) {
//   // your code here
//   var product = 1;
//   //base case
//   if (n === 1){
//     return product;
//   }
//   //recursive
//   return product*= n * computeFactorialOfN(n-1);
// }

// computeFactorialOfN(5);




//136
// function repeatString(string, num) {
//   return string.repeat(num);
// }

// //or 

// function repeatString(string, num) {
//   // your code here
//   var repeat = '';
//   //base case
//   if (num === 0){
//     return repeat;
//   }
//   //recursive
//   return repeat+= string + repeatString(string, num-1);
// }

// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'




//140 com bak
// function modulo(num1, num2) {
//   // your code here
//   return num1 - Math.floor(num1/num2) * num2;
// }

// modulo(-4, 3); // -1




//141
// function multiply(num1, num2) {
//   // your code here
//   var product = 0;
//   //base case
//   if (num2 < 0){
//     num2 = -(num2);
//     num1 = -(num1);
//   }
  
//   if (num2 === 0){
//     if (num1 < 0 || num2 < 0){
//       return -(product);
//     } else {
//       return product;
//     }
//   }
  
//   //recursive
//   return product+= num1 + multiply(num1, num2-1);
// }
// multiply(-6, -8)




//142
// function isOddWithoutModulo(num) {
//   if (num < 0) {
//     num = -(num);
//   }
  
//   var array = (num/2).toString().split('');
//   if (array.length > 2){
//     return true;
//   } else {
//     return false;
//   }
// }

// //or

// function isOddWithoutModulo(num) {
//   return Number.isInteger(num / 2) === false;
// }

// isOddWithoutModulo(-40);




//143
// function isEvenWithoutModulo(num) {
//   // your code here
//   return Number.isInteger(num / 2);
// }

// isEvenWithoutModulo(11);




//144
// function multiplyBetween(num1, num2) {
//   // your code here
//   if (num2 <= num1) {
//     return 0;
//   }
  
//   var arrayNum = [];
//   var product = 1;
//   for (var i = num1; i < num2; i++){
//     product*= i;
//   }
//   return product;
// }

// var output = multiplyBetween(2, 5); console.log(output); // --> 24




//147
// var object = {};
// function fromListToObject(array) {
//   // your code here
//   //base case
//   if (!array.length){
//     return object;
//   }
//   //recursive?
//   object[array[0][0]] = array[0][1];
//   return fromListToObject(array.slice(1));
// }

// fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);




// 149
// function getAllKeys(obj) {
//   var array = [];
//   // your code here
//   for (var key in obj) {
//     array.push(key);
//   }
//   return array;
// }
// getAllKeys({ name : 'Sam', age : 25, hasPets : true });

// //or 

// function getAllKeys(obj) {
//   return Object.getOwnPropertyNames(obj);
// }




//152
// var customerData = {
//   'Joe': {
//     visits: 1
//   },
//   'Carol': {
//     visits: 2
//   },
//   'Howard': {
//     visits: 3,
//   },
//   'Carrie': {
//     visits: 4
//   }
// };

// function greetCustomer(firstName) {
//   // your code here
//   for (var key in customerData){
//     if (key === firstName){
//       if (customerData[key]['visits'] > 1){
//         return 'Welcome back, ' + firstName + '! So glad to see you again!';
//       } else {
//         return 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!'
//       }
//     }
//   }
//   return 'Welcome! Is this your first time?'
// }

// customerData['Macklemore'] = {
//       visits: 3
// };

// greetCustomer('Macklemore');























