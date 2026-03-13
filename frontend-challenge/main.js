function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

const getScore = (element, target) => {
  score.innerText = String(target);
};

const winners = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

const choices = Array.from(document.querySelector(".choices").children);
const paper = choices[0];
const scissors = choices[1];
const rock = choices[2];

paper.addEventListener("click", (e) => {
  playGame("Paper");
});

rock.addEventListener("click", (e) => {
  playGame("Rock");
});

scissors.addEventListener("click", (e) => {
  playGame("Scissors");
});

function playGame(choice) {
  computerChoice = getComputerChoice();

  if (choice === computerChoice) {
    console.log("A Draw! Play Again if you want");
    return 0;
  }

  if (winners[choice] === computerChoice) {
    console.log(`You Win! ${choice}  beats ${computerChoice}`);
  } else {
    console.log(`You Lose! ${computerChoice}  beats ${choice}`);
  }
}
