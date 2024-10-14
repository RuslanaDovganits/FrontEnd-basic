// Напишите функцию, которая превратит массив который содержит элементы 
// в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ,
// второй - значение. Например такой:

const arrayToObj = (array) => {
    const resultObject = {};
    array.forEach(element => {
        resultObject[element[0]] = element[1];
    }
    );
    return resultObject;
}

console.log(
    arrayToObj(
        [
            ['height', 170],
            ['weight', 80],
            ['sport', 'regbi'],
            ['full name', 'John Doe'],
            ['sing', 'love'],
            ['speed', 90]
        ]
    )
)

