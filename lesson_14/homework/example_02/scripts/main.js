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


const hrefToLi = links.map(element => {

  const newListItemElement = document.createElement('a');
  newListItemElement.href = element.href;
  newListItemElement.text = element.text;
  newListItemElement.textContent = element.text;
  return newListItemElement;
});
allListElement.append(...hrefToLi);







// *****************

// links.forEach(
//   element => {
//     let newListItemElement = document.createElement('li');
//     newListItemElement.textContent = element.href;
//     allListElement.append(newListItemElement);

//   });

