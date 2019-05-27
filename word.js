// Word.js: Contains a constructor, Word that depends on the Letter constructor.
// This is used to create an object representing the current word the user is attempting to guess.
// That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function
// on each letter object (the first function defined in Letter.js)
// that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object
// (the second function defined in Letter.js)

var letter = require("./letter.js");

var Word = function(word) {
  this.returnAString = function(word) {
    var storeLetters = [];
    for (var i = 0; i < word.length; i++) {
      var characterLetter = new Letter(word[i]);
      storeLetters.push(characterLetter);
    }
    return storeLetters;
  };

  this.letters = this.returnAString(word);
  this.chosenWord = word;

  this.checkGuess = function(guess) {
    for (var i = 0; i < this.letters.length; i++) {
      this.letters[i].checkCharacter(guess);
    }
  };

  this.display = function() {
    var storeLetters = "";
    for (var i = 0; i < this.letters.length; i++) {
      storeLetters += this.letters[i].display();
    }
    return storeLetters;
  };
};

module.exports = Word;
