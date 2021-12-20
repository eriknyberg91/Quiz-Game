const textTest = document.getElementById('quiz-question')

const questionanswerBox = document.getElementById('question-answer-box')
const questionAsked = document.getElementById('quiz-question')
const answersGiven = document.getElementById('button')
const optionButtons = document.getElementById('quiz-options')
let currentQuestionIndex = 0;

const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
//nextButton.style.display = "none";
startButton.addEventListener("click", startGame);

function startGame () {
    startButton.style.display = "none"; //classlist funkar ej?
    questionanswerBox.classList.remove ("hide");
    showQuestions();
    showAnswers();
}


function showQuestions () {
    questionAsked.innerText = `${questions[0].question}` 
}

function showAnswers () {
    
}

const questions = [
    {
        question: 'What is 4 * 5?',
        answers: [
           { text: '9', correct: false },
           { text: '18', correct: false },
           { text: '10', correct: false },
           { text: '20', correct: true }
        ]
    }
]


