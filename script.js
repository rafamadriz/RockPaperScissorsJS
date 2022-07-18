const gameElements = ["rock", "paper", "scissors"];

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const whoIsWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return "computer";
  }
};

const playRound = (string) => {
  if (string === "tie") {
    return;
  } else if (string === "player") {
    playerScore++;
  } else if (string === "computer") {
    computerScore++;
  }
};

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.value;
    const computerSelection = gameElements[randomNumber(0, 3)];
    playRound(whoIsWinner(playerSelection, computerSelection));
    roundCount++;
  });
});
