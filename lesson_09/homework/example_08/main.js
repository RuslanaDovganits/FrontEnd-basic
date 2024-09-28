// Проверить является ли строка палиндромом.

let string = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота."

let string2 = string.replace(/[.,:]/g, ''); // убрали лишние знаки препинания
let reverce = string2.split(" ");


let reverceString = "";

for (let i = reverce.length - 1; i >= 0; i--) {
    reverceString += reverce[i] + " ";
}


console.log(string2);
console.log(reverceString.trim());

if (string2 === reverceString) {
    console.log("Эти две строки палиндромом!")
} else {
    console.log("Эти две строки не палиндромом!")
}


