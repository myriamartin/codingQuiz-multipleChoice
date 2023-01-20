//VARIABLES
let startBtn = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionContainerEl = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let questionChoicesEl = document.querySelector("#choices");
let feedbackContainerEl = document.querySelector("#feedback");
let endScreen = document.querySelector("#final-score");
let finalScore = document.querySelector("#end-screen");
let quizTimer = document.querySelector("#time");
let submit = document.querySelector("#submit");
let initials = document.querySelector("#initials");

//DECLARE TIMER GLOBALLY
let secondsLeft = 60;

//DECLARE SCORE GLOBALLY
let score = 0;

//DECLARE CURRENT QUESTION GLOBALLY
let runningQuestionIndex = 0;

//DECLARE LAST QUESTION GLOBALLY
let lastQuestionIndex = questions.length - 1;

//START QUIZ

startBtn.addEventListener("click", startQuiz);
function startQuiz() {
  startScreen.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  renderQuestion();
}

//RENDER THE QUESTION
function renderQuestion() {
  let question = myQuiz[runningQuestionIndex].question;
  questionTitle.textContent = question;
  let choices = myQuiz[runningQuestionIndex].choices;
  questionChoicesEl.textContent = "";

  for (let i = 0; i < choices.length; i++) {
    let choiceBtn = document.createElement("button");
    choiceBtn.textContent = choices[i];
    questionChoicesEl.appendChild(choiceBtn);
  }
}
