let playerHealth = 100;
const damageAmount = 30;

function takeDamage (){
    playerHealth = playerHealth - damageAmount;

    const healthText = document.get.ElementById("health-display");
    const statusText = document.get.ElementById("status-message");

    healthText.innerText = playerHealth;
}