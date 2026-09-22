let playerHealth = 100;
const damageAmount = 30;

function takeDamage (){
    playerHealth = playerHealth - damageAmount;

    const healthText = document.get.ElementById("health-display");
    const statusText = document.get.ElementById("status-message");

    healthText.innerText = playerHealth;

    if(playerHealth > 0)
    {
        healthText.innerText = playerHealth;
        statusText.innerText = "You've been hit!";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "Game Over!";
    }

}