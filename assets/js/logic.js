let quizStartButton = document.querySelector("#start");
let startScreen = document.querySelector(".start");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let displayChoices = document.querySelector("#choices");

let questionIndex = 0;
let score = 0;

function startQuiz() {
  startScreen.classList.add("hide");
  questionScreen.classList.remove("hide");
  renderQuestion();
}

quizStartButton.addEventListener("click", function () {
  startQuiz();
});

function renderQuestion() {
  let question = questions[questionIndex];
  questionTitle.innerHTML = question.ask;
  let userOptions = question.choices;

  console.log(question.ask);
  console.log(question.correct);
  console.log(question.choices);
  for (i = 0; i < userOptions.length; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = userOptions[i];
    document.body.appendChild(btn);
  //displayChoices.innerHTML = userOptions;
  // let btn = document.createElement("button");
  //btn.innerHTML = userOptions;
  //document.body.appendChild(btn);

  /*question.choices.forEach((element) => {
    let btn = document.createElement("button");
    btn.innerHTML = element;
    document.body.appendChild(btn);
    selectedChoices();
  });*/
}
}
/*
function renderOptions() {
  let question = questions[questionIndex];
  let userOptions = question.choices;
  for (i = 0; i < userOptions.length; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = userOptions[i];
    document.body.appendChild(btn);
  }
}
*/