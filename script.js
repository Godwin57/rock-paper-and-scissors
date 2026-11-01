function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const input = prompt("Rock, paper or scissors?");
  return input.toLowerCase();
}

function playRound(human, computer) {
  if (human === computer) return "draw";
  const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
  return beats[human] === computer ? "win" : "lose";
}

function logRound(round, human, computer, result) {
  console.log(`Round ${round}: you chose ${human}, computer chose ${computer}. You ${result === "draw" ? "drew" : result}!`);
}

function getWinnerMessage(humanScore, computerScore) {
  if (humanScore > computerScore) return "You win the game!";
  if (computerScore > humanScore) return "The computer wins the game!";
  return "The game is a draw!";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    const result = playRound(human, computer);

    if (result === "win") humanScore++;
    if (result === "lose") computerScore++;

    logRound(round, human, computer, result);
    console.log(`Score: you ${humanScore} - computer ${computerScore}`);
  }

  console.log(getWinnerMessage(humanScore, computerScore));
}
