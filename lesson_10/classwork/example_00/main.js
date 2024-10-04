// FUNCTION DECLARATION  # TASK 1  ***  возвести в квадрат
const doubleNumberExpression = function (n) {
    return n * 2;
}
console.log(doubleNumberExpression(75));


// FUNCTION DECLARATION  # TASK 2 
//решение (функция возвращает значение)
function greeting(name) {
    if (typeof name === "string") {
        return `Hello ${name}`
    } else {
        return `Введите корректное значение`
    }
}
console.log(greeting("John"));



//  функция ничего не возвращает  ## VOID ## даем строку и возвращает имя
function greetingVoid(name) {
    if (typeof name === "string") {
        console.log(`Hello ${name}`)
    } else {
        console.log(`Введите корректное значение`)
    }
}

greetingVoid("Johnny Depp");




// =========== Class work =============
// Нужно 2 стрелочные функции
// Один аргумент - строка
// Одна функция считает кол-во символов в строке и возращает это число
// Вторая просто считает и забывает вернуть
// ====================================

const countSymbols = (text) => {
    const resultOfFunc = (typeof text === "string") ? text.length : 'Не строка';
    return resultOfFunc;
}

const countSymbolsNoReturn = (text) => {
    const resultOfFunc = (typeof text === "string") ? text.length : 'Не строка';
}

console.log(countSymbols("Hello People!"));


// перепишем функцию {} - скобки опустили и return срабатывает автоматом
const countSymbols2 = text => (typeof text === "string") ? text.length : 'Не строка';

console.log(countSymbols2("Hello People!"));









