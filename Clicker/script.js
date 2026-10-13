let linesOFCode = 0;

let clickPower = 1;
let upgradeCost = 50;

let intern = 0;
let internCost = 100;

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
    if(linesOFCode >= internCost)
    {
        linesOFCode = linesOFCode - internCost;
        intern = intern + 1;
        internCost = internCost * 1.5;
        updateScreen();
    }
}
function updateScreen()
{
    document.getElementById("score-display").innerText = linesOFCode + " lines of code";

    document.getElementById("power-display").innerText - clickPower;
    document.getElementById("cost-display").innerText - upgradeCost;

    document.getElementById("intern-display").innerText = intern;
    document.getElementById("intern-display-cost").innerText = internCost;
}

setInterval(function() {
    if(intern > 0)
    {
        linesOFCode = linesOFCode + intern;
        updateScreen();
    }
},
1000

);
