// const isArrSubj = ["mathematics", "physics", "science", "mathematics", "physics", "biology", "physics"];

// // console.log(isArrSubj);
// // console.log(isArrSubj.indexOf("science"));

// //создаём новый массив без повторяющихся элементов
// const newMath = [];

// isArrSubj.map((obj, inx, arr) => {
//     // console.log(obj);
//     // console.log(inx);
//     // console.log(arr.indexOf(obj));

//     if (arr.indexOf(obj) === inx) newMath.push(obj);
// });
// console.log(newMath);

// ==========================================
// Задача 20/48


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Разглаживаем все массивы в один массив
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// // Создаём массив без повторений
// const uniqueGenres = allGenres.filter((book, index, arr) => (arr.indexOf(book) === index));
// console.log(uniqueGenres);

//======================================================================================================
//Задача 21/48


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
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// // метод filter возвращает новый массив с книгами, рейтинг которых больше чем 8. Деструктуризация объекта
// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// console.log(topRatedBooks);
// // здесь новый массив с книгами Bernard Cornwell. Деструктуризация объекта
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);
// console.log(booksByAuthor);

//======================================================================
//Задача 22/48

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
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
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
]
// выбираем пользователей с цветом заданным в color. Зачем здесь map?
const color = "brown";
// const getUsersWithEyeColor = (users, color) => {
// return  users.filter(user => user.eyeColor === color).map(user=>user);
// }

// Тоже самое. Кратка запись без return и фигурных скобок
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color).map(user=>user);


console.log(getUsersWithEyeColor(users, color));


 