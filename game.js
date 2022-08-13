let getComputerChoice = function () {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 0) {
    return 'rock';
  } else if (randomChoice == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

let playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

   if (playerSelection == 'rock' && computerSelection == 'rock') {
     return "Draw! Rock can't beat Rock";
   } else if (playerSelection == 'rock' && computerSelection == 'paper') {
     return 'You Lose! Paper beats Rock';
   } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
     return 'You Win! Rock beats Scissors';
   } else if (playerSelection == 'paper' && computerSelection == 'rock') {
     return 'You Win! Paper beats Rock';
   } else if (playerSelection == 'paper' && computerSelection == 'paper') {
     return "Draw! Paper can't beat Paper";
   } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
     return 'You Lose! Scissors beats Paper';
   } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
     return 'You Lose! Rock beats Scissors';
   } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
     return 'You Win! Scissors beats Paper';
   } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
     return "Draw! Scissors can't beat Scissors";
   }
};

let playGame = function () {};

