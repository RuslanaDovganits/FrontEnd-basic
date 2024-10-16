//Задание 4. Простые числа в заданном промежутке
//Нужно создать две функции.

//Первая функция должна принимать число и возвращать результат булевого типа - является ли число простым, или нет. Число является простым, если оно делиться без остатка только на 1 и само на себя.
//Вторая функция должна вернуть в виде массива все простые числа в промежутке от 1 до n, где n - первый аргумент функции.
//Вторая функция должна пользоваться первой функцией для определения простых чисел.
//Первая функция не должна быть колбеком, просто рядом лежать, или даже внутри второй функции. На ваш выбор.

function isPrimeNumber(n) {
    if (n <= 1) return false; // Числа меньше или равные 1 не являются простыми
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {   // Если число делится на i без остатка, оно не простое
            return false;
        }
    }
    return true;  // Если не нашлось делителей, число простое
}
console.log(isPrimeNumber(23));




function arrayOfNumbers(n) {
    let array = [];
    for (let i = 1; i < n; i++) {
        if (isPrimeNumber(i)) {
            array.push(i);
        }
    }
    return array;

}
console.log(arrayOfNumbers(20));
