//  Задание 5. (необязательное)
// «FizzBuzz»

//  Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число. Функция должна выводить в консоль числа от 1 до n, заменяя числа:

// • кратные трём — на fizz; • кратные пяти — на buzz; • кратные и трём, и пяти одновременно — на fizzbuzz


function fizzBuzz(n) {
    let aarNumbers = [];
    for (let i = 1; i < n; i++) {

        if (i % 3 === 0) {
            aarNumbers[i] = i + " fizz";
        } if ((i % 5 === 0)) {
            aarNumbers[i] = i + " buzz";
        }
        if ((i % 3 === 0) && (i % 5 === 0)) {
            aarNumbers[i] = i + " fizzbuzz";
            
        } 

        aarNumbers.push([i]);
    }

    return aarNumbers;


}
console.log(fizzBuzz(20));

