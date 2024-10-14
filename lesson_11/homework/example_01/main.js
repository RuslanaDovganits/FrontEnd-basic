// напиши функцию которая будет принимать массив. массив может содержать любые строки и числа.
// Функция должна вернуть объект, который содержит свойства, ключь и значение 
// которые равны соответствуещему элементу массива
// ['a', 36.6, 'John Doe']  => { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }


const arrToObject = (array) => {
    const resultObject = {};

    array.forEach((element) => {
        resultObject[element] = element;
    });
    return resultObject;
}
console.log(arrToObject(['a', 36.6, 'John Doe']));





// const arrayExample =  ['a', 36.6, 'John Doe'];
// let Obj = {};
// arrayExample.forEach(item => {
//     Obj[item] = item
// });

// console.log(Obj);
