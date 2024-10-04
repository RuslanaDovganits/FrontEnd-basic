// Задание 6. (необязательное)
//Напишите функцию reverseWords(str), принимающую на вход строку. 
//Функция должна вернуть новую строку, расставив слова в обратном порядке.Если в строке есть знаки препинания, 
//их можно удалить или оставить — на ваше усмотрение.

function reverseWords(str) {
    let str2 = str.replace(/[.,:]/g, '').split(" ");
    let newString = "";
    for (let i = str2.length - 1; i >= 0; i--) {
        newString += str2[i] + " ";
      
    }
      return newString.trim();
}

console.log(reverseWords("Hello , my name is Ruslana"));



