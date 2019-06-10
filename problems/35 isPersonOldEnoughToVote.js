//  35  is person old enough to vote


/*
Write a function called "isPersonOldEnoughToVote".
Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.
Notes:
* The legal voting age in the United States is 18.
*/

var obj1 = {
  age: 19
};
var obj2 = {
  age: 17
};


function isPersonOldEnoughToVote(person) {
  // code here
}

clog(isPersonOldEnoughToVote(obj1)) // true
clog(isPersonOldEnoughToVote(obj2)) // false