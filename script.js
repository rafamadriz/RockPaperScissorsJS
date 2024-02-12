const gameElements = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const roundWinner = (playerSelection, computerSelection) => {
  const winningCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerSelection === computerSelection) {
    return "tie";
  } else if (winningCombinations[playerSelection] === computerSelection) {
    return "player";
  } else {
    return "computer";
  }
};

let winner = document.getElementById("winner");
const playRound = (string) => {
  if (string === "tie") {
    winner.textContent = "It's a tie";
    return;
  } else if (string === "player") {
    winner.textContent = "You win this round";
    playerScore++;
  } else if (string === "computer") {
    winner.textContent = "Computer wins this round";
    computerScore++;
  }
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

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.textContent.toLowerCase();
    const computerSelection = gameElements[Math.floor(Math.random() * 3)];
    playRound(roundWinner(playerSelection, computerSelection));
    roundCount++;
    resetGame();

    document.getElementById("playerScore").textContent =
      "Player Score: " + playerScore;
    document.getElementById("computerScore").textContent =
      "Computer Score: " + computerScore;
    document.getElementById("round").textContent = "Round: " + roundCount;
  });
});
