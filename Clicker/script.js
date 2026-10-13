let linesOFCode = 0;

let clickPower = 1;
let upgradeCost = 50;

let interns = 0;
let internsCost = 100;

function writeCode() 
{
    linesOFCode = linesOFCode + clickPower;
    updateScreen();
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesOFCode + " lines of code";
}

