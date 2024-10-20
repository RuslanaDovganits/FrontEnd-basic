// 1. Надо добвить каждому игроку ключ (свойство) 'goals'
// и туда записать случайное число от 0 до 20. При этом должен быть сформирован новый массив
// 2. Отфидьтровать и вывести в консоль всех игроков, у которых рост >= 180 и вес < 80.
// 3. ** Отсортировать игроков по количеству забитых голов.

// 1.
console.log('*********** Task 1 ***************') 

let players = [{ name: "Alex", height: 190, weight: 85, sport: "rugby" },
{ name: "Boris", height: 180, weight: 75, sport: "football" },
{ name: "Vladimir", height: 175, weight: 70, sport: "hockey" },
{ name: "George", height: 185, weight: 80, sport: "rugby" },
{ name: "Dmitry", height: 170, weight: 65, sport: "hockey" },
{ name: "Eugene", height: 195, weight: 90, sport: "football" },
{ name: "Zachary", height: 188, weight: 82, sport: "rugby" },
{ name: "Ivan", height: 182, weight: 77, sport: "football" },
{ name: "Kirill", height: 178, weight: 73, sport: "hockey" },
{ name: "Leonid", height: 192, weight: 87, sport: "rugby" },
{ name: "Michael", height: 176, weight: 71, sport: "hockey" },
{ name: "Nicholas", height: 198, weight: 93, sport: "football" },
{ name: "Oleg", height: 186, weight: 79, sport: "rugby" },
{ name: "Paul", height: 174, weight: 69, sport: "hockey" },
{ name: "Roman", height: 184, weight: 78, sport: "football" }];

const addGoals = (human) => {
    let playersWithGoals = { ...human };
    playersWithGoals['goal'] = Math.floor((Math.random()) * 20) + 1;
    return playersWithGoals;
}

const newList = players.map(addGoals);
console.log(newList);

// 2. 
console.log('*********** Task 2 ***************') 
let players2 = [{ name: "Alex", height: 190, weight: 85, sport: "rugby" },
{ name: "Boris", height: 180, weight: 75, sport: "football" },
{ name: "Vladimir", height: 175, weight: 70, sport: "hockey" },
{ name: "George", height: 185, weight: 80, sport: "rugby" },
{ name: "Dmitry", height: 170, weight: 65, sport: "hockey" },
{ name: "Eugene", height: 195, weight: 90, sport: "football" },
{ name: "Zachary", height: 188, weight: 82, sport: "rugby" },
{ name: "Ivan", height: 182, weight: 77, sport: "football" },
{ name: "Kirill", height: 178, weight: 73, sport: "hockey" },
{ name: "Leonid", height: 192, weight: 87, sport: "rugby" },
{ name: "Michael", height: 176, weight: 71, sport: "hockey" },
{ name: "Nicholas", height: 198, weight: 93, sport: "football" },
{ name: "Oleg", height: 186, weight: 79, sport: "rugby" },
{ name: "Paul", height: 174, weight: 69, sport: "hockey" },
{ name: "Roman", height: 184, weight: 78, sport: "football" }];


const sortWeightAndHeight = (human) => {
    if (human.height >= 180 && human.weight < 80) {
        return true;
    } else {
        return false;
    }

}
console.log(players2.filter(sortWeightAndHeight));

// 3.
console.log('*********** Task 3 ***************') 
let players3 = [
    { name: 'Alex', height: 190, weight: 85, sport: 'rugby', goal: 22 },
    { name: 'Boris', height: 180, weight: 75, sport: 'football', goal: 23 },
    { name: 'Vladimir', height: 175, weight: 70, sport: 'hockey', goal: 8 },
    { name: 'George', height: 185, weight: 80, sport: 'rugby', goal: 12 },
    { name: 'Dmitry', height: 170, weight: 65, sport: 'hockey', goal: 11 },
    { name: 'Eugene', height: 195, weight: 90, sport: 'football', goal: 1 },
    { name: 'Zachary', height: 188, weight: 82, sport: 'rugby', goal: 25 },
    { name: 'Ivan', height: 182, weight: 77, sport: 'football', goal: 16 },
    { name: 'Kirill', height: 178, weight: 73, sport: 'hockey', goal: 23 },
    { name: 'Leonid', height: 192, weight: 87, sport: 'rugby', goal: 16 },
    { name: 'Michael', height: 176, weight: 71, sport: 'hockey', goal: 30 },
    { name: 'Nicholas', height: 198, weight: 93, sport: 'football', goal: 6 },
    { name: 'Oleg', height: 186, weight: 79, sport: 'rugby', goal: 18 },
    { name: 'Paul', height: 174, weight: 69, sport: 'hockey', goal: 3 },
    {name: 'Roman', height: 184, weight: 78, sport: 'football', goal: 22}
]

const sortByGoals = (a, b) => {

    return a.goal - b.goal;
}
console.log(players3.sort(sortByGoals));






