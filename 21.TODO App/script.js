const input = document.querySelector(".task-input");
const taskContainer = document.querySelector(".task-container");

function addTask() {
    taskContainer.innerHTML += `<p> ${input.value} </p>`;
    input.value = "";
}