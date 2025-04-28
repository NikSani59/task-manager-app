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
            <span id="task-${index}">${task}</span>
            <button onclick="editTask(${index})" id="editBtn">Edit</button>
            <button onclick="deleteTask(${index})" id="deleteBtn">Delete</button>
    </li>`;
    });

}
async function deleteTask(index) {
    await fetch(`/tasks/${index}`, {
        method: 'DELETE'
    });
    await loadTasks();
}
loadTasks();
