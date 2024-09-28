// МАССИВ

const arrA = [1, 3, 5]; // 
const arrA1 = [1, 3, 5, "abcd", true, null, undefined, [10, 100], { a: 67 }]; // 
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const firstElemOfB = b[6];
console.log(firstElemOfB);
console.log(b.length);


const resultofPush = b.push("new last element");      // добавляет элемент в конец
console.log(b);

b.push("inna");                                       // добавляет элемент
console.log(b);

console.log(resultofPush);
const resultOfPop = b.pop();                          // удоляет последний элемент
console.log(b); 
console.log(resultOfPop);

console.log("==========");

b.unshift("new FIRST ELEMENT");
console.log(b);
b.shift();
console.log(b);

const b2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
b2.push(b2[0]);
b2.shift();
console.log(b2);





