document.addEventListener("DOMContentLoaded", () => {
  // grab the form element
  const form = document.getElementById("create-task-form");

  // listen for the form submission event
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the form from submitting and refreshing the page
    const taskDescription = event.target["new-task-description"].value; // grab the value of the task input field

    // create new task item
    const taskItem = document.createElement("li");
    taskItem.innerText = taskDescription;

    // append the task item to the list
    const taskList = document.getElementById("tasks");
    taskList.appendChild(taskItem);

    // clear the task input field
    event.target["new-task-description"].value = "";
  });
});
