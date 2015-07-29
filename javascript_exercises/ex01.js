/* Write a function findLongestWord() that takes an array of words and returns
the length of the longest word. */

var arrayOfWords = ['apple', 'orange', 'strawberry', 'blueberries', 'banana'];
var wordLength = 0;
var longestWord;

var findLongestWord = function(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].length >= wordLength) {
      wordLength = array[i].length;
      var longestWord = array[i];
    }
  };
  console.log(longestWord);
};

findLongestWord(arrayOfWords);


//Another method for longestWord

var arrayOfWords = ['apple', 'strawberry', 'orange', 'blueberries', 'banana'];

var findLongestWord = function(array) {
  array.sort(function(a, b) {
    return b.length - a.length;
  });
  console.log(array[0]);
}

findLongestWord(arrayOfWords);
