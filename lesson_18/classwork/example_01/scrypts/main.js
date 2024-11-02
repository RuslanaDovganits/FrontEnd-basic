const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');

const btnClickHandeler = () => {
    //const bodyElement = document.querySelector('body');
    //bodyElement.append('Hello');
    console.log('Строка после завершения асинхронной операции');
}

// Колбэл обработчик тут
//buttonElement.addEventListener('click', btnClickHandeler);




const waitForClickPromise = new Promise((fullfill, reject) => {

    buttonElement.addEventListener('click', () => {
        if (inputElement.value) {
            fullfill(inputElement.value);
        } else {
            reject('Не введено значение');
        }
    });
});


waitForClickPromise
    .then((result) => {
        const bodyElement = document.querySelector('body');
        bodyElement.append(result);
    })
    .catch((err) => {
        console.log('Я не смог выполнить промис потому что: ', err);
    })
    
    .finally(
    () => { console.log('Фух, промис завершился. Асинхронную операцию выполнили. Задание полностью выполнили') }
)

