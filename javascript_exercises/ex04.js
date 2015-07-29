/* Problem number 4 -  Write a function named evaluateExpression(), that takes three arguments: two
operands and an operator, and returns the number that results from applying the
operator to the operands. For example: evaluateExpression(5, 7, ‘+’). */

var mathExpression = function(numberone, numbertwo, operator){
  switch(operator){
    case '+':
      return numberone + numbertwo;
      break;
    case '-':
      return numberone - numbertwo;
      break;
    case '/':
      return numberone / numbertwo;
      break;
    case '*':
      return numberone * numbertwo;
      break;
  }
};

mathExpression(5,6,'*');
