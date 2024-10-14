// ключ - строка ( или символ) , значение - любое
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
// чтение свойств обьекта
// 1
console.log(JohnyDepp.name);

// 2
console.log(JohnyDepp['name']);

// разница 
const request = 'age';
console.log(JohnyDepp.request); // так не работает!
console.log(JohnyDepp[request]);

// Добавить свойство Height
JohnyDepp.height = 175;
console.log(JohnyDepp);

// Удаление свойства
delete JohnyDepp.age;
console.log(JohnyDepp);

for (let k in JohnyDepp) {
    //console.log(k);
    console.log("все свойства: " + JohnyDepp[k]);

}
// Прочитаем значения свойства 1999 в значении свойства FILMS
console.log(JohnyDepp['films']['1999'][0]);

// Вызовим метод (функцию) у Обькта JohnyDepp
JohnyDepp.singing();

// Проверка есть ли свойство у объекта. Есть ли у Johny age
console.log('age' in JohnyDepp);


const human = {
    limbs: 4,
    walking: function () {
        console.log('I am walking');
    },
}


// и укажем что human - прототип. (Object - конструктор)
Object.setPrototypeOf(JohnyDepp, human);

// проверяем унаследовался ли метод от human
JohnyDepp.walking();

// создание обьекта с помощью литерала обьекта
const someObj = {};
// создание обьекта с помощью конструктора
const someAnotherObject = new Object();

// У каждого обьекта есть как минимум один прототип, он хранится 
// в статическом свойстве конструктора Object.prototype и автоматически
// становиться прототипом у каждого нового обьекта

console.log("*********************");


// *****************
// Метод для работы с объектами
// Получить ключи в виде массива
const keysOfJohnyDepp = Object.keys(JohnyDepp);
console.log(keysOfJohnyDepp);

// Получить значения в виде массива
const valuesOfJohnyDepp = Object.values(JohnyDepp)
console.log(valuesOfJohnyDepp);

// Получить список их ключей и их значений
// [  [key, value ], [...], [...], [...],[....]]
const entriesOfJohnyDepp = Object.entries(JohnyDepp);
console.log(entriesOfJohnyDepp);

// Как из массива получить объект
// элементы массива обязательно должны быть на 2 элемента
const cloneOfJohn = [
    ['name', 'John'],
    ['surname', 'Depp'],
    ['hobbie', ['cricket', 'golf', 'quadrober', 'actor', 'inging']],
    ['height', 175]
]
const cloneOfJohnObject = Object.fromEntries(cloneOfJohn);
console.log(cloneOfJohnObject);






// Еще пример объекта
// Из ообьекта RikkiMartinShow  вытянуть сначала массив ключей а потом массив значений
// Сохранить в отдельные переменные
const RikkiMartinShow = {
    time: '17-00',
    place: 'Bernin',
    prise: '100',
    duration: '4'
}
// Получить ключи в виде массива
const keysOfRikki = Object.keys(RikkiMartinShow);
console.log(keysOfRikki);

// Получить значения в виде массива
const valuesOfRikki = Object.values(RikkiMartinShow)
console.log(valuesOfRikki);


