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
    return { result: 'd', message: "Draw! Rock can't beat Rock" };
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return { result: 'l', message: 'You Lose! Paper beats Rock' };
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return { result: 'w', message: 'You Win! Rock beats Scissors' };
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return { result: 'w', message: 'You Win! Paper beats Rock' };
  } else if (playerSelection == 'paper' && computerSelection == 'paper') {
    return { result: 'd', message: "Draw! Paper can't beat Paper" };
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return { result: 'l', message: 'You Lose! Scissors beats Paper' };
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return { result: 'l', message: 'You Lose! Rock beats Scissors' };
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return { result: 'w', message: 'You Win! Scissors beats Paper' };
  } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    return { result: 'd', message: "Draw! Scissors can't beat Scissors" };
  }
};

let determineWinner = function (playerScore) {
  if (playerScore == 5) {
    return 'End of Game. You Won!';
  } else {
    return 'End of Game. You Lost!';
  }
};

let playGame = function () {
  let computerScore = 0;
  let playerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = prompt('Your choice?');
    let gameOutcome = playRound(playerSelection, getComputerChoice());
    if (gameOutcome.result == 'w') {
      playerScore++;
    } else if (gameOutcome.result == 'l') {
      computerScore++;
    }
    console.log(`You:${playerScore} - Computer:${computerScore}
${gameOutcome.message}`);
  }

  console.log(`${determineWinner(playerScore)}`);
}

playGame();
