const winningCombinations = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
const gameElements = Object.keys(winningCombinations);

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const roundWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (winningCombinations[playerSelection] === computerSelection) {
    return "player";
  } else {
    return "computer";
  }
};

let winner = document.getElementById("winner");
const playRound = (result) => {
  const messages = {
    tie: "It's a tie",
    player: "You win this round",
    computer: "Computer wins this round",
  };

  winner.textContent = messages[result];
  if (result === "player") playerScore++;
  if (result === "computer") computerScore++;
};

const resetGame = () => {
  if (roundCount === 6) {
    if (playerScore > computerScore) {
      winner.textContent = "Congratulations! You've won the game";
    } else if (playerScore < computerScore) {
      winner.textContent = "You've lost the game";
    } else {
      winner.textContent = "No one wins, it's a tie";
    }
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
  }
};

const updateScoreboard = () => {
  document.getElementById("playerScore").textContent =
    "Player Score: " + playerScore;
  document.getElementById("computerScore").textContent =
    "Computer Score: " + computerScore;
  document.getElementById("round").textContent = "Round: " + roundCount;
};

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.textContent.toLowerCase();
    const computerSelection =
      gameElements[Math.floor(Math.random() * gameElements.length)];
    playRound(roundWinner(playerSelection, computerSelection));
    roundCount++;
    resetGame();
    updateScoreboard();
  });
});
