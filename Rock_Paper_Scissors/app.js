const compChoice = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let yourChoice //to globally access yourChoice variable
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice =>
      possibleChoice.addEventListener('click', (e) => {
        yourChoice = e.target.id
        yourChoiceDisplay.innerHTML = yourChoice
        generateComputerChoice();
        getResult();
  }));

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice;
  }

function getResult() {
  if (computerChoice === userChoice) {
    result = "DRAW!"
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = "WIN!"
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = "LOSE!"
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = "WIN!"
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = "LOSE!"
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = "WIN!"
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = "LOSE!"
  }

  resultDisplay.innerHTML = result;
}
