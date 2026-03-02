let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = document.getElementById("guessInput").value;
    const result = document.getElementById("result");

    if (userGuess == randomNumber) {
        result.innerHTML = "🎉 Correct! You guessed it!";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Wrong! Try again.";
        result.style.color = "red";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("result").innerHTML = "";
    document.getElementById("guessInput").value = "";
}