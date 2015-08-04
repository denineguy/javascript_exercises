/* Write a JavaScript function to remove specified number of characters
from a string. Test Data : console.log(truncate_string("Robin Singh”,4)); "Robi" */

function truncate_string(phrase, number) {
  newPhrase = phrase.slice(0, number);
  console.log(newPhrase);
}

truncate_string('How do you like that', 3);