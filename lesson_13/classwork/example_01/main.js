// MAP 

const arr123 = [5, 10, 30];

const multiple2 = (x) => {
    return x * 2;
};

const arr123modified = arr123.map(multiple2);

console.log(arr123modified);


// ** 2

const arrOfPeople = [
    { name: 'John', age: 12 },
    { name: 'Bred', age: 5 },
    { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 40 }

];

const addAgeFunc = (human) => {
    const resultObj = { ...human };
    resultObj.name = human.name;
    resultObj['age'] = human['age'] + 1;
    return resultObj;
}
const addAge = arrOfPeople.map(addAgeFunc);
console.log(addAge);





const addAnniversary = (human) => {
    const resultObj = {};
    resultObj.name = human.name;
    resultObj['age'] = human['age'];

    //let isAdult;
    // if(resultObj.age >= 18) {
    //     isAdult = true;
    // } else {
    //     isAdult = false;
    // }

    const isAdult = resultObj.age >= 18 ? true : false;
    resultObj.anniversary = isAdult;
    return resultObj;
}
const arrOfPeopleModified = arrOfPeople.map(addAnniversary);
console.log(arrOfPeopleModified);


// Способы обьявления функций

// function declaration
// function NameOfFunction() {
// }

// function expression
// const NameOfFunction = function() {
// }

// function expression with arrow function
// const NameOfFunction = () => {
// }

// spread
const sourceArray = [1, 2, 3];
const copyOfArray = [...sourceArray]

const sourceObj = { name: 'John', age: 12 };
const copyOfObj = { ...sourceObj };
console.log(copyOfObj);




// FILTER
const arrayOfNumber = [18, 59, 1, 8, 17, 111];

// const filter18 = (num) => {
//   if (num >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const filter18 = (num) => num >= 18 ? true: false;

// const filter18 = num => num >= 18;

const arrayOfNumber18Plus = arrayOfNumber.filter(num => num >= 18);
console.log(arrayOfNumber18Plus);



const arrOfPeople5 = [
    { name: 'John', age: 12 },
    { name: 'Bred', age: 5 },
    { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 40 }

];

// Классная работа 2
// const arrOfPeople = [
//     { name: 'John', age: 12 },
//     { name: 'Bred', age: 5 },
//     { name: 'Patrick', age: 20 },
//     { name: 'Cris', age: 40 },
//   ];
// С помощью функции filter вернем массив который содержит только элементы
// у которых age >=18

const filtet18PlusForObjects = (human) => {
    if (human.age >= 18) {
        return true
    } else {
        return false
    }
}

console.log(arrOfPeople.filter(filtet18PlusForObjects));










