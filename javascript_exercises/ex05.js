/*  Write a JavaScript program that accepts a number as userInput and insert
dashes (-) between each two even numbers. For example if you accept 025468 the output
should be 0-254-6-8. */

var insertDashes = function() {
  var userInput = prompt('Please enter a number that is at least 5 digits long');
  var dashedNumber = []; 
  var numToString = userInput.toString(); 
  for(var i = 0; i < numToString.length; i++) {  
    if(numToString[i] % 2 === 0 && numToString[i+1] % 2 === 0) { 
      dashedNumber.push(numToString[i] + '-'); 
    } else { 
      dashedNumber.push(numToString[i]); 
    } 
  } 
  dashedNumber = dashedNumber.join(''); 
  return(dashedNumber); 
}

insertDashes();


//Try to refactor or think of an easier way//