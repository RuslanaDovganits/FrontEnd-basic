
const inputElement = document.querySelector('.input');
const buttonElement = document.querySelector('.button');
const bodyElement = document.querySelector('body');

buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    const userNameGit = inputElement.value;

    fetch(`https://api.github.com/users/${userNameGit}`)
        .then((response) => {
            return response.json();
        })
        .then((users) => {
            doSomethinWithData(users)
            console.log(users);
            function doSomethinWithData(human) {

                const userNameString = document.createElement('h1');
                userNameString.textContent = human.name;
                bodyElement.append(userNameString);


                const userAvatar = document.createElement('img');
                userAvatar.style.width = '200px'
                userAvatar.src = human.avatar_url;
                bodyElement.append(userAvatar);

            }


        })
}





// const bodyElement = document.querySelector('body');
// const userName = document.createElement('h1');
// userName.textContent = users.name;
// bodyElement.append(userName);

// const userAvatar = document.createElement('img');
// for (let i = 0; i < userAvatar.length; i++) userAvatar[i].style.width = '200px';
// userAvatar.style.width = '100px'
// userAvatar.src = users.avatar_url;
// bodyElement.append(userAvatar);

// const inputElement = document.createElement('.input');








//users.avatar_url = document.createElement('img').append('body')













