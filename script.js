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
    const selection = selections.find((selection) => selection.name === selectionName);
    makeSelection(selection);
  });
});

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
}

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const youWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, youWinner);

  if (youWinner) incrementScore(youScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}
