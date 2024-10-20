// Напишите функцию, которая принимает объект и возвращает другой более сложный обьект,
//  который содержит все свойства исходного обьетка, но значения свойств
//   - это объект содержащий исходное значение, и его тип.

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

const ObjToObj = (obj) => {
    let resultObj = {};
    let values = Object.entries(obj)

    values.forEach(element => {
        resultObj[element[0]] = { value: element[1], type: typeof element[1] };
    });

    return resultObj;


}
console.log(ObjToObj({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }));

