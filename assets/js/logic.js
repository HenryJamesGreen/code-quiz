let quizStartButton = document.querySelector("#start");
let startScreen = document.querySelector(".start");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let displayChoices = document.querySelector("#choices");
let btn = document.querySelector(".button");

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

  question.innerText = questions[currentQuestion].text;

  currentAnswers.forEach((answer) => {
const button = document.createElement("button");
  })


  //questionTitle.textContent = question.ask;
  //console.log(question.ask);
  //console.log(question.correct);
  //console.log(question.choices);
  //for (i = 0; i < userOptions.length; i++) {
   // let btn = document.createElement("button");
   // btn.textContent = userOptions[i];
  //  btn.classList.add("button");
    //btn.addEventListener("click", choiceSelect);
   // document.body.appendChild(btn);

   // function choiceSelect(event) {
      //let selected = event.target.textContent;
    //  let answer = question.correct;
    //  if (selected === answer) {
    //    btn.setAttribute("style", "color:green");
     // } else {
      //  btn.setAttribute("style", "color:red");
     // }
     // if (questionIndex < questions.length) {
      //  questions.shift();
      //  console.log(questions);
     //   nextQuestion();
     // } else if (questionIndex === questions.length) {
    //  }
   // }
 // }
}

function nextQuestion() {
  renderQuestion();
}
