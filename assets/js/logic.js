let quizStartButton = document.querySelector("#start");
let startScreen = document.querySelector(".start");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let displaychoices = document.querySelector("#choices");

function startQuiz() {
  startScreen.classList.add("hide");
  questionScreen.classList.remove("hide");
  for (let i = 0; i < questions.length; i++) {
    questionTitle.textContent = questions[0].question;
    displaychoices.textContent = questions.choices;
  }
}

quizStartButton.addEventListener("click", function (event) {
  event.preventDefault();
  startQuiz();
});

console.log(questions[1].question);
