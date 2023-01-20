//VARIABLES
const startButton = document.querySelector("#start");
const startContainerEl = document.querySelector("#start-screen");
const questionContainerEl = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");

// Adds an event listener to the "startButton" element which listens for a "click" event
// Triggers the "startGame" function when the button is clicked
startButton.addEventListener("click", startGame);

// Start Quiz
function startGame() {
  startContainerEl.classList.add("hide");
  questionContainerEl.classList.remove("hide");
}
