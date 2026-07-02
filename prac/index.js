const form = document.querySelector('form');
const tasklist = document.getElementById("task-list");

form.addEventListener("submit", function (event){
    event.preventDefault();
    const taskInput = document.getElementById("task-name").value.trim();
    const taskdescription = document.getElementById("new-task").value.trim();

    if(taskInput === "" || taskdescription === ""){
        alert("Please fill in both fields.");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = `<strong>${taskInput}</strong>: ${taskdescription}`;
    li.appendChild(span);

    tasklist.appendChild(li);

    form.reset();
});