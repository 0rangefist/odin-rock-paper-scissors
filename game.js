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

//get player selection buttons, player & computer divs(which hold the graphic sprites)
let playerButtons = document.querySelectorAll('.container button');
let playerDivs = document.querySelectorAll('.player>div');
let computerDivs = document.querySelectorAll('.computer>div');

playerButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    //get player & computer selections
    let playerSelection = button.className;
    let computerSelection = getComputerChoice();
    console.log(
      `Player:${playerSelection.toUpperCase()} - Computer:${computerSelection.toUpperCase()}`
    );

    //turn on selected player div(graphic) & turn off unselected
    playerDivs.forEach((playerDiv) => {
      console.log('PLAYER DIV', playerDiv.className);
      if (playerDiv.className.includes(playerSelection)) {
        //playerDiv.style.display = 'block';
        playerDiv.classList.add('player-animation');
        playerDiv.classList.add('display');
        playerDiv.addEventListener('animationend', (e) => {
          playerDiv.classList.remove('player-animation');
        });
      } else {
        //playerDiv.style.display = 'none';
        playerDiv.classList.remove('display');
      }
    });

    //turn on selected computer div(graphic) & turn off unselected
    computerDivs.forEach((computerDiv) => {
      console.log('COMPUTER DIV', computerDiv.className);
      if (computerDiv.className.includes(computerSelection)) {
        // computerDiv.style.display = 'block';
        computerDiv.classList.add('computer-animation');
        computerDiv.classList.add('display');
        computerDiv.addEventListener('animationend', (e) => {
          computerDiv.classList.remove('computer-animation');
        });
      } else {
        // computerDiv.style.display = 'none';
        computerDiv.classList.remove('display');
      }
    });

    let gameOutcome = playRound(playerSelection, computerSelection);
    console.log(gameOutcome.message);
  });
});

// let playGame = function () {
//   let computerScore = 0;
//   let playerScore = 0;

//   while (playerScore < 5 && computerScore < 5) {
//     let playerSelection = prompt('Your choice?');
//     let gameOutcome = playRound(playerSelection, getComputerChoice());
//     if (gameOutcome.result == 'w') {
//       playerScore++;
//     } else if (gameOutcome.result == 'l') {
//       computerScore++;
//     }
//     console.log(`You:${playerScore} - Computer:${computerScore}
// ${gameOutcome.message}`);
//   }

//   console.log(`${determineWinner(playerScore)}`);
// }

// playGame();
