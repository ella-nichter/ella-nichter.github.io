let playerHealth = 100;
const damageAmount = 30;

function takeDamage (){
    playerHealth = playerHealth - damageAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

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
        statusText.style.color = "#ef5a49";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = #743939

        document.querySelector("button").diabled = true;
        document.querySelector("button").innerText = "Dead";
    }

}