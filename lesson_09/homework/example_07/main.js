// Перевернуть массив (аналог reverse).


let string = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота."
let string2 = string.replace(/[.,:]/g, '');




let reverce = string2.split(" ");

for (let i = reverce.length - 1; i >= 0; i--) {
    reverceString = console.log(reverce[i]);

}
