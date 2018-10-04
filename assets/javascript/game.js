var numberGuess = Math.floor(Math.random() * 26); 
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess = alphabet[numberGuess];
var wins = 0;
console.log(computerGuess);
document.onkeyup = function(event){
  //  alert(event.key)
    if (computerGuess === event.key){
        wins++;
        console.log(wins);
    }
}

