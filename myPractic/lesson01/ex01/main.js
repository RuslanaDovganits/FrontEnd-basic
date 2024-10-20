function printMyName() {
    console.log('Ruslana');
}
console.log('start');
//setTimeout(printMyName, 1000);

const name = 'Ruslana';
const city = 'Helsinki';
console.log(`Hello, my name is  ${name} and I am from ${city}`);

let result = ((a, b) => {
    let c;
    a = a + 1
    c = a + b
    return c;

})(7, 8)

console.log(result);


const multy = (value, multiplay = 1) => {
    return value * multiplay;
}
console.log(multy(2, 5));
console.log(multy(8));

const multi2 = (one, two = 2) => one + two;

console.log(multi2(10));
//********************/
console.log(Date());

//==================================================== НЕ ЯВНОЕ RETURN

const newPost = (post, addedAt = Date()) => ({

    ...post,
    addedAt,
});
const firstPost = {
    id: 1,
    author: 'Ruslana',
}
console.log(newPost(firstPost))



//==================================================== ЯВНОЕ RETURN
const newPost2 = (post, addedAt = Date()) => {
    return {
        ...post,
        addedAt,
    }
}
const firstPost2 = {
    id: 1,
    author: 'Ruslana',
}
console.log(newPost(firstPost))

// ======================================FOR EACH

const myArray = [1, 4, 76, 2];
console.log(myArray);
let newArray = []
myArray.forEach(el =>
    newArray.push(el * 2)

);
console.log(newArray)

//

const myArray2 = [1, 4, 3, 2];
let newArray2 = [];
const DoubleNumbersArray = (numbers) => {
    numbers.forEach(element => {
        newArray2.push(element * element)

    });
    return newArray2;

}
console.log(DoubleNumbersArray(myArray2));

const arrayFromStr = ['one', 'Hello24', '1234 my Good'];



const myFunc = (strings, letter) => {
    let newArrayFromStr = [];
    strings.forEach(element => {
        if (element.includes(letter)) {
            newArrayFromStr.push(element);
        }
    });
    return newArrayFromStr;
}
console.log(myFunc(arrayFromStr, 'y'));



//===================================================  MAP  ==========
// RETURN
const arrayMap = [1, 2, 3];

const newArrayMap = arrayMap.map((element) => {
    return element * 3;

})

console.log(newArrayMap);

// NO RETURN

const arrayMap2 = [1, 2, 3];

const newArrayMap2 = arrayMap.map(element =>
    element * 3)

console.log(newArrayMap);










