//VARIABLES
let startBtn = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionContainerEl = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let questionChoicesEl = document.querySelector("#choices");
let feedbackContainerEl = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let quizTimer = document.querySelector("#time");
let submit = document.querySelector("#submit");
let initialsInput = document.querySelector("#initials");
//audio files
let audioCorrect = new Audio("sfx/correct.wav");
let audioIncorrect = new Audio("sfx/incorrect.wav");

//DECLARE SCORE GLOBALLY
let score = 0;

//DECLARE CURRENT QUESTION GLOBALLY
let runningQuestionIndex = 0;

//DECLARE LAST QUESTION GLOBALLY
let lastQuestionIndex = myQuiz.length - 1;

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
  if (runningQuestionIndex === lastQuestionIndex) {
    showResults();
  } else {
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
}
//CHECK ANSWER FUNCTION
function checkAnswer(e) {
  let selectedAnswer = e.target.innerHTML;
  console.log(selectedAnswer);
  let correctAnswer = myQuiz[runningQuestionIndex].correct;
  console.log(correctAnswer);

  feedbackContainerEl.classList.remove("hide");
  //Display feedback
  if (selectedAnswer === correctAnswer) {
    feedbackContainerEl.textContent = "Correct!";
    audioCorrect.play();
    score++;
  } else {
    feedbackContainerEl.textContent = "Incorrect!";
    audioIncorrect.play();
  }
  renderQuestion(runningQuestionIndex++);
  //display end screen
  startScreen.setAttribute("class", "hide");
}

//END SCREEN FUNCTION

function showResults() {
  hideSection(questionContainerEl);
  hideSection(feedbackContainerEl);
  endScreen.removeAttribute("class");
  finalScore.textContent = score;
}

function hideSection(element) {
  element.setAttribute("class", "hide");
}

//SAVE INICTIALS FUNCTION

submit.addEventListener("click", saveInitials);

function saveInitials(e) {
  e.preventDefault();
  initialsInput = initials.value;
  //console.log(initials.value)
  finalScore.textContent = score;
  // Object to score the current users initials
  let endScore = finalScore.textContent;
  let userData = { initials: initialsInput, score: endScore };

  // Array to store users data
  let usersData;

  if (localStorage.getItem("usersData") === null) {
    usersData = [];
  } else {
    //to pull out the JavaCript object from the string
    usersData = JSON.parse(localStorage.getItem("usersData"));
  }
  usersData.push(userData);
  // Save to localStorage convert a JavaCript object into an string
  localStorage.setItem("usersData", JSON.stringify(usersData));
}
