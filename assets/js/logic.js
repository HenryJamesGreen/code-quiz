let quizStartButton = document.querySelector("#start");
let startScreen = document.querySelector(".start");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let displayChoices = document.querySelector("#answerForm");
let btn = document.querySelector(".button");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");

let questionIndex = 0;
let score = 0;
let question = questions[questionIndex];
let userOptions = question.choices;
let selected;

function startQuiz() {
  startScreen.classList.add("hide");
  questionScreen.classList.remove("hide");
  renderQuestion();
}

quizStartButton.addEventListener("click", function () {
  startQuiz();
});

function renderQuestion() {
  const currentAnswers = questions[currentQuestion].answers;
  answerForm.innerHTML = "";

  questionTitle.innerText = questions[currentQuestion].text;

  currentAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.name = "answer";
    button.classList = "btn btn-primary";
    button.textContent = answer.text;

    button.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedIndex = questions[currentQuestion].answers.findIndex(
        (a) => a.text === this.textContent
      );
      //questions[currentQuestion].answers[selectedIndex].value += 1;

      if (
        questions[currentQuestion].answers[selectedIndex].dataIndex ===
        "Correct"
      ) {
        score += 10;
      } else if (
        questions[currentQuestion].answers[selectedIndex].dataIndex === "Wrong"
      ) {
        score += -10;
      }

      currentQuestion++;
      if (currentQuestion === questions.length) {
        console.log("Your scores:", score);
        generateResults();
      } else {
        renderQuestion();
      }
    });

    answerForm.appendChild(button);
  });
}

function generateResults() {
  questionScreen.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.innerText = score;
}
