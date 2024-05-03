const todoForm = document.getElementById('todo-form');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-container">
                <div class="task-header">
                    <span class="task-title">${task.title}</span>
                    <button class="edit-btn" onclick="editTaskDetails(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                </div>
                <div class="task-details">
                    <span class="task-details-content" id="details-${index}">${task.details}</span>
                </div>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function editTaskDetails(index) {
    const newDetails = prompt('Enter new details:');
    if (newDetails !== null) {
        tasks[index].details = newDetails;
        renderTasks();
    }
}

function addTask(event) {
    event.preventDefault();
    const titleInput = document.getElementById('task-title');
    const detailsInput = document.getElementById('task-details');
    const title = titleInput.value;
    const details = detailsInput.value;
    if (title.trim() !== '') {
        tasks.push({ title, details });
        renderTasks();
        titleInput.value = '';
        detailsInput.value = '';
    } else {
        alert('Please enter a task title.');
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

todoForm.addEventListener('submit', addTask);

renderTasks();