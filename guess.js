const randomNumber = Math.floor(Math.random() *10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuessInput").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        document.getElementById("message").textContent = 
        "Please enter a valid umber.";
    } else {
        if (userGuess === randomNumber) {
            document.getElementById("message").textContent = 
            "Great job! That is the correct number."
        } else {
            document.getElementById("message").textContent = 
            "That was the incorect number."
        }
    }
}