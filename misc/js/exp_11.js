// Задача 45/48
// sort(), filter(), map()

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
//     .sort((a, b) => a.author.localeCompare(b.author))
//     .filter(itm => itm.rating > MIN_BOOK_RATING)
//     .map(itm => itm.author)
// console.log(names);

//====================================================================================

// const newArr = [201, 5, 100, 2, 1, 7, 3, 4,];

// // console.log(Array.isArray(newArr));
// // console.log(newArr.length);
// const newArrToo = [...newArr].sort((a, b) => a - b);
// console.log(newArrToo);

// const scores = [100, 61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b)=>a - b);

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
//=====================================================================================

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];
// Задача 45/48

// const getNamesSortedByFriendCount = users => [...users]
//   .sort((a, b) => a.friends.length - b.friends.length)
//   .map((itm) => itm.name);

// console.log(getNamesSortedByFriendCount(users));

// ===================================================================

// Задача 47/48

const getSortedFriends = (users) => {
    return (users)
        .flatMap(user => user.friends)
        .filter((user, inx, arr) => arr.indexOf(user) === inx)
        .sort((a, b) => a.localeCompare(b));
        
};
console.log(getSortedFriends(users));





    


