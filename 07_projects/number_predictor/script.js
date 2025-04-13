let RandNum = parseInt(Math.random() * 100 + 1);
console.log(RandNum);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const LorH = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
// const guess = parseInt(userInput.value);

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("Please fill the field below to continue");
  } else if (guess === 0) {
    displayMessage("zero is not allowed");
  } else if (guess > 100) {
    displayMessage("Number must be smaller than 100");
  } else if (guess < 0) {
    displayMessage("Number must not be negative (-ve)");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      alert(`Game Over. Random number was ${RandNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
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

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  LorH.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;

    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);

        playGame = true;
    });
}
// upgrade add timer
// add comment 
// ui improve 
