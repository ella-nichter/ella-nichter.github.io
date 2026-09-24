let checkingAccount = 100;
const transactionAmount = 5;

function deposit() {
    checkingAccount = checkingAccount + transactionAmount;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");
    const withdrawbutton = document.querySelector("withdraw-button");

    moneyText.innerText = "Current Balance: $" + checkingAccount;
    statusText.innerText = "$5 deposited!";

    withdrawButton.disabled = false;
    document.body.style.backgroundColor = "#f3eee7"; 

    if (checkingAccount > 0) {
        healthText.innerText = playerHealth;
        statusText.innerText = "Money Withdrawn";
        statusText.style.color = "#a35f48";
    } else {
        healthText.innerText = 0;
        statusText.innerText = "Withdrawal Limit Exceeded!";
        statusText.style.color = "#ef5a49";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#743939";
    }
}


function withdraw() {
    checkingAccount = checkingAccount - transactionAmount;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");
    const withdrawButton = document.getElementById("withdraw-button");

    if (checkingAccount > 0) {
        moneyText.innerText = "Current Balance: $" + checkingAccount;
        statusText.innerText = "$5 withdrawn!";
        statusText.style.color = "#a35f48";
    } else {
        checkingAccount = 0;
        moneyText.innerText = "Current Balance: $0";
        statusText.innerText = "Withdrawal limit exceeded!";
        statusText.style.color = "#ef5a49";
        statusText.style.fontWeight = "bold";

        withdrawButton.disabled = true;
        document.body.style.backgroundColor = "#743939";
    }
}