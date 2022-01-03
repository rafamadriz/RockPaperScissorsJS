const gameElements = ['rock', 'paper', 'scissors'];

const M = Math;
const randomNumber = (min, max) => M.floor(M.random() * (max - min) + min);

const winner = { isPlayerWinner: false, isComputerWinner: false };
const chooseWinnter = (player, computer) => {
  if (
    (player === gameElements[0] && computer == gameElements[1]) ||
    (player === gameElements[1] && computer == gameElements[2]) ||
    (player === gameElements[2] && computer == gameElements[0])
  ) {
    winner.isPlayerWinner = false;
    winner.isComputerWinner = true;
  } else if (
    (player === gameElements[0] && computer == gameElements[2]) ||
    (player === gameElements[1] && computer == gameElements[0]) ||
    (player === gameElements[2] && computer == gameElements[1])
  ) {
    winner.isPlayerWinner = true;
    winner.isComputerWinner = false;
  }
};

const playRound = (playerSelection, computerSelection) => {
  chooseWinnter(playerSelection, computerSelection);

  if (winner.isPlayerWinner && !winner.isComputerWinner) {
    console.log(
      `You win the round! ${playerSelection} beats ${computerSelection}`
    );
  } else if (!winner.isPlayerWinner && winner.isComputerWinner) {
    console.log(
      `You lose the round! ${computerSelection} beats ${playerSelection}`
    );
  } else if (!winner.isPlayerWinner && !winner.isComputerWinner) {
    console.log(`It's a tie!`);
  }
};

const game = () => {
  let playerCount = 0;
  let computerCount = 0;
  let count = 0;

  while (count < 5) {
    const computerSelection = gameElements[randomNumber(0, 3)];
    const playerSelection = prompt("What's your play").toLowerCase();

    playRound(playerSelection, computerSelection);

    if (winner.isPlayerWinner) playerCount++;
    if (winner.isComputerWinner) computerCount++;

    console.log(`Round: ${count + 1}`);
    count++;
  }

  if (playerCount > computerCount)
    console.log(`You've won the game! Congratulations`);
  if (computerCount > playerCount) console.log(`You've lost the game :(`);
  console.log(`Player Score: ${playerCount}\nComputer Score: ${computerCount}`);
};

game();
