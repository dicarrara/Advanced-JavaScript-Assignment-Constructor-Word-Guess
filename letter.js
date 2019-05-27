// Contains a constructor, Letter.
// This constructor should be able to either display an underlying character or a blank placeholder
// (such as an underscore), depending on whether or not the user has guessed the letter.
// That means the constructor should define:

// A string value to store the underlying character for the letter

// A boolean value that stores whether that letter has been guessed yet

// A function that returns the underlying character if the letter has been guessed,
// or a placeholder (like an underscore) if the letter has not been guessed

// A function that takes a character as an argument and checks it against the
// underlying character, updating the stored boolean value to true if it was guessed correctly

function Letter(character) {
  this.character = character;
  this.letterGuessed = false;

  this.returnCharacter = function() {
    if (this.character === " ") {
      return " ";
    } else if (this.letterGuessed) {
      return this.character;
    } else if (this.character === "'") {
      return "'";
    } else if (this.character === "-") {
      return "-";
    } else if (this.letterGuessed === false) {
      return "_";
    }
  };

  this.checkCharacter = function(guess) {
    if (guess === this.character) {
      this.letterGuessed = true;
    }
  };
}

// check if constructor works
// var myLetter = new Letter ("Y");
// myLetter.returnCharacter();

module.exports = Letter;
