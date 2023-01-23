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
    question.choices.forEach(element=> { 
        let btn = document.createElement('button');
        btn.innerHTML = element;
        document.body.appendChild(btn);
      });
    
  }

displayChoices.addEventListener("click", function (event) {
    for(i = 0; i < choices.length; i++) {
        
    }
});