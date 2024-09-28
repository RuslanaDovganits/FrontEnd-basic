// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75.
// Найти минимальное и максимальное значение в массиве.
// Вывести в консоль их сумму.
const array = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.round(Math.random() * 75);

}

console.log(array);
let maxNum = (Math.max(...array));
console.log("Max num is: " + maxNum);
let minNum = (Math.min(...array));
console.log("Min number is: " + minNum);

const sum = maxNum + minNum;
console.log("Sum of Max and Min = " + sum);




