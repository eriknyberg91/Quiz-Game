const textTest = document.getElementById("quiz-question");
const questionanswerBox = document.getElementById("question-answer-box");
const questionAsked = document.getElementById("quiz-question");
const firstAnswer = document.getElementById("answer-button-one");
const secondAnswer = document.getElementById("answer-button-two");
const thirdAnswer = document.getElementById("answer-button-three");
const fourthAnswer = document.getElementById("answer-button-four");
const optionButtons = document.getElementById("quiz-options");
let currentQuestionIndex = 0;


const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-question");
const previousButton = document.getElementById("previous-question");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextButtonAddIndex);
previousButton.addEventListener("click", previousButtonMinusIndex);

function startGame() {
  startButton.style.display = "none"; //classlist funkar ej?
  questionanswerBox.classList.remove("hide");
  previousButton.classList.remove("hide");
  nextButton.classList.remove("hide");
  
  showQuestions();
  showAnswers();
}

function showQuestions() {
  questionAsked.innerText = `${questions[currentQuestionIndex].question}`;
}

function showAnswers() {
  firstAnswer.innerText = questions[currentQuestionIndex].answers[0].text
  secondAnswer.innerText = questions[currentQuestionIndex].answers[1].text
  thirdAnswer.innerText = questions[currentQuestionIndex].answers[2].text
  fourthAnswer.innerText = questions[currentQuestionIndex].answers[3].text
}

function nextButtonAddIndex() {
  currentQuestionIndex++;
  showQuestions();
  showAnswers();
}

function previousButtonMinusIndex() {
  currentQuestionIndex--;
  showQuestions();
  showAnswers();
}


const questions = [
  {
    question: "What is 4 * 5?",
    answers: [
      { text: "9", correct: false },
      { text: "18", correct: false },
      { text: "10", correct: false },
      { text: "20", correct: true },
    ],
  },
  {
    question: "What is a second question?",
    answers: [
      { text: "Yes", correct: false },
      { text: "No", correct: false },
      { text: "Maybe", correct: false },
      { text: "Why?", correct: true },
    ],
  },
];
console.log(questions);
console.log(questions[currentQuestionIndex].question)
console.log(questions[currentQuestionIndex].answers)





