let string = "Как тебя зовут, Руслана и Инна нас зовут";
let newString = string.replace(/[.,:]/g, "");
let newString2 = newString.split(" ");
console.log(newString);


let howManyWords = [];
for (let i = 0; i < newString2.length; i++) {
    howManyWords[i] = newString2[i].length;

}

console.log(howManyWords);
let max = (Math.max(...howManyWords));
console.log(max);


