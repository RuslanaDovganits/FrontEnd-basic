// Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.
//Разбить строку на слова и вывести в консоль по одному слову в строке. 
//Не забыть удалить знаки пунктуации.

let string = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота."
let string2 = string.replace(/[.,:]/g, '');

const newString = string2.split(" ");
console.log(string2);
















