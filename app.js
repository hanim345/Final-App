const newTask = document.getElementById('newTask');
const addBtn = document.getElementById('addBtn');
const taskCount = document.getElementById('taskCount');
const taskList = document.getElementById('taskList');

let taskCounter = taskList.children.length;

function updateTaskCount() {
    taskCount.textContent = taskCounter;
}

updateTaskCount();

addBtn.addEventListener('click', () => {
    const taskText = newTask.value.trim();
    
    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }
    
    const listItem = document.createElement('li');
    listItem.classList.add('taskText');
    
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('checkBox');
    const taskContentSpan = document.createElement('span');
    taskContentSpan.textContent = taskText;
    taskContentSpan.classList.add('checkBox-taskText');

    checkBox.addEventListener('change', () => {
        taskContentSpan.classList.toggle('completed');
    });

    const buttonContainer = document.createElement('span');
    buttonContainer.classList.add('button-container');
    
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.classList.add('edit-btn');
    editBtn.title = 'Edit task';
    
    editBtn.addEventListener('click', () => {
        const currentText = taskContentSpan.textContent;
        const newText = prompt('Edit your task:', currentText);
        
        if (newText !== null && newText.trim() !== '') {
            taskContentSpan.textContent = newText.trim();
        } else if (newText !== null && newText.trim() === '') {
            alert('Task cannot be empty!');
        }
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.title = 'Delete task';
    
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
        taskCounter--;
        updateTaskCount();
    });
    
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);
    
    listItem.appendChild(checkBox);
    listItem.appendChild(taskContentSpan);
    listItem.appendChild(buttonContainer);
    taskList.appendChild(listItem);
    
    taskCounter++;
    updateTaskCount();
    
    newTask.value = '';
});
