 /* Define a function sum() and a function multiply() that sums and multiplies
(respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should
return 10, and multiply([1,2,3,4]) should return 24. */

var numberArray = [1,2,3,4];
var sumNumber = 0;

function sum(arr) {
  for(var i = 0; i < arr.length; i++) {
    sumNumber += arr[i];
  }
  console.log(sumNumber);
}

var numberArray = [1,2,3,4];
var multNumber = 1;

function multiply(arr) {
  for(var i = 0; i < arr.length; i++) {
    multNumber *= arr[i];
  }
  console.log(multNumber);
}