// Объвить массив из 10 любых элементов, заполнить. 
//Вырезать первый элемент и добавить его в конец массива.

const array = [2, 6, 9, "cat", -456, "hello", 34, -324, 0];
console.log("array BEFORE : " + array);
const fistElement = [0];
const firstElement = array.shift(fistElement);
array.push(firstElement);
console.log("array AFTER  : " + array);












