var numberGuess = Math.floor(Math.random() * 26); 
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess = alphabet[numberGuess];
var wins = 0;
var guessesLeft = 9;
console.log(computerGuess);
document.onkeyup = function(event){
  //  alert(event.key)
    if (computerGuess === event.key){
        wins++;
        document.getElementById('wins').innerText = wins;

    } else {
        --guessesLeft;
        if (guessesLeft === 0){
            losses++;
        }

        document.getElementById("guessesLeft").innerText = guessesLeft;

    }

}

