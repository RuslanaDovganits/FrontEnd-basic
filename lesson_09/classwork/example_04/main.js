// MATH

const randNumber = Math.random();
console.log(randNumber);

// СЛУЧАЙНЫЕ ЧИСЛА

const roundedNum = Math.round(4.67);
console.log(roundedNum);

const roundedNumFloor = Math.floor(4.99);
console.log(roundedNumFloor);

const roundedCeil = Math.ceil(4.01);
console.log(roundedCeil);


// Возведение в степень
const pow = Math.pow(2, 3);
console.log(pow);

// MIN & MAX

const maxNumber = Math.max(456, 8754, 65, -43);
console.log(maxNumber);

const minNumber = Math.min(456, 8754, 65, -43);
console.log(minNumber);



// Классная работа 
//Создать пустой массив
//Заполнить случайными числами от 0 до 10
// Длина массива 15

const array = [];
for (let i = 0; i < 15; i++) {
array[i] = Math.round(Math.random ()* 10);
}
console.log(array);



const array2 = [];

for(let i = 0; i < 15; i++){
    array2.push(Math.round(Math.random ()* 10));
}
console.log(array2);












//const randNumber2 = Math.round(Math.random() * 10);
//console.log(randNumber2);