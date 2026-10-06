const input = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const checklist = document.getElementById("checklist");
const taskCount = document.getElementById("task-count");
const emptyMessage = document.getElementById("empty-message");
const clearCompletedButton = document.getElementById("clear-completed");

function updateChecklist() {
  const tasks = checklist.querySelectorAll(".task-item");
  const completedTasks = checklist.querySelectorAll(".task-item.completed");

  taskCount.textContent = `${tasks.length} ${
    tasks.length === 1 ? "thing" : "things"
  } to do`;

  emptyMessage.hidden = tasks.length !== 0;
  clearCompletedButton.hidden = completedTasks.length === 0;
}

function addItem() {
  const itemText = input.value.trim();

  if (itemText === "") {
    input.focus();
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", `Mark ${itemText} complete`);

  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = itemText;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.setAttribute("aria-label", `Remove ${itemText}`);
  deleteButton.innerHTML = "&times;";

  checkbox.addEventListener("change", function () {
    listItem.classList.toggle("completed", checkbox.checked);
    updateChecklist();
  });

  deleteButton.addEventListener("click", function () {
    listItem.remove();
    updateChecklist();
  });

  listItem.append(checkbox, taskText, deleteButton);
  checklist.appendChild(listItem);

  input.value = "";
  input.focus();

  updateChecklist();
}

addButton.addEventListener("click", addItem);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

clearCompletedButton.addEventListener("click", function () {
  const completedTasks = checklist.querySelectorAll(".task-item.completed");

  completedTasks.forEach(function (task) {
    task.remove();
  });

  updateChecklist();
});

updateChecklist();