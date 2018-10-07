var numberGuess = Math.floor(Math.random() * 26);
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[numberGuess];
var wins = 0;
var guessesLeft = 9;
var losses = 0;
var letterToGuess = null;


console.log(computerGuess);
document.onkeyup = function (event) {
    //  alert(event.key)
    if (computerGuess === event.key) {
        wins++;
        document.getElementById('wins').innerText = wins;

    } else {
        --guessesLeft;
        if (guessesLeft === 0) {
            losses++;
        }

        document.getElementById("guessesLeft").innerText = guessesLeft;

    }

 if (guesses === 0) {
    guesses = 9;
    losses++;
    guessedLetters = [];
}

}
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();
