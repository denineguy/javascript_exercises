/*  Write a JavaScript program that accepts a string as input and swap the
case of each character. For example if you input 'The Quick Brown Fox' the output should
be 'tHE qUICK bROWN fOX'. */

var changeCase = function() {
  var newString = [];
  var input = prompt("Please enter a phrase");
  for(var i=0; i < input.length; i++) {
    if(input[i].match(/[A-Z]/)) {
        newString.push(input[i].toLowerCase());
    } else {
        newString.push(input[i].toUpperCase());
    }
  }
  newString = newString.join('');
  return(newString);
}

changeCase();

//Another way to approach it without the prompt function.
var newString = [];
var changeCase = function(input) {
  for(var i=0; i < input.length; i++) {
    if(input[i].match(/[A-Z]/)) {
        newString.push(input[i].toLowerCase());
    } else {
        newString.push(input[i].toUpperCase());
    }
  }
   newString = newString.join('');
  return(newString);
}

changeCase("It is So Hard to Say Goodbye");
