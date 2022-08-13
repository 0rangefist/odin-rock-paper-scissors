let getComputerChoice = function () {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 0) {
    return 'ROCK';
  } else if (randomChoice == 1) {
    return 'PAPER';
  } else {
    return 'SCISSORS';
  }
};

let playRound = function () {};

let playGame = function () {};