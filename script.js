function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const input = prompt("Rock, paper or scissors?");
  return input.toLowerCase();
}

function playRound(human, computer) {
  if (human === computer) {
    return "draw";
  } else {
    if (human === "rock") {
      if (computer === "scissors") {
        return "win";
      } else {
        return "lose";
      }
    } else if (human === "paper") {
      if (computer === "rock") {
        return "win";
      } else {
        return "lose";
      }
    } else {
      if (computer === "paper") {
        return "win";
      } else {
        return "lose";
      }
    }
  }
}
