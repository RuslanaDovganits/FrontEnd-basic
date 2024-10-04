console.log("Hello world");


/* типы данных в JS
1. Number
2. Boolean
3. String
4. Undefined
5. Null
6. BigInt (не используют)
7. Symbol (не используют)
8. Object


ОБЬЯВЛЕНИЕ ПЕРЕМЕННЫХ:

let a = "a";
*/

let a = "a";
console.log( typeof a);

a = 5;
console.log(typeof a);

const b = "abc";
//b = 565;

const c = a;
console.log("c = " + c);
a = 10;
console.log("c = " + c);


// Ссылочнный тип данных
let objA = {a : 1};
let objB = objA;
objA.a = 5;
console.log(objB);



// Значение переменных

let x = null;
console.log("typeof x"); // type of NULL возвращает Object
x = 10; // x - number

let y = 11;

// let z = Number("5"); не используется для создания

var z = 10; // устаревший способ

// названия переменных
/*
a - z;
0 - 9;
_
$
нельзя начинать с Number
camelCase2
NO зарезвированные слова (for, class...)

*/


