let checkingAccount = 100;
const withdrawAmount = 5;

function moveMoney() {
    checkingAccount = checkingAccount - withdrawAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");
    const button = document.querySelector("button");

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

        button.disabled = true;
        button.innerText = "Out of Money";
    }
}