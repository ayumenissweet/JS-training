let humanScore = 0,
  computerScore = 0;

playGame();

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if (humanScore > computerScore) {
    console.log("You Win!");
    console.log(
      `Your Score : ${humanScore}, Computer Score : ${computerScore}`,
    );
  } else {
    console.log("You Lost!");
    console.log(
      `Your Score : ${humanScore}, Computer Score : ${computerScore}`,
    );
  }
}

function playRound() {
  const winners = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };
  while (true) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      alert("It's a tie!");
      continue;
    }

    if (winners[humanChoice] === computerChoice) {
      alert(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      alert(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }

    break;
  }
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  while (true) {
    let choice = prompt("Choose Rock, Paper, or Scissors!");

    if (choice == null) continue;

    //Turn the User's Input into a capitalized word
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    if (["Rock", "Scissors", "Paper"].includes(choice)) {
      return choice;
    }
  }
}
