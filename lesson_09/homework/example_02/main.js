// Объвить массив из 10 любых элементов, заполнить. 
//Вырезать первый элемент и добавить его в конец массива.

const array = [2, 6, 9, "cat", -456, "hello", 34, -324, 0];
console.log("array BEFORE : " + array);
let firstElement = [0];
array.shift();
array.push(firstElement);
console.log("array AFTER  : " + array);












