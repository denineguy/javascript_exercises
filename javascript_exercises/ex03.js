/* Create an expression using both Math.random and Math.floor to generate a
random integer between two variables, high and low, where high is greater than low.
*/ 

function getRandom(min, max) { 
  return Math.floor(Math.random() * (max-min+1) + min); 
}  


function getRandom(min, max) { 
  return Math.floor(Math.random() * (max-min+1)) + min; 
}  
