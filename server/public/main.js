const form = document.querySelector('.task-form');
const list = document.querySelector('.task-list');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const task = document.querySelector('.task-input').value;
    try {
        await fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: task })
        });
        document.querySelector('.task-input').value = '';
        await loadTasks();
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('Task cannot be empty');
    }
});
async function loadTasks() {
    const res = await fetch('/tasks');
    const data = await res.json();
    list.innerHTML = '';
    data.forEach((task) => {
        list.innerHTML += `
          <li class="task-item">
            <input type="checkbox" class="task-checkbox" id="task-checkbox-${task._id}">
            <span id="task-${task._id}" class="task-text">${task.name}</span>
            <button onclick="editTask('${task._id}')" id="editBtn-${task._id}">Edit</button>
            <button onclick="deleteTask('${task._id}')" id="deleteBtn-${task._id}">Delete</button>
          </li>`;
});
};
function checkTask(_id) {
    const taskElement = document.querySelector(`#task-${_id}`).value;
    const checkbox = document.querySelector(`.task-checkbox-${_id}`);
    if (checkbox.checked) {
        taskElement.style.textDecoration = 'line-through';
    }
}
function editTask(_id) {
    const taskElement = document.querySelector(`#task-${_id}`);
    const taskText = taskElement.innerText;

    document.getElementById(`deleteBtn-${_id}`).style.display = 'none';
    document.getElementById(`editBtn-${_id}`).style.display = 'none';
    document.querySelector(`#task-checkbox-${_id}`).style.display = 'none';


    taskElement.innerHTML = `
        <div class="edit-container">
            <input type="text" id="editInput-${_id}" value="${taskText}">
            <button onclick="saveTask('${_id}')" class="edit-buttons" id="saveBtn">Save</button>
            <button onclick="cancelTask('${_id}', '${taskText}')" class="edit-buttons" id="cancelBtn">Cancel</button>
        </div>
    `;
}
async function saveTask(_id) {
    const newTask = document.getElementById(`editInput-${_id}`).value;
    await fetch(`/tasks/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newTask })
    });
    await loadTasks();
}
function cancelTask(_id, currentTask) {
    const taskElement = document.getElementById(`task-${_id}`);
    taskElement.innerHTML = currentTask;
    document.getElementById(`deleteBtn-${_id}`).style.display = 'block';
    document.getElementById(`editBtn-${_id}`).style.display = 'block';
    document.querySelector(`#task-checkbox-${_id}`).style.display = 'block';
}
async function deleteTask(_id) {
    await fetch(`/tasks/${_id}`, {
        method: 'DELETE'
    });
    await loadTasks();
}
loadTasks();
