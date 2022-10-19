//Reduce
const isArrSum = [1, 2, 3, 4];
  //здесь метод reduse сладывает все элементы в массиве. Получаем 10
console.log(Array.isArray(isArrSum));
 // previousValue - это аккумулятор. 0 - второй аргумент колбэк функции, это его начальное значение
const isNewSum = isArrSum.reduce((previousValue, element) => {
    return previousValue = previousValue + element;
}, 0);

console.log(isNewSum);// получаем 10

// ====================================================================================
// Task 34/48 reduce()

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line
// // console.log(playtimes);
// //получаем сумму
// const totalPlayTime = playtimes.reduce((previousValue, num)=>{
//     return previousValue = previousValue + num;
// }, 0);

// console.log(totalPlayTime);//2692

// const averagePlayTime = totalPlayTime / playtimes.length;

//========================================================================================
// Task 35/48

// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
// и получить общую сумму этих времён.Рассчитать время для каждого из игроков, можно разделив его
// время(свойство playtime) на количество игр(свойство gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((previousValue, obj) => {
//     return previousValue = previousValue + obj.playtime / obj.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);// 1023
// ====================================================================================
// Task 37/48

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// // console.log(users[2].friends.length);

// //Здесь функция считает количество друзей во всех объектах. Метод reduce()

// const getTotalFriendCount = users => users.reduce((accumulator, user) => {
//     return accumulator = accumulator + user.friends.length;
    
// }, 0)
// //0 это первое значение accumulator
// console.log(getTotalFriendCount(users));