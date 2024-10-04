// ФУНКЦИИ
//const randN = Math.random();


// =1= FUNCTION DECLARATION - ФУНКЦИЯ ОБЪЯВЛЕНИЕ
function doubleNumber(n = 1000) {
    const res = n * 2;
    return res;
};

//const resDouble10 = doubleNumber(10);        1 ВАРИАНТ
//console.log(resDouble10);

console.log(doubleNumber(50));            //   2 ВАРИАНТ

console.log(doubleNumber(25, 30));

console.log(doubleNumber());



// =2= FUNCTION EXPRESSION  - ФУНКЦИЯ ВЫРОЖЕНИЕ

const doubleNumberExpression = function (n = 1000) {
    return n * 2;
}
console.log(doubleNumberExpression(75));




// =2= ARROW FUNCTION

const doubleNumberArrow = (n) => {
    return n * 2;
}
console.log(doubleNumberExpression(275));




// FUNCTION DECLARATION  # NOT VOID
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














