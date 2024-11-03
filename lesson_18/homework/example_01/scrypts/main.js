const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const all = document.getElementById('all');
const completed = document.getElementById('completed');
const uncompleted = document.getElementById('uncompleted');
const completeTask = document.querySelector('list-item');


fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        doSomethinWithData(data)


        function doSomethinWithData(toDoList) {
            createList.innerHTML = '';

            newArrayFromToDo = toDoList.slice(0, 5).map(
                (oneElementOfArrayToDo) => {
                    let liElement = document.createElement('li');
                    liElement.classList.add('list-item');
                    liElement.textContent = oneElementOfArrayToDo.title;
                    if (oneElementOfArrayToDo.completed == true) {
                        liElement.classList.add('list-item_done')

                    }
                    liElement.addEventListener('click', taskHandler);

                    return liElement;

                }



            )
            createList.append(...newArrayFromToDo);

            createTask.addEventListener('click', buttonClickHandler);
            function buttonClickHandler() {

                const myLiElement = document.createElement('li');
                myLiElement.textContent = inputTask.value;
                myLiElement.classList.add('list-item');
                myLiElement.addEventListener('click', taskHandler);
                createList.append(myLiElement);
                inputTask.value = '';
                
            }


        }

    }
    )


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



}


function showTasks(...array) {
    createList.innerHTML = '';
    createList.append(...array);
}







