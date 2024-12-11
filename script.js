const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
    const taskText = inputBox.value.trim(); // Trim whitespace from the input
    if (taskText === "") {
        alert("Please enter a task.");
    } else {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <span onclick="deleteTask(this)">×</span>`;
        listContainer.appendChild(li);
        saveTask();
    }
    inputBox.value = ""; // Clear the input field after adding the task
}

function deleteTask(element) {
    element.parentElement.remove();
    saveTask();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }
});

function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const savedTasks = localStorage.getItem("data");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}
