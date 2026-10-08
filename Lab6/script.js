const encouragementButton = document.getElementById("encouragement-button");
const welcomeMessage = document.getElementById("welcome-message");
const resourceTitle = document.getElementById("resource-title");
const resourceText = document.getElementById("welcome-heading");
const resourceButtons = document.querySelectorAll(".resource-button");

const portalSections = {
  welcome: {
    message: "Your campus, your resources, your future.",
    title: "Welcome, Gamecock!",
    text: "Welcome to your Gamecock Student Portal. Here at the University of South Carolina we care about our students and their individual success while priding ourselves in an inclusive and collaborative educational environment. Get started today!"
  },

  academics: {
    message: "Explore the academic tools that support your goals.",
    title: "Academics",
    text: "Your academic journey is unique. Use this portal to stay focused on your goals, explore majors and degree programs, connect with academic support, and make a plan for a successful semester."
  },

  athletics: {
    message: "Find your Gamecock spirit on and off the field.",
    title: "Athletics",
    text: "Gamecock athletics brings students together through pride, tradition, and competition. Follow your favorite teams, celebrate big wins, and find ways to be part of the energy that makes South Carolina game days special."
  },

  opportunities: {
    message: "Make your college experience your own.",
    title: "Personal Student Plans",
    text: "College is more than classes. Explore opportunities that help you grow through student organizations, career preparation, leadership, community involvement, wellness resources, and plans designed around your individual goals."
  }
};

let currentMessage = 0;

resourceButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const section = portalSections[button.dataset.section];

    welcomeMessage.textContent = section.message;
    resourceTitle.textContent = section.title;
    resourceText.textContent = section.text;

    resourceButtons.forEach(function (resourceButton) {
      resourceButton.classList.remove("active");
    });

    button.classList.add("active");
  });
});

const messages = [
  "You belong here. Go make today count!",
  "One small step today can lead to a huge win tomorrow.",
  "You have the tools, talent, and support to succeed.",
  "Keep showing up for your goals. You’ve got this, Gamecock!"
];

encouragementButton.addEventListener("click", function () {
  welcomeMessage.textContent = messages[currentMessage];

  currentMessage = currentMessage + 1;

  if (currentMessage === messages.length) {
    currentMessage = 0;
  }
});