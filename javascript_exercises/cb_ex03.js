/* For this challenge you will be determining the largest word in a string. */

function longestWord(word) {
  var stringLength = 0;
  var longestString;
  word = word.replace(/[^a-zA-Z]/g, " ");
  var wordArray = word.split(" ");
  for (var i=0; i < wordArray.length; i++) {
    if(wordArray[i].length > stringLength) {
      stringLength = wordArray[i].length;
      word = wordArray[i];
    } else {
      stringLength;
    }
  }
  return word;
}

longestWord("You have got to be kidding me");