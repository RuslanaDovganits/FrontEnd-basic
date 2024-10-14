// Функция должна принимать объект и возвращать строку,
// где будут перечислены все значения свойств объекта через запятую.

//{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'


const ObjToString = (Obj) => {
    let valuesOfObj = Object.values(Obj);

    return valuesOfObj.join(" , ");
}
console.log(ObjToString({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }));
























