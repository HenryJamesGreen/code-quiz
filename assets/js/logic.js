let quizStartButton = document.querySelector("#start");
let startScreen = document.querySelector(".start");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let displaychoices = document.querySelector("#choices");

function startQuiz() {
  startScreen.classList.add("hide");
  questionScreen.classList.remove("hide");
  questionTitle.textContent = questions;
  displaychoices.textContent = choices;

}

quizStartButton.addEventListener("click", function (event) {
  event.preventDefault();
  startQuiz();
});
