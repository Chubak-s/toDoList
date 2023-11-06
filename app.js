function addTask(){
    let counter = 0;
    const taskText = document.querySelector('.inputTask');
    const tasksList = document.querySelector('.tasksList');
    const add = document.querySelector('.addBtn');
    add.addEventListener('click', Add);
    function Add(){
        counter++;
        const checkBtn = document.createElement('button')
        checkBtn.classList.add('checkBtn');
        const task = document.createElement('div');
        task.classList.add('text')
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerText = 'x';
        if (taskText.value!==""){
            const taskList = document.createElement('div');
            tasksList.prepend(taskList);
            taskList.classList.add('taskList');
            taskList.id = `${counter}`;
            task.innerText = taskText.value;
            taskList.appendChild(checkBtn);
            taskList.appendChild(task);
            taskList.appendChild(deleteBtn);
            taskText.value = '';
            console.log(taskList.id);
            deleteTask(taskList.id);
            checkedTask(taskList.id);
        }
    }
}

addTask();

function deleteTask(taskListID){
    const deleteBtn = document.getElementById(taskListID).querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', ()=> {
        const task = document.getElementById(taskListID);
        task.remove();
    })
}

function checkedTask(taskListID){
    const checkedTask = document.getElementById(taskListID).querySelector('.checkBtn');
    const checkedTaskText = document.getElementById(taskListID).querySelector('.text')
    checkedTask.addEventListener('click', doneTask);
    checkedTaskText.addEventListener('click', doneTask);
    function doneTask(){
        const task = document.getElementById(taskListID).querySelector('.text');
        task.classList.add('checkedText');
        checkedTask.classList.add('greenBtn');
    }
}

