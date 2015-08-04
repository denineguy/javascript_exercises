/* Using the JavaScript language, have the function FirstReverse(str) take the 
str parameter being passed and return the string in reversed order. Use the 
Parameter Testing feature in the box below to test your code with different 
arguments. */

function FirstReverse(str) {
  var arr = str.split("");
  var newArray = [];
  var newString;
  for(var i = 1; i <= arr.length; i++) {
    newArray.push(arr[arr.length - i]);
    newString = newArray.join("");
  }
  return newString;
}

FirstReverse('hello');