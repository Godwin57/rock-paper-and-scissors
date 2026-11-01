const WINNING_SCORE = 5;

let humanScore = 0;
let computerScore = 0;
let lastRound = { human: "", computer: "" };

const buttons = document.querySelectorAll("button[data-choice]");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResultDisplay = document.querySelector("#round-result");
const winnerDisplay = document.querySelector("#winner");
const playAgainButton = document.querySelector("#play-again");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(human, computer) {
  lastRound = { human, computer };
  if (human === computer) return "draw";
  const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
  return beats[human] === computer ? "win" : "lose";
}

function getRoundMessage(result) {
  const { human, computer } = lastRound;
  const outcomes = {
    win: "You win this round!",
    lose: "You lose this round!",
    draw: "It's a draw!",
  };
  return `You chose ${human}, computer chose ${computer}. ${outcomes[result]}`;
}

function showScores() {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

function setButtonsDisabled(disabled) {
  buttons.forEach((button) => {
    button.disabled = disabled;
  });
}

function isGameOver() {
  return humanScore >= WINNING_SCORE || computerScore >= WINNING_SCORE;
}

function endGame() {
  const message = humanScore > computerScore
    ? "You win the game!"
    : "The computer wins the game!";
  winnerDisplay.textContent = message;
  setButtonsDisabled(true);
  playAgainButton.classList.remove("hidden");
}

function updateScore(result) {
  if (result === "win") humanScore++;
  if (result === "lose") computerScore++;

  roundResultDisplay.textContent = getRoundMessage(result);
  showScores();

  if (isGameOver()) endGame();
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  showScores();
  roundResultDisplay.textContent = "Make your choice to start.";
  winnerDisplay.textContent = "";
  playAgainButton.classList.add("hidden");
  setButtonsDisabled(false);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.dataset.choice, getComputerChoice());
    updateScore(result);
  });
});

playAgainButton.addEventListener("click", resetGame);
