var numberGuess = Math.floor(Math.random() * 26);
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[numberGuess];
var wins = 0;
var guessesLeft = 9;
var losses = 0;
var guessedLetters = [];



console.log(computerGuess);
document.onkeyup = function (event) {
 var  userGuess = event.key;
   console.log(userGuess);

//var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
 

   var reset = function () {
    totalGuesses = 0;
    guessesLeft = 9;
    guessedLetters = [];
   
    


}

    //  alert(event.key)
    if (computerGuess === event.key) {
        wins++;
        reset();
        document.getElementById('wins').innerText = wins;



    } else {
        guessesLeft--;
        document.getElementById('guessesLeft').innerText = guessesLeft;
        guessedLetters.push(userGuess);
        document.getElementById('guessesSoFar').innerHTML = guessedLetters.join(", ");

        }
    if (guessesLeft === 0) {
    losses++;
        reset();
    document.getElementById('losses').innerText = losses;


    }






}
