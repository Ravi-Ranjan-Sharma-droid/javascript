const randNum = parseInt(Math.random() * 100 + 1) // Random number generate 
const submit = document.querySelector("#Submit"); // Button thats clicked by user
const UserInput = document.querySelector("#guessField"); // Display
const remaining = document.querySelector(".lastResult"); // Guesses Remaining
const LastGuess = document.querySelector(".guesses"); // Previous Guesses 
const LowHigh = document.querySelector(".lowOrHi"); // Hint
const StartOver = document.querySelector(".resultParas");
const p = document.createElement('p')
console.log(randNum);

let previousGuess = [];
let NumGuess = 1;

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(UserInput.value)
        ValidGuess(guess)        
    })
 }

function ValidGuess(guess) {
    // This function check if user put valid number
    if (isNaN(guess)) {
        alert('Please fill the field')
    } else if (guess > 100) {
        alert('Please Enter a number less than 100')
    } else if (guess < 0) {
        alert("Number should not be an integer.");
    } else if (guess === 0) {
        alert("Number should not be Zero");
    } else {
        previousGuess.push(guess)
        if (NumGuess === 0) {
            DisplayGuess(guess)
            DisplayMessage(`Game Over. Random number was ${randNum}`)
            EndGame()
        } else {
            DisplayGuess(guess)
        }
    }
}

function CheckGuess(guess) {
    // This function check the guess number high or low for the game result
}

function DisplayGuess(guess) {
    // This function display the UserGuess number
}

function DisplayMessage(message){
    // This function do as following events
    // --> Empty the last guess no. for next guess if user unable to guess the number.
    // --> Inner Html updated 
    // --> number of guess remaining decreases
}

function EndGame() {
    
}

function NewGame() {
    
}