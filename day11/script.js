let score = 0;
let timeLeft = 10;
let timerId = null;

const timeDisplay = document.getElementById("time-display");
const scoreDisplay = document.getElementById("score-display");
const targetElement = document.getElementById("target");
const startButton = document.getElementById("start-btn");

function startGame()
{
    score = 0;
    timeLeft = 10;
    scoreDisplay.innerText = score;
    timeDisplay.innerText = timeLeft;

    startButton.disabled = true;
    targetElement.style.display = "block";

    timerId = setInterval(countdown, 1000);
}

function countdown() 
{
    timeLeft--; //timeLeft = timeLeft - 1;
    timeDisplay.innerText = timeLeft;
}

function hitTarget()
{
    score++;    //score = score + 1;
    scoreDisplay.innerText = score;
}