
const time = "08:98";

let newTime = time.split(':');

console.log(newTime);

const minutes = newTime[1];
console.log(minutes);

if (minutes > 1 && minutes <= 15) {
    console.log("первая четверть")
    //return;
} else if (minutes >= 16 && minutes <= 30) {
    console.log("вторая четверть")
    //return;
} else if (minutes > 31 && minutes <= 45) {
    console.log("третья четверть")
} else if (minutes > 46 && minutes <= 59 || minutes == 0) {
    console.log("четвертая четверть")
} else {
    console.log("не правильно ввели время!")
}  




