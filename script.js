const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const youScoreSpan = document.querySelector("[data-your-score]");

const selections = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "🤚",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const userSelection = selections.find((selection) => selection.name === selectionName);
    makeSelection(userSelection);
  });
});

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
}

function makeSelection(userSelection) {
  const computerSelection = randomSelection();
  const youWinner = isWinner(userSelection, computerSelection);
  const computerWinner = isWinner(computerSelection, userSelection);

  //   addSelectionResult(computerSelection, computerWinner);
  //   addSelectionResult(selection, youWinner);

  if (youWinner == false && computerWinner == false) {
    console.log("tie");
  } else {
    if (youWinner) {
      console.log("you win");
    } else {
      console.log("computer win");
    }
  }
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}
