const age = 5;

if (age < 12) {
  console.log('Вы ребенок');
} else if (age < 18) {
  console.log('Вы подросток');
} else {
  console.log('Вы взрослый');
}

if (age > 6) {
  console.log('Вы большой ребенок');
}

console.log("=========");

const day = "tuesday";

switch (day) {
    case "monday": console.log("1");

       // break;

    case "tuesday": console.log("2");
       // break;

    default: console.log(3);
       // break;
}

console.log("=========");

let name = "Иван";

// Вставим переменную
console.log( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
console.log( `результат: ${1 + 2}` ); // результат: 3

console.log("=========");

const age2 = 5;

if (age < 12) {
  console.log('Вы ребенок');
} else if (age2 < 18) {
  console.log('Вы подросток');
} else {
  console.log('Вы взрослый');
}

if (age2 > 6) {
  console.log('Вы большой ребенок');
}

console.log("=========");

// тернарный оператор
const result = age < 18 ? 'Вы еще не взрослый' : 'Вы уже взрослый';

// с помощью if:
let resultWithIf;
if (age < 18) {
  resultWithIf = 'Вы еще не взрослый';
} else {
  resultWithIf = 'Вы уже взрослый';
}