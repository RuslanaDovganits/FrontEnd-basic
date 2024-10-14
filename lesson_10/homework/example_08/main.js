// // Функцию, которая принимает массив как первый аргумент, и функцию как второй аргумент.
// возвращает нам новый массив, где каждый элемент,
// это результат работы функции колбека для каждого элемента массива (которая второй аргумент).


const functionMap = (arr, func) => {
    const resArray = [];

    for (let i = 0; i < array.length; i++) {
        resArray.push(func(arr[i]));
    }

    return resArray;

}
console.log(functionMap([2, 3, 4, 5, 6, 7, 8, 9, 10], isPrimeNumber));








/*function tiGetSomething ( array, funct ) {
let whatArray = [];

for (let i = 0; i < array.length; i++) {
    whatArray.push(funct(array[i]));

    return whatArray;
    
}


}

*/