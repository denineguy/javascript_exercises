/*  For this challenge you will be determining the factorial for a given number. */

function factorial(n) {
  if(n <= 1) {
    return 1; 
  } else {
    return n * factorial(n-1)
  }
}
