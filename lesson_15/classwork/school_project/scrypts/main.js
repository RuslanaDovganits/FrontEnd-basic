const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const all = document.getElementById('all');
const completed = document.getElementById('completed');
const uncompleted = document.getElementById('uncompleted');
const completeTask = document.querySelector('list-item');

createTask.addEventListener('click', buttonClickHandler);
const allTasksInObj = [];

function buttonClickHandler() {
    let newTaskInObj = {};
    newTaskInObj.name = inputTask.value;
    newTaskInObj.isDone = false;
    allTasksInObj.push(newTaskInObj);
    inputTask.value = '';
    showTasksOnPage();
}


function showTasksOnPage() {
    const newNewArray = allTasksInObj.map((item) => {
        const newTasks = document.createElement('li');
        newTasks.classList.add('list-item');
        newTasks.textContent = item.name;
        newTasks.addEventListener('click', taskHandler);
        return newTasks;
    })
     
    createList.innerHTML = '';
createList.append(...newNewArray);
}


function taskHandler(event) {
event.target.classList.toggle('list-item_done');


}

function showTasks(...array) {
    createList.innerHTML = '';
    createList.append(...array);
}


// createTask.addEventListener('click', buttonClickHandler);
// const tasks = []
// function buttonClickHandler() {
//     const newTasks = document.createElement('li');
//     newTasks.classList.add('list-item');
//     newTasks.textContent = inputTask.value;
//     newTasks.addEventListener('click', taskHandler);
//     tasks.push(newTasks);
//     showTasks(tasks);
//     inputTask.value = '';
// }




all.addEventListener('click', () => filterTaskHandler('all'));
completed.addEventListener('click', () => filterTaskHandler('completed'));

uncompleted.addEventListener('click', functionUncompleate);

function functionUncompleate() {
    filterTaskHandler('uncompleted');
}



function filterTaskHandler(status) {
    let filterTasks = [];

    if (status === 'all') {
        filterTasks = tasks;

    } else if (status === 'completed') {
        filterTasks = tasks.filter((task) => task.classList.contains('list-item_done'));

    } else if (status === 'uncompleted') {
        filterTasks = tasks.filter((task) => !task.classList.contains('list-item_done'));

    }
    showTasks(filterTasks);


}


// function allButtonHandler() {
//     let allPart = [];
//     allPart = tasks.filter((element) => element.classList.contains('list-item'));
//     showTasks(allPart);
// }
// function completedButtonHandler() {
//     let completedPart = [];
//     completedPart = tasks.filter((element) => element.classList.contains('list-item_done'));
//     showTasks(completedPart);
// }
// function uncompletedButtonHandler() {
//     let uncompletedPart = [];
//     uncompletedPart = tasks.filter((element) => !element.classList.contains('list-item_done'));
//     showTasks(uncompletedPart);
// }





// MINE

// }
// let newTaskArray = arrayOfTaskObj.map(
//     (element) => {
//         const newTaskItem = document.createElement('li');
//         newTaskItem.classList.add('list-item');
//         newTaskItem.textContent = element.name;
//         newTaskItem.addEventListener('click', taskHandler);

//         return newTaskItem;

//     })





