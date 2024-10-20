// Есть массив обьектов ссылок со свойствами text и href. Тут нам нужна страничка. 
//Нужно выввести на страничку все ссылки из массива в виде списка ul. Пример массива ссылок:

const links = [
  {
    text: "Главная",
    href: "/",
  },
  {
    text: "О нас",
    href: "/about/",
  },
  {
    text: "Цены",
    href: "/price/",
  },
  {
    text: "Контакты",
    href: "/contacts/",
  },
];

const allListElement = document.querySelector('ul');

const linksModified = links.map(createNewListItem);


function createNewListItem (element) {
  const newListItemElement = document.createElement('li');
  newListItemElement.textContent = element.href;
  return newListItemElement;
}
console.log(linksModified);

allListElement.append(...linksModified);



// *****************

// links.forEach(
//   element => {
//     const newListItemElement = document.createElement('li');
//     newListItemElement.textContent = element.href;
//     allListElement.append(newListItemElement);

//   });

// function createAndAddnewListItem(element) {
//   const newListItemElement = document.createElement('li');
//   newListItemElement.textContent = element.href;
//   allListElement.append(newListItemElement);
// }
// links.forEach(createAndAddnewListItem);