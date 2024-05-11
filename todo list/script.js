document.getElementById('add-task-btn').addEventListener('click', function() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }
    
    var listItem = document.createElement('li');
    listItem.textContent = taskInput.value;
    
    listItem.addEventListener('click', function() {
        this.style.textDecoration = this.style.textDecoration === 'line-through' ? '' : 'line-through';
    });
    
    taskList.appendChild(listItem);
    taskInput.value = '';
});