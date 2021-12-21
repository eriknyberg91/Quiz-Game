const textTest = document.getElementById('quiz-question')

const questionanswerBox = document.getElementById('question-answer-box')
const questionAsked = document.getElementById('quiz-question')
const answersGiven = document.getElementById('button')
const optionButtons = document.getElementById('quiz-options')
let currentQuestionIndex = 0;

const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-question')
const previousButton = document.getElementById('previous-question')
//nextButton.style.display = "none";
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextButtonAddIndex);
previousButton.addEventListener("click", previousButtonMinusIndex);

function startGame () {
    startButton.style.display = "none"; //classlist funkar ej?
    questionanswerBox.classList.remove ("hide");
    showQuestions();
    
}


function showQuestions () {
    questionAsked.innerText = `${questions[currentQuestionIndex].question}` 
}

function showAnswers () {
    
}

function nextButtonAddIndex () {
    currentQuestionIndex++;
    showQuestions();
}

function previousButtonMinusIndex () {
    currentQuestionIndex--;
    showQuestions();
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
    },
    {
        question: 'What is a second question?',
        answers: [
           { text: 'Yes', correct: false },
           { text: 'No', correct: false },
           { text: 'Maybe', correct: false },
           { text: 'Why?', correct: true }
        ]
    }
]

console.log(questions);

