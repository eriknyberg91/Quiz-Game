const textTest = document.getElementById("quiz-question");
const questionanswerBox = document.getElementById("question-answer-box");
const questionAsked = document.getElementById("quiz-question");
const firstAnswer = document.getElementById("answer-button-one");
const secondAnswer = document.getElementById("answer-button-two");
const thirdAnswer = document.getElementById("answer-button-three");
const fourthAnswer = document.getElementById("answer-button-four");
const optionButtons = document.getElementById("quiz-options");

let currentQuestionIndex = 0;
let currentAnswerIndex = 0;
let userScore = 0;

const startButton = document.getElementById("start-button");

const resultButton = document.getElementById("show-results")

const quizModal = document.getElementById("quiz-game-modal")
const closeModal = document.getElementById("close")
const modalHeader = document.getElementById("modal-text-header")
const modalText = document.getElementById("modal-text-paragraph")
const closeModalButton = document.getElementById("close-modal")

startButton.addEventListener("click", startGame);
resultButton.addEventListener("click", thanksForPlaying)
closeModal.addEventListener("click", exitModalWindow)
closeModalButton.addEventListener("click", exitModalWindow)

function startGame() {
  startButton.classList.add("hide"); 
  questionanswerBox.classList.remove("hide");
  currentQuestionIndex = 0;
  currentAnswerIndex = 0;
  userScore = 0;
  showQuestions();
  showAnswers();
}

firstAnswer.addEventListener('click', (e) => {
  currentAnswerIndex = 0;
  if (questions[currentQuestionIndex].answers[currentAnswerIndex].correct === true) {

    currentQuestionIndex++;
    userScore++;
    checkGameStatus();
    showQuestions();
    showAnswers();
    
  }
  else {

    currentQuestionIndex++;
    checkGameStatus();
    showQuestions();
    showAnswers();
    
  }
})

secondAnswer.addEventListener('click', (e) => {
  currentAnswerIndex = 1;
  if (questions[currentQuestionIndex].answers[currentAnswerIndex].correct === true) {

    currentQuestionIndex++;
    userScore++;
    checkGameStatus();
    showQuestions();
    showAnswers();
    
  }
  else {

    currentQuestionIndex++;
    checkGameStatus();
    showQuestions();
    showAnswers();
    
  }
})

thirdAnswer.addEventListener('click', (e) => {
  currentAnswerIndex = 2;
  if (questions[currentQuestionIndex].answers[currentAnswerIndex].correct === true) {
    currentQuestionIndex++;
    userScore++;
    checkGameStatus();
    showQuestions();
    showAnswers();
    
  }
  else {
    currentQuestionIndex++;
    checkGameStatus();
    showQuestions();
    showAnswers();
    
  }

})
fourthAnswer.addEventListener('click', (e) => {
  currentAnswerIndex = 3;
  if (questions[currentQuestionIndex].answers[currentAnswerIndex].correct === true) {
    currentQuestionIndex++;
    userScore++;
    checkGameStatus();
    showQuestions();
    showAnswers();
    
  }
  else {
    currentQuestionIndex++;
    checkGameStatus();
    showQuestions();
    showAnswers();
    
  }
})


function showQuestions() {
  questionAsked.innerText = `${questions[currentQuestionIndex].question}`;
}

function showAnswers() {
  firstAnswer.innerText = questions[currentQuestionIndex].answers[0].text
  secondAnswer.innerText = questions[currentQuestionIndex].answers[1].text
  thirdAnswer.innerText = questions[currentQuestionIndex].answers[2].text
  fourthAnswer.innerText = questions[currentQuestionIndex].answers[3].text
}



function checkGameStatus () {
  if(currentQuestionIndex >= questions.length) {
    questionanswerBox.classList.add("hide");
    resultButton.classList.remove("hide");
    previousButton.classList.add("hide");
    nextButton.classList.add("hide");
  }
}

function thanksForPlaying (){
  quizModal.style.display = "block";
  modalHeader.innerText = "Thank you for playing the Quiz-Game!"
  modalText.innerText = "Your results are: " + userScore + " points out of " + questions.length + "."
  resultButton.classList.add("hide");
  startButton.classList.remove("hide");


}

function exitModalWindow () {
  quizModal.style.display = "none";
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
    question: "What is 100 / 4?",
    answers: [
      { text: "22", correct: false },
      { text: "33", correct: false },
      { text: "50", correct: false },
      { text: "25", correct: true },
    ],
  },
  {
    question: "What is 33 * 3?",
    answers: [
      { text: "999", correct: false },
      { text: "99", correct: true },
      { text: "66", correct: false },
      { text: "5", correct: false },
    ],
  }, 
];






