var initialsInput = document.getElementById('initials');
var para = document.querySelector('p');
var submit = document.getElementById('submit');
var scoredTime = document.getElementById('results')
var userInitials = document.getElementById('initials');
var highScores;
var userScore = localStorage.getItem('score');
scoredTime.textContent = userScore;

function displayHighscore() {

    for (var i = 0; i < highScores.length; i++) {
        var addedScores = highScores[i];
        var h3 = document.createElement('h3');
        h3.textContent = addedScores.initials + ': ' + addedScores.score;
        
        scoredTime.appendChild(h3);
    }
};

submit.addEventListener('click', function (event) {
    event.preventDefault();

    if (initialsInput.value === '') {
        alert('Enter your name')
        return;
    }

    var userInitials = initialsInput.value;

    highScores = JSON.parse(localStorage.getItem('highScores'));
    if (highScores == null) {
        highScores = [];
    }

    highScores.push({ initials: userInitials, score: userScore });
    localStorage.setItem('highScores', JSON.stringify(highScores))
   
    displayHighscore()
});
