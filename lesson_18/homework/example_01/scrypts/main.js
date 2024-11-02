const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const all = document.getElementById('all');
const completed = document.getElementById('completed');
const uncompleted = document.getElementById('uncompleted');
const completeTask = document.querySelector('list-item');

createTask.addEventListener('click', buttonClickHandler);

let todos = [];
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        todos = data;
        console.log(todos);
    })
   

let newArrayFromToDo = [];
let liElement;
function buttonClickHandler() {
    createList.innerHTML = '';
    newArrayFromToDo = todos.slice(0,15).map(
        (OneElementOfArrayToDo) => {
            liElement = document.createElement('li');
            liElement.classList.add('list-item');
            liElement.addEventListener('click', taskHandler);

            liElement.textContent = OneElementOfArrayToDo.title;
            return liElement;
        }
    )
    createList.append(...newArrayFromToDo);
}


function taskHandler(event) {
    event.target.classList.toggle('list-item_done');
}


all.addEventListener('click', () => filterTaskHandler('all'));
completed.addEventListener('click', () => filterTaskHandler('completed'));
uncompleted.addEventListener('click', functionUncompleate);
function functionUncompleate() {
    filterTaskHandler('uncompleted');
}



function filterTaskHandler(status) {
    let filterTasks = [];

    if (status === 'all') {
        filterTasks = newArrayFromToDo;

    } else if (status === 'completed') {
        filterTasks = newArrayFromToDo.filter((task) => task.classList.contains('list-item_done'));

    } else if (status === 'uncompleted') {
        filterTasks = newArrayFromToDo.filter((task) => !task.classList.contains('list-item_done'));

    }
    showTasks(...filterTasks)
    //return filterTasks;


}


function showTasks(...array) {
    createList.innerHTML = '';
    createList.append(...array);
}







