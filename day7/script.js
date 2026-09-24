let playerHealth = 100;
const damageAmount = 30;

function takeDamage() {
    playerHealth = playerHealth - damageAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");
    const button = document.querySelector("button");

    if (playerHealth > 0) {
        healthText.innerText = playerHealth;
        statusText.innerText = "You've been hit!";
        statusText.style.color = "#a35f48";
    } else {
        healthText.innerText = 0;
        statusText.innerText = "Game Over!";
        statusText.style.color = "#ef5a49";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#743939";

        button.disabled = true;
        button.innerText = "Game Over";
    }
}