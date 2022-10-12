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


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Разглаживаем все массивы в один массив
const allGenres = books.flatMap(book => book.genres);
console.log(allGenres);
// Создаём массив без повторений
const uniqueGenres = allGenres.filter((book, index, arr) => (arr.indexOf(book) === index));
console.log(uniqueGenres);

