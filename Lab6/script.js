const encouragementButton = document.getElementById("encouragement-button");
const welcomeMessage = document.getElementById("welcome-message");

const messages = [
  "You belong here. Go make today count!",
  "One small step today can lead to a huge win tomorrow.",
  "You have the tools, talent, and support to succeed.",
  "Keep showing up for your goals. You’ve got this, Gamecock!"
];

let currentMessage = 0;

encouragementButton.addEventListener("click", function () {
  welcomeMessage.textContent = messages[currentMessage];

  currentMessage = currentMessage + 1;

  if (currentMessage === messages.length) {
    currentMessage = 0;
  }
});