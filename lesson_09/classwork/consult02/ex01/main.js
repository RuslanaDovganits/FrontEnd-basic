const arrayOfNumbers = [2, 4, "john", 10];

console.log(...arrayOfNumbers);

console.log(Math.max(...arrayOfNumbers));

const arrayOfNumbers2 = [0,1, ...arrayOfNumbers];
console.log(arrayOfNumbers2);


console.log(arrayOfNumbers2);

const arrayOfNumbersMod = [...arrayOfNumbers];
arrayOfNumbersMod.push('last element');

console.log(arrayOfNumbers);
console.log(arrayOfNumbersMod);











