var startButton = document.querySelector('#start-button');
var timerEl = document.querySelector('#timer');
var count;
var timerCount = 60;
var question;
startScore = 60;
var currentQuestionIndex = 0;

// Functions
var questions = [
    {
        question: "Which one is used for an array?",
        answers: {
            a: 'Brackets',
            b: 'Parenthesis',
            c: 'Curly Braces',
            d: 'Loop',
        }, correctAnswer: 'Brackets'
    },
    {
        question: "Which of the following is used for a string?",
        answers: {
            a: 'Curly Brackets',
            b: 'Quotes',
            c: 'Parentheses',
            d: 'Square Brackets'
        }, correctAnswer: 'Quotes'
    },
    {
        question: "Which data types do you NOT use in JavaScripts?",
        answers: {
            a: 'Strings',
            b: 'Numbers',
            c: 'Boolean',
            d: 'If/Else Statement'
        }, correctAnswer: "If/Else Statement"
    },
    {
        question: "Which operator is used for addition?",
        answers: {
            a: '=',
            b: '+',
            c: '*',
            d: '/',
        }, correctAnswer: '+'
    },
    {
        question: "Which is used for printing on the console?",
        answers: {
            a: 'Number',
            b: 'print',
            c: 'String',
            d: 'console.log',
        }, correctAnswer: 'console.log'
    },
];

// Start Game
function startGame() {
    startButton.remove();
    var currentQuestion = questions[currentQuestionIndex];
    displayQuestion(currentQuestion);
    timer();
};

// Timer Function
function timer() {
    count = setInterval(function () {
        timerCount--;
        timerEl.textContent =  timerCount + ' Seconds';
        if (timerCount <= 0) {
            clearInterval(count);
            endGame()
        }
    }, 1000)
    return timerCount;

}

// Function for the questions in quiz
function displayQuestion(question) {
    
    var questionElem = document.createElement('h2');

    // Main question
    questionElem.textContent = question.question;
    document.getElementById('question-container').innerHTML = "";
    
    // option 1 
    var btnAnswer1 = document.createElement('button');
    btnAnswer1.textContent = questions[currentQuestionIndex].answers.a;
    document.getElementById('answer1').innerHTML = "";
    
    // option 2
    var btnAnswer2 = document.createElement('button');
    btnAnswer2.textContent = questions[currentQuestionIndex].answers.b;
    document.getElementById('answer2').innerHTML = "";
    
    // option 3
    var btnAnswer3 = document.createElement('button');
    btnAnswer3.textContent = questions[currentQuestionIndex].answers.c;
    document.getElementById('answer3').innerHTML = "";
    
    // option 4
    var btnAnswer4 = document.createElement('button');
    btnAnswer4.textContent = questions[currentQuestionIndex].answers.d;
    document.getElementById('answer4').innerHTML = "";
   
    //  Append After creating
    document.getElementById('question-container').append(questionElem);
    document.getElementById('answer1').appendChild(btnAnswer1);
    document.getElementById('answer2').appendChild(btnAnswer2);
    document.getElementById('answer3').appendChild(btnAnswer3);
    document.getElementById('answer4').appendChild(btnAnswer4);

    // Click event to check for answers matches user picked one
    btnAnswer1.onclick = checkAnswer;
    btnAnswer2.onclick = checkAnswer;
    btnAnswer3.onclick = checkAnswer;
    btnAnswer4.onclick = checkAnswer;
};

// Check Answer
function checkAnswer(event) {
    console.log(event.target.textContent);
    if (questions[currentQuestionIndex].correctAnswer !== event.target.textContent) {
        timerCount = timerCount - 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        endGame();
    } else {
        displayQuestion(questions[currentQuestionIndex])
    }
}

// ends game and redirects to scores
function endGame() {
    var timeScore = startScore - timerCount
    localStorage.setItem('score', JSON.stringify(timeScore))
    
    window.location.href = "scores.html"
}

// click event to start game
startButton.addEventListener('click', startGame);