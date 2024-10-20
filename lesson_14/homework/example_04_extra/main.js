// Создайте функцию getCenturies, которая принимает массив лет и 
// возвращает массив столетий. Рекомендуется использовать метод map. 
// Пример работы функции:

const years = [1900, 1899, 2001, 2000, 1455, 14];

const getCenturies = years.map(element =>
    Math.ceil(element / 100));



console.log(getCenturies);
// [19, 19, 21, 20, 15, 1] 


