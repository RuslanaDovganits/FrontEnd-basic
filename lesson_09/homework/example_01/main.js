// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. 
//Найти максимальное и минимальное значение в массиве.
//(НЕ используем Math.min/max) Вывести в консоль.

const array = [];

for (let i = 0; i < 10; i++) {
    array[i] = Math.round(Math.random() * 100);
}
console.log(array);

let maxNum = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
        maxNum = array[i];

    }

}
console.log(" max Number is: " + maxNum);

let minNum = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
        minNum = array[i];
    }

}
console.log("min Number is: " + minNum);








