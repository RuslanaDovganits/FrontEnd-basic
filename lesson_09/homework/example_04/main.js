// Объявить массив из 10 элементов и заполнить его случайными числами 
// от 1 до 50. Найти сумму всех элементов массива. Вывести в консоль.

const array = [];
let sum = 0;
for (let i = 0; i < 10; i++) {
    array[i] = Math.round(Math.random() * 50);
sum  +=  array[i];

}

console.log(array);
console.log("Sum of all elements: " + sum);

