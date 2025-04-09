const RandNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const LorH = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

console.log(RandNum);

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please fill the field below to continue')
    } else if (guess === 0) {
        alert('zero is not allowed')
    } else if (guess > 100) {
        alert('Number must not be greater than 100')
    } else if (guess < 0) {
        alert('Number must not be negative (-ve)')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${guess}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === RandNum) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess > RandNum) {
      displayMessage(`Number is Too high`);
    } else if (guess < RandNum) {
      displayMessage(`Number is Too low`);
    }
}

function displayGuess() {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    LorH.innerHTML = `<h2>${message}</h2>`
}

function endGame() {}

function newGame() {}