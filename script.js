document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }

  // Event listener for "Add Task" button click
  addTaskBtn.addEventListener("click", addTask);

  // Event listener for pressing Enter key
  taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Event delegation for marking a task as completed
  taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("completed");
    }
  });
});
