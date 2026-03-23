function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    // Mark complete on click
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    // Delete button
    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}