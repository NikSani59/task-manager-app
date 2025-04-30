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
            body: JSON.stringify({ task })
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
    data.forEach((task, index) => {
        list.innerHTML += `
        <li class="task-item">
            <input type="checkbox" id="task-checkbox-${index}" class="task-checkbox">
            <span id="task-${index}" class="task-text">${task}</span>
            <button onclick="editTask(${index})" id="editBtn">Edit</button>
            <button onclick="deleteTask(${index})" id="deleteBtn">Delete</button>
    </li>`;
    });
}
function checkTask(index) {
    const taskElement = document.querySelector(`#task-${index}`).value;
    const checkbox = document.querySelector(`.task-checkbox-${index}`);
    if (checkbox.checked) {
        taskElement.style.textDecoration = 'line-through';
    }
}
function editTask(index) {
    const taskElement = document.querySelector(`#task-${index}`);
    const taskText = taskElement.innerText;

    document.getElementById('deleteBtn').style.display = 'none';
    document.getElementById('editBtn').style.display = 'none';
    document.getElementsByClassName('task-checkbox')[index].style.display = 'none';


    taskElement.innerHTML = `
        <input type="text" id="editInput-${index}" value="${taskText}">
        <button onclick="saveTask(${index})" class="edit-buttons" id="saveBtn">Save</button>
        <button onclick="cancelTask(${index}, '${taskText}')" class="edit-buttons" id="cancelBtn">Cancel</button>
    `;
}
async function saveTask(index) {
    const newTask = document.getElementById(`editInput-${index}`).value;
    await fetch(`/tasks/${index}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: newTask })
    });
    await loadTasks();
}
function cancelTask(index, currentTask) {
    const taskElement = document.getElementById(`task-${index}`);
    taskElement.innerHTML = currentTask;
    deleteBtn = document.getElementById('deleteBtn').style.display = 'block';
    editBtn = document.getElementById('editBtn').style.display = 'block';
    document.getElementsByClassName('task-checkbox')[index].style.display = 'block';
}
async function deleteTask(index) {
    await fetch(`/tasks/${index}`, {
        method: 'DELETE'
    });
    await loadTasks();
}
loadTasks();
