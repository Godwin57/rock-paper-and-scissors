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
