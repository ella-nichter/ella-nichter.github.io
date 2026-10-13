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

function buyKeyboard()
{
    if(linesOFCode >= upgradeCost)
    {
        linesOFCode = linesOFCode - upgradeCost;
        clickPower = clickPower + 1;
        upgradeCost = upgradeCost * 1.5;
        updateScreen();
    }
}


function buyIntern()
{
    if(linesOFCode >= internsCost)
    {
        linesOFCode = linesOFCode - internsCost;
        interns = interns + 1;
        internsCost = internsCost * 1.5;
        updateScreen();
    }
}
function updateScreen()
{
    document.getElementById("score-display").innerText = linesOFCode + " lines of code";

    document.getElementById("power-display").innerText - clickPower;
    document.getElementById("cost-display").innerText - upgradeCost;

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("intern-display-cost").innerText = internsCost;
}

setInterval(function() {
    if(interns > 0)
    {
        linesOFCode = linesOFCode + interns;
        updateScreen();
    }
},
1000

);
