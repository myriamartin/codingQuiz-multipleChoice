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
let time = 90;

//DECLARE CURRENT QUESTION GLOBALLY
let runningQuestionIndex = 0;

//DECLARE LAST QUESTION GLOBALLY
let lastQuestionIndex = questions.length - 1;

// Will store the textContent of possible answers
let userChoice = "";

//START QUIZ

startBtn.addEventListener("click", startQuiz);
function startQuiz() {
  // Checks if the start section has a class of hide, and if not appends it to it's current class
  if ((startScreen.getAttribute !== "class", "hide")) {
    startScreen.setAttribute("class", "hide start");
  }

  // Checks if the question section has a class of hide, and if not, adds it
  if ((questionContainerEl.getAttribute !== "class", "hide")) {
    questionContainerEl.removeAttribute("class");
  }
  renderQuestion();
}

//RENDER THE QUESTION
function renderQuestion() {
  let question = myQuiz[runningQuestionIndex].question;
  questionTitle.textContent = question;
  let choices = myQuiz[runningQuestionIndex].choices;
  questionChoicesEl.textContent = "";

  for (let i = 0; i < choices.length; i++) {
    // Assign the current loop of choices to the choice variable
    let choice = choices[i];
    // Creates a button and assigns it to a variable;
    let choiceBtn = document.createElement("button");
    // Adds the current choice as text to the button
    choiceBtn.textContent = choice;
    // Appends the button to the parent questions div
    questionChoicesEl.appendChild(choiceBtn);
    // Event listener on click on posible answers - event bubbling
    questionChoicesEl.addEventListener("click", checkAnswer);
  }
}

//CHECK ANSWER FUNCTION
function checkAnswer(e) {
  let selectedAnswer = e.target.innerHTML;
  console.log(selectedAnswer);
  let correctAnswer = myQuiz[runningQuestionIndex].correct;
  console.log(correctAnswer);
  if (selectedAnswer === correctAnswer) {
    renderQuestion(runningQuestionIndex++);
  }
  
}
