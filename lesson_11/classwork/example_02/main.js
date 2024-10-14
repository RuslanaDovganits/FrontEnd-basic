const arrayExample = [1, 5, 10];

const funcWhatToDoWithElement = (n) => {
    console.log(n);
}

arrayExample.forEach(funcWhatToDoWithElement);


//for (let i = 0; i < arrayExample.length; i++) {
  //  funcWhatToDoWithElement(arrayExample[i]);
//}


// CLASSWORK # 1
// вызовим в консоль все ключи объекта JohnyDepp 
// Используя при этом методы .forEach(). keys()
const JohnyDepp = {
    name: 'John',
    surname: 'Depp',
    age: 61,
    hobbie: ['cricket', 'golf', "quadrober", "actor", "inging"],
    films: {
        1999: ['Pirates - 1', 'Edward Scissorhands', 'Sleepy Hollow'],
        2003: ['Pirates -3', 'Pirates -4'],
        2001: ['Pirates - 2', 'Cocaine']
    },

    singing: function () {
        console.log('I am singing')
    }
}
const keysOfJohny = Object.keys(JohnyDepp);
console.log(keysOfJohny);

keysOfJohny.forEach(funcWhatToDoWithElement);

// CLASSWORK # 2


// все хобби Джони вывести через forEach
JohnyDepp.hobbie.forEach(funcWhatToDoWithElement);

JohnyDepp['hobbie'].forEach(funcWhatToDoWithElement);

// пример как еще выводить через forEach
[1,4,8].forEach(funcWhatToDoWithElement);

