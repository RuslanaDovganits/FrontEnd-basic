//  **** тело ответа сервера

console.log('Начало кода!')
const randomJokePromice = fetch('https://official-joke-api.appspot.com/random_joke');

console.log('Конец синхронного кода!')

// const bodyOfRandomJoke = randomJokePromice.then(
//     (resultOfRequest) => {
//         return resultOfRequest.json();

//     }
// );

// bodyOfRandomJoke.then(
//     (body) => {
//         console.log(body)
//     }
// )




randomJokePromice
.then((resultOfRequst) => {
  return resultOfRequst.json();
})
.then(
    (body) => {
        doSomeWithResponseBody(body);
        console.log(body);
    }
)
console.log(body);
//  **** тело ответа сервера!!!!!!=========================

// Можно сразу вот так , не присваивая в переменную
// fetch(
//     'https://official-joke-api.appspot.com/random_joke'
// ).then((resultOfRequest) => {
//     return resultOfRequest.json();
// })
// .then(
//     (body) => {
//         console.log(body)
//     }
// )

function doSomeWithResponseBody(responseBody) {
    const bodyElement = document.querySelector('body');
    const fistPartOfJokeElement = document.createElement('p');
    fistPartOfJokeElement.textContent = `${responseBody.setup} ${responseBody.punchline}`;
    bodyElement.append(fistPartOfJokeElement);



}

