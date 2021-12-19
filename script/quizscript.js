const textTest = document.getElementById('quiz-question')
const buttonTest = document.getElementById('option-one')
const questionanswerBox = document.getElementById('question-answer-box')
textTest.innerText = "This would be a question"
buttonTest.innerText = "This would be a answer"

const startButton = document.getElementById('start-button')

startButton.addEventListener("click", startGame);

function startGame () {
    startButton.style.display = "none"; //classlist funkar ej?
    questionanswerBox.classList.remove ("hide");
}