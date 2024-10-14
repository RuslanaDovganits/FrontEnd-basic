/*
Задание 7. (необязательное)
Напишите функцию intersection(arr1, arr2). Она должна принимать на вход два массива целых чисел.
Функция должна вернуть новый массив чисел, содержащихся в обоих исходных массивах.

Протестируйте решение, вызывая функцию с разными аргументами:
console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
 // должна вернуть [4, 1] console.log(intersection([1, 5, 4, 2], [7, 12])); 
 // должна вернуть [] console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0])); // должна вернуть []
*/

function intersection(arr1, arr2) {

    
    const duplicatedValues = [...new Set(arr1)].filter(item => arr2.includes(item));

   
return duplicatedValues;
}
console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0]));

