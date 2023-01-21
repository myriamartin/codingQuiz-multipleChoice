//VARIABLES
let rankingScoreEl = document.querySelector("#highscores");
let clearBtn = document.querySelector("#clear");

// A function to render the user data list.
function rankingScore() {
  if (localStorage.getItem("usersData") === null) {
    usersData = [];
  } else {
    //to pull out the JavaCript object from the string
    usersData = JSON.parse(localStorage.getItem("usersData"));
  }
  // Sorting out object from higher to lower score.
  usersData.sort(function (userA, userB) {
    return userA.score - userB.score;
  });

  // Create a li html element to render the result for each user
  for (let index = 0; index < usersData.length; index++) {
    let liEl = document.createElement("li");
    liEl.textContent = `${usersData[index].initials}: ${usersData[index].score}`;
    rankingScoreEl.appendChild(liEl);
  }
}

// Clear the local storage and the ranking
clearBtn.addEventListener("click", function () {
  localStorage.clear();
  rankingScoreEl.innerHTML = "";
});

// Sort high scores from highest to lowest
rankingScore();
