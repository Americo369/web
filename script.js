var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
  var guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (guess === randomNumber) {
    document.getElementById("result").textContent = "¡BRAVO! El número era " + randomNumber;
    document.getElementById("result").style.color = "green";
    document.getElementById("attempts").textContent = "Mira que no podia ser mejor: " + attempts + " intentos"; 
    document.getElementById("attempts").style.color = "green";
    document.getElementById("guessInput").disabled = true;
  } else if (guess < randomNumber) {
    document.getElementById("result").textContent = "¡NO!. El número es mayor.";
    document.getElementById("result").style.color = "red";
  } else if (guess > randomNumber) {
    document.getElementById("result").textContent = "¡Pe...Ah!. El número es menor.";
    document.getElementById("result").style.color = "red";
  }
}