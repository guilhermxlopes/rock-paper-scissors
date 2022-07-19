const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const youScoreSpan = document.querySelector("[data-your-score]");
const tieScoreSpan = document.querySelector(".tie-score");

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

  if (youWinner == false && computerWinner == false) {
    tieScoreSpan.innerText = parseInt(tieScoreSpan.innerText) + 1;
  } else {
    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(userSelection, youWinner);
    if (youWinner) {
      youScoreSpan.innerText = parseInt(youScoreSpan.innerText) + 1;
    } else {
      computerScoreSpan.innerText = parseInt(computerScoreSpan.innerText) + 1;
    }
  }
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}
