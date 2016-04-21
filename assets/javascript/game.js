// constants
var words = {
  choices:["animagus","apparate","legilimens","mudblood","muggle","occlumency","parselmouth","squib","witch","wizard","gryffindor","hufflepuff","ravenclaw","slytherin","snape","dumbledore","malfoy","hermione","weasley","quidditch","hogwarts","beauxbatons","durmstrang","horcrux","howler","portkey","snitch","galleon"],
  }
var remainingGuesses = 10;           
var wins = "";


var chosenWord = "?";                
var lettersGuessed = "";              
var guessCount = remainingGuesses;  
var maskedWord = document.getElementById("maskedWord");
var guessArea = document.getElementById("lettersguessed");


function newGame() {

  var randomIndex = parseInt(Math.random() * words.choices.length);
  chosenWord = words.choices[randomIndex];
  guessCount = remainingGuesses;
  lettersGuessed = "";
  updatePage();   
}

function guessLetter() {
  document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
  var maskedWord = document.getElementById("maskedWord");
  if (guessCount == 0 || maskedWord.innerHTML.indexOf("_") < 0 ||
      lettersGuessed.indexOf(letter) >= 0) {
    return;   
  }
  lettersGuessed += letter;
  if (chosenWord.indexOf(letter) < 0) {
    guessCount--;      
  }
  updatePage();
}
}

function updatePage() {

  var wordClue = "";
  for (var i = 0; i < chosenWord.length; i++) {
    var letter = chosenWord.charAt(i);
    if (lettersGuessed.indexOf(letter) >= 0) {  
      wordClue += letter + " ";
    } else {                              // not guessed
      wordClue += "_ ";
    }
  }

  maskedWord.innerHTML = wordClue;


  // show the guesses the player has made
   if (guessCount == 0) {
    guessArea.innerHTML = "You lose.";    // game over (loss)
  } else if (wordClue.indexOf("_") < 0) {
    guessArea.innerHTML = "You win!!!";

  } else {
    guessArea.innerHTML = "Guesses remaining: " + guessCount + "<br>" + "Guessed letters: " + lettersGuessed;
  }

}
  