// подсчитать в предложении (строке) длину самого длинного слова

let string = "Привет меня зовут Руслана, я живу в Финляндии";

let newString = string.replace(/[.,:]/g, '').split(" ");


console.log("one " + newString);

let numOfLetters = [];   //  длины слов массива
for (let i = 0; i < newString.length; i++) {

numOfLetters[i] = newString[i].length;

}

console.log(numOfLetters);
let longestWord = (Math.max(...numOfLetters));
console.log("В самом длинном слове: "+ longestWord + " букв");















































