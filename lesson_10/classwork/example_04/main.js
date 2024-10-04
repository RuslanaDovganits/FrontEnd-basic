

const functionPow = x => x**2;




const doubleArray = (arr) => {
    const element = [];
    for (let index = 0; index < arr.length; index++) {
        element[index] = arr[index] * arr[index];
        //element.push(arr[index] * arr[index])
    }
    return element;
}
console.log(doubleArray([2, 4, 6, 7]));
