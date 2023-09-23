function addTask() {
    var taskInput = document.getElementById('task');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskInput.value}
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function removeTask(button) {
    var listItem = button.parentElement;
    listItem.remove();
}
