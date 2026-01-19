let humanScore = 0,
  computerScore = 0;

console.log("Hello World");
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
  while (true) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == "Rock") {
      if (computerChoice == "Paper") {
        alert("You Lose! Paper beats Rock!");
        computerScore++;
      } else if (computerChoice == "Scissors") {
        alert("You Win! Rock beats Scissors!");
        humanScore++;
      } else {
        alert("It's a tie!");
        continue;
      }
    } else if (humanChoice == "Paper") {
      if (computerChoice == "Rock") {
        alert("You Win! Paper beats Rock!");
        humanScore++;
      } else if (computerChoice == "Scissors") {
        alert("You Lose! Scissors beats Paper!");
        computerScore++;
      } else {
        alert("It's a tie!");
        continue;
      }
    } else {
      if (computerChoice == "Rock") {
        alert("You Lose! Rock beats Scissors!");
        computerScore++;
      } else if (computerChoice == "Paper") {
        alert("You Win! Scissors beats Paper!");
        humanScore++;
      } else {
        alert("It's a tie!");
        continue;
      }
    }

    break;
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "Rock";
  } else if (choice == 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

function getHumanChoice() {
  while (true) {
    let choice = prompt("Choose Rock, Paper, or Scissors!");

    if (choice == null) continue;

    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    if (choice == "Rock") {
      return "Rock";
    } else if (choice == "Paper") {
      return "Paper";
    } else if (choice == "Scissors") {
      return "Scissors";
    }
  }
}
