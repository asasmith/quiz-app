const data = [
  {
    question: 'how old is the solar system?',
    correctAnswer: answerChoices[2],
    answerChoices: ['2000 years', '100 days', '4.6 billion years', '1 million years'],
  },
  {
    question: 'what is the largest planet in the solar system?',
    correctAnswer: answerChoices[0],
    answerChoices: ['jupiter', 'the sun', 'io', 'mars'],
  },
  {
    question: 'how much of the solar sytem\'s mass is contained in the sun?',
    correctAnswer: answerChoices[1],
    answerChoices: ['1%', '99.86%', '70.2%', '25.5%'],
  },
  {
    question: 'where is the largest volcano located?',
    correctAnswer: answerChoices[3],
    answerChoices: ['earth', 'europa', 'the sun', 'mars']
  },
  {
    question: 'what is the name of the galaxy our solar system is located in',
    correctAnswer: answerChoices[2],
    answerChoices: ['the baby ruth galaxy', 'the snickers galaxy', 'the milky way galaxy', 'the kit kat galaxy']
  },
]

let currentQuestion = 0
let correct = 0
let incorrect = 0

const quiz = document.querySelector('form')
const start = document.querySelector('button')
const questionContainer = document.getElementById('question-container')

start.addEventListener('click', loadQuiz)

function loadQuiz () {
  nextQuestion(data[currentQuestion].answerChoices)
  start.parentElement.removeChild(start) // remove start button once the quiz starts
}

function nextQuestion (optionsArr) {
  const questionNumber = document.createElement('p')
  const question = document.createElement('p')

  const correctAnswers = questionContainer.getElementById('correct')
  const incorrectAnswers = questionContainer.getElementById('incorrect')

  questionNumber.innerHTML = ''
  questionNumber.innerHTML = `question # ${currentQuestion + 1} out of ${data.length}`

  questionContainer.innerHTML = ''
  question.innerHTML = `${data[currentQuestion].question}?`

  correctAnswers.innerHTML = ''
  incorrectAnswers.innerHTML = ''
  correctAnswers.innerHTML = `correct ${correct}`
  incorrectAnswers.innerHTML = `incorrect ${incorrect}`

  questionContainer.appendChild(questionNumber)
  questionContainer.appendChild(question)

  optionsArr.forEach(option => {
  let input = document.createElement('input')
  let label = document.createElement('label')
  input.setAttribute('onchange', 'submitAnswer()')
  input.type = 'radio'
  input.value = option
  label.innerHTML = option
  questionContainer.appendChild(input)
  questionContainer.appendChild(label)
 data[currentQuestion].correctAnswer });
}

// define submit function and action
function submitAnswer () {
  let value = document.querySelector('input[type="radio"]:checked').value

  if (value === data[currentQuestion].correctAnswer) {
    correct++
    results('CORRECT')
    currentQuestion++
  } else {
    incorrect++
    results(`the correct answer was ${data[currentQuestion].correctAnswer}`)
    currentQuestion++
  }

  if (currentQuestion < data.length) {
    // value === data[currentQuestion].correctAnswer ? correct++ : incorrect++
  }

  currentQuestion < data.length ? nextQuestion(data[currentQuestion].answerChoices) : console.log('the end')
}

function results (result) {
  let responseDiv = document.querySelector('#results-container h1')

  responseDiv.innerHTML = result

  setTimeout(function () {
    responseDiv.innerHTML = ''
  }, 1500)
}
