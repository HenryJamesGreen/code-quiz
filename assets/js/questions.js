let currentQuestion = 0;
const questions = [
  {
    text: "What method do you use in order to set up a function that will be called whenever the specified event is delivered to the target?",
    answers: [
      { text: "addEventCaller()", value: 0, dataIndex: "Wrong" },
      { text: "addEventID", value: 0, dataIndex: "Wrong" },
      { text: "addEventListen()", value: 0, dataIndex: "Wrong" },
      { text: "addEventListener()", value: 0, dataIndex: "Correct" },
    ],
  },
  {
    text: "How do you add single line comments in JavaScript code?",
    answers: [
      { text: "Using // before a comment", value: 0, dataIndex: "Correct" },
      { text: "Using // after a comment", value: 0, dataIndex: "Wrong" },
      { text: "Using ** before a comment", value: 0, dataIndex: "Wrong" },
      { text: "Using ** after a comment", value: 0, dataIndex: "Wrong" },
    ],
  },
  {
    text: "Inside what tag do you write the JavaScript location in HTML?",
    answers: [
      { text: "<js>", value: 0, dataIndex: "Wrong" },
      { text: "<script>", value: 0, dataIndex: "Correct" },
      { text: "<java>", value: 0, dataIndex: "Wrong" },
      { text: "<jshere>", value: 0, dataIndex: "Wrong" },
    ],
  },
  {
    text: "How do you add mulitple line comments in JavaScript code?",
    answers: [
      {
        text: "wrapping them in curly braces ({ })",
        value: 0,
        dataIndex: "Wrong",
      },
      {
        text: "wrapping them in slashes and asterisks (/* */)",
        value: 0,
        dataIndex: "Correct",
      },
      {
        text: "wrapping them in asterisks (* *)",
        value: 0,
        dataIndex: "Wrong",
      },
      {
        text: "You can't add multiple lines of comments in JavaScript",
        value: 0,
        dataIndex: "Wrong",
      },
    ],
  },
  {
    text: "Which of the following is a correct way to add a class to a variable in JavaScript?",
    answers: [
      {
        text: "exampleVar.classList.add(exampleClass)",
        value: 0,
        dataIndex: "Correct",
      },
      {
        text: "exampleVar.classadd(exampleClass)",
        value: 0,
        dataIndex: "Wrong",
      },
      {
        text: "exampleVar.classList.plus(exampleClass)",
        value: 0,
        dataIndex: "Wrong",
      },
      {
        text: "exampleClass.classlist(exampleVar)",
        value: 0,
        dataIndex: "Wrong",
      },
    ],
  },
  {
    text: "Which of the following declares a function correctly?",
    answers: [
      { text: "function exampleOne {...}", value: 0, dataIndex: "Wrong" },
      { text: "funct exampleOne () {...}", value: 0, dataIndex: "Wrong" },
      { text: "exampleOne.function () {...}", value: 0, dataIndex: "Wrong" },
      { text: "function exampleOne () {....}", value: 0, dataIndex: "Correct" },
    ],
  },
];
