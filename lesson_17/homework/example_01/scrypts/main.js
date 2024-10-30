const inputElement = document.querySelector('.input');
const buttonElement = document.querySelector('.button');
const timerElement = document.querySelector('#timer');
const audioElement = document.querySelector('#audio')

console.log('start');
buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    let i = inputElement.value;
    const intervalId = setInterval(
        () => {
            timerElement.textContent = i;
            i--;

            if (i < 0) {
                clearInterval(intervalId);
               audioElement.play();
               
            }

        }, 1000
    )
}



















// console.log('start');
// buttonElement.addEventListener('click', buttonClickHandler);

// function buttonClickHandler() {

//     const intervalId = setInterval(
//         () => {
//             timerElement.textContent = i;
//             i--;

//             if(i < 0) {
//                 clearInterval(intervalId);
//             }

//         }, 1000
//     )



// }










