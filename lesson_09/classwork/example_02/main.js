// ЦИКЛЫ


const b = ["a", 2, 3, 4, 5, 6, 7, 8, 9, "end"];
let allElementsOfArray = '';

for (let i = 0; i < b.length; i++) {
    //console.log("Это проход цикла номер " + i);
    console.log(b[i]);
    allElementsOfArray = allElementsOfArray + " " + b[i];

}
console.log(allElementsOfArray);

//Цикл WHILE

let j = 0; //делаем счетчик

while (j < b.length) {
    allElementsOfArray = allElementsOfArray + " " + b[j];
    j++;
}

console.log("===============")

const arrC = [];

for(let i = 5; i <= 9; i ++) {
    arrC.push(i);
    
}
console.log(arrC);


