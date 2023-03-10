let quizStartButton = document.querySelector("#start");
let startScreen = document.querySelector(".start");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let displayChoices = document.querySelector("#answerForm");
let btn = document.querySelector(".button");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let submitBtn = document.querySelector("#submit");
let initials = document.querySelector("#initials");
let timer = document.getElementById("time");
let timeEnd = document.querySelector(".timer");

let questionIndex = 0;
let score = 0;
let question = questions[questionIndex];
let timeLeft = 60;

function startQuiz() {
  startScreen.classList.add("hide");
  questionScreen.classList.remove("hide");
  renderQuestion();
}

quizStartButton.addEventListener("click", function () {
  startQuiz();
  startTimer();
});

function renderQuestion() {
  const currentAnswers = questions[currentQuestion].answers;
  answerForm.innerHTML = "";

  questionTitle.innerText = questions[currentQuestion].text;

  currentAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.name = "answer";
    button.textContent = answer.text;

    button.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedIndex = questions[currentQuestion].answers.findIndex(
        (a) => a.text === this.textContent
      );
      

      if (
        questions[currentQuestion].answers[selectedIndex].dataIndex ===
        "Correct"
      ) {
        score += 10;
      } else if (
        questions[currentQuestion].answers[selectedIndex].dataIndex === "Wrong"
      ) {
        timeLeft -= 10;
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
  timeEnd.classList.add("hide");
  questionScreen.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.innerText = score;
}

submitBtn.addEventListener("click", function () {
  event.preventDefault();
  const userName = initials.value.trim(); // use trim() to remove whitespace from the beginning and end of the input
  if (!userName) {
    // check if userName is empty or contains only whitespace characters
    alert("Try again!");
  } else {
    localStorage.setItem(userName, score);
    submitBtn.disabled = true;
  }
});

function startTimer() {
  let timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timer.textContent = timeLeft;

      timeLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timeInterval);
      generateResults();
    }
  }, 1000);
}
